'use client';

import { useRef } from 'react';
import { useButton, type AriaButtonProps } from 'react-aria';
import { Link, type LinkProps } from 'react-aria-components';

export const UsingRACButton = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      {...props}
      className='rounded bg-blue-500 px-4 py-2 font-bold text-white data-[pressed]:bg-blue-900 hover:bg-blue-700'
    >
      {children}
    </Link>
  );
};

type UsingHookButtonProps = AriaButtonProps;

export const UsingHookButton = ({
  children,
  ...props
}: UsingHookButtonProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { buttonProps } = useButton(
    {
      ...props,
      elementType: 'a',
    },
    ref,
  );

  return (
    <a
      {...buttonProps}
      ref={ref}
      className='rounded bg-blue-500 px-4 py-2 font-bold text-white data-[pressed]:bg-blue-900 hover:bg-blue-700'
    >
      {children}
    </a>
  );
};

type NotUsingRACButtonProps = {
  children?: React.ReactNode;
} & AriaButtonProps;

export const NotUsingRACButton = ({
  children,
  type = 'button',
  ...props
}: NotUsingRACButtonProps) => {
  return (
    <a
      {...props}
      className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
    >
      {children}
    </a>
  );
};
