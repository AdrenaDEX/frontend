import { twMerge } from 'tailwind-merge';

import Button from '../common/Button/Button';
import Modal from '../common/Modal/Modal';

function TermsAndConditionsModal({
  className,
  isOpen,
  // User don't agree or decline, just read it
  readonly = false,
  agreeTrigger,
  declineTrigger,
  closeTrigger,
}: {
  className?: string;
  isOpen: boolean;
  readonly: boolean;
  agreeTrigger?: () => void;
  declineTrigger?: () => void;
  closeTrigger?: () => void;
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      title="Terms and conditions"
      close={() => {
        closeTrigger?.();
      }}
      className={twMerge(
        className,
        'flex',
        'flex-col',
        'items-center',
        'p-4',
        'max-w-[40em]',
        'max-h-[40em]',
      )}
    >
      <div className="h-full max-h-full overflow-auto flex flex-col">
        <span>
          Welcome to Adrena! Our full Terms and Conditions are being carefully
          drafted.
        </span>
        <span className="mt-4">
          By using our service, you agree to engage in good faith, understanding
          that formal terms will follow.
        </span>
        <span className="mt-4">
          Adrena is currently on early access on Devnet and appreciate your
          leniency.
        </span>
        <span className="mt-4">
          Thank you for your patience and support. Lets participate on the
          future of DeFi together!
        </span>
      </div>

      <div className="flex w-full justify-around pt-6 mt-6 border-t border-grey">
        {readonly ? (
          <>
            <Button
              title="Close"
              size="lg"
              variant="primary"
              className="w-full"
              onClick={() => {
                closeTrigger?.();
              }}
            />
          </>
        ) : (
          <>
            <Button
              title="[D]ecline"
              size="lg"
              variant="outline"
              className="w-full"
              onClick={() => {
                declineTrigger?.();
              }}
            />

            <Button
              title="[A]ggree"
              size="lg"
              className="w-full"
              onClick={() => {
                agreeTrigger?.();
              }}
            />
          </>
        )}
      </div>
    </Modal>
  );
}

export default TermsAndConditionsModal;
