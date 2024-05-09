import { Connection } from '@solana/web3.js';
import { useEffect, useState } from 'react';

import config from '@/config/devnet';
import IConfiguration from '@/config/IConfiguration';
import { verifyRpcConnection } from '@/utils';

const useRpc = ({ customRpcUrl }: { customRpcUrl: string | null }) => {
  const [RpcOptions, setRpcOptions] = useState<IConfiguration['RpcOptions']>(
    config.RpcOptions,
  );

  const [RpcLatency, setRpcLatency] = useState<
    IConfiguration['RpcOptions'] | null
  >(null);

  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const initializeRpc = async () => {
    const options = await Promise.all(
      config.RpcOptions.map(async (rpc) => {
        if (rpc.name === 'Custom RPC') {
          if (customRpcUrl !== null) {
            const isVerified = await verifyRpcConnection(customRpcUrl);

            if (isVerified) {
              return {
                ...rpc,
                connection: new Connection(customRpcUrl, 'confirmed'),
                latency: null,
              };
            }
          }
        }
        return {
          ...rpc,
          connection: rpc.url ? new Connection(rpc.url, 'confirmed') : null,
          latency: null,
        };
      }),
    );

    setRpcOptions(options);
    setIsInitialized(true);
  };

  const getLatency = async () => {
    const options = [...RpcOptions];

    const latency = await Promise.all(
      options.map(async (rpc) => {
        const start = Date.now();
        try {
          if (!(await rpc?.connection?.getVersion())) return null;

          return Date.now() - start;
        } catch (error) {
          console.error('Error measuring latency:', error);

          return null;
        }
      }),
    );

    setRpcLatency(() =>
      options.map((rpc, index) => ({
        ...rpc,
        latency: latency[index],
      })),
    );
  };

  const handleCustomRPC = async () => {
    const options = await Promise.all(
      [...RpcOptions].map(async (rpc) => {
        if (rpc.name === 'Custom RPC') {
          if (customRpcUrl !== null) {
            const isVerified = await verifyRpcConnection(customRpcUrl);

            return {
              ...rpc,
              connection: isVerified
                ? new Connection(customRpcUrl, 'confirmed')
                : null,
            };
          }
        }
        return rpc;
      }),
    );

    setRpcOptions(options);
  };

  useEffect(() => {
    initializeRpc();
  }, [config, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;
    handleCustomRPC();
  }, [customRpcUrl, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;
    getLatency();

    const interval = setInterval(getLatency, 5000);
    return () => clearInterval(interval);
  }, [isInitialized, customRpcUrl, RpcOptions]);

  return [RpcLatency];
};

export default useRpc;
