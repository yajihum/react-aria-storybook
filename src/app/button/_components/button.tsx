'use client';

import {
  NotUsingRACButton,
  UsingHookButton,
  UsingRACButton,
} from '@/app/components/Button';

export const DefaultButton = () => {
  return <NotUsingRACButton href='/button'>Link Button</NotUsingRACButton>;
};

export const RACButton = () => {
  return <UsingRACButton href='/button'>Link Button</UsingRACButton>;
};

export const UseButtonHookButton = () => {
  return <UsingHookButton href='/button'>Link Button</UsingHookButton>;
};
