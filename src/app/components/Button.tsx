'use client';

import { Button as RACButton, type ButtonProps } from 'react-aria-components';

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <RACButton
      {...props}
      className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
    >
      {children}
    </RACButton>
  );
};
