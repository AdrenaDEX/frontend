import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function StyledSubSubContainer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={twMerge(
        'flex flex-col bg-fourth w-full h-full border rounded-lg p-5 z-10',
        className,
      )}
    >
      {children}
    </div>
  );
}
