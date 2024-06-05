import {
  decodeImage,
  ImageAsset,
  Layout,
  useRive,
} from '@rive-app/react-canvas';
import React, { useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { useResize } from '@/hooks/useResize';

const RiveAnimation = ({
  animation,
  layout,
  className,
  automaticallyHandleEvents = false,
  stateMachines,
}: {
  animation:
    | 'fred-bg'
    | 'blob-bg'
    | 'mid-monster'
    | 'hero-monster'
    | 'btm-monster';
  layout?: Layout;
  className?: string;
  automaticallyHandleEvents?: boolean;
  stateMachines?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [assetsLoaded, setAssetsLoaded] = useState(0);
  const [size] = useResize();
  const subFolder = size && size.width > 600 ? 'lg' : 'sm';
  const riveAnimations = [
    {
      name: 'fred-bg',
      src: `./rive/fred-bg/${subFolder}/fred-bg.riv`,
      folder: 'fred-bg',
      totalAssets: 6,
    },
    {
      name: 'blob-bg',
      src: `./rive/blob-bg/${subFolder}/blob-bg.riv`,
      folder: 'blob-bg',
      totalAssets: 3,
    },
    {
      name: 'mid-monster',
      src: `./rive/mid-monster/${subFolder}/mid-monster.riv`,
      folder: 'mid-monster',
      totalAssets: 27,
    },
    {
      name: 'hero-monster',
      src: `./rive/hero-monster/${subFolder}/hero-monster.riv`,
      folder: 'hero-monster',
      totalAssets: 157,
    },
    {
      name: 'btm-monster',
      src: `./rive/btm-monster/${subFolder}/btm-monster.riv`,
      folder: 'btm-monster',
      totalAssets: 51,
    },
  ];

  const currentAnimation = riveAnimations.find((a) => a.name === animation);
  const src = currentAnimation?.src;
  const folder = currentAnimation?.folder;
  const totalAssets = currentAnimation?.totalAssets;

  useEffect(() => {
    if (assetsLoaded === totalAssets) {
      setIsLoaded(true);
    }
  }, [assetsLoaded, totalAssets]);

  const getImages = async (asset: ImageAsset) => {
    let image =
      window.riveImageCaching[
        `../../../public/rive/${folder}/${subFolder}/${asset.name}.webp`
      ];

    if (!image) {
      const img =
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require(`../../../public/rive/${folder}/${subFolder}/${asset.name}.webp`).default;

      const arrayBuffer = await fetch(img.src).then((response) =>
        response.arrayBuffer(),
      );

      // /!\ this method creates a new image element that is kept by the browser
      // Growing the memory usage
      // Needed to use a trick and keep the image in a global object as image.unref() doesn't work
      image = await decodeImage(new Uint8Array(arrayBuffer));

      window.riveImageCaching[
        `../../../public/rive/${folder}/${subFolder}/${asset.name}.webp`
      ] = image;
    }

    asset.setRenderImage(image);
    setAssetsLoaded((prev) => prev + 1);
  };

  const { RiveComponent } = useRive({
    src,
    autoplay: true,
    layout,
    stateMachines,
    automaticallyHandleEvents,
    assetLoader: (asset) => {
      // return true if we want to manage the asset ourselves
      if (asset.isImage) {
        getImages(asset as ImageAsset);
        return true;
      }

      return false;
    },
  });

  const Comp = useMemo(() => {
    return null;
  }, [RiveComponent, isLoaded, className]);

  return Comp;
};

export default RiveAnimation;
