'use client';

import {
  NotUsingRACButton,
  UsingHookButton,
  UsingRACButton,
} from '@/app/components/Button';

export const DefaultButton = () => {
  return (
    <NotUsingRACButton type='button' onPress={() => console.log('Pressed!')}>
      Button
    </NotUsingRACButton>
  );
};

export const RACButton = () => {
  return (
    <UsingRACButton href='/button' onPress={() => console.log('Pressed!')}>
      Button
    </UsingRACButton>
  );
};

export const UseButtonHookButton = () => {
  return (
    <UsingHookButton onPress={() => console.log('Pressed!')}>
      Button
    </UsingHookButton>
  );
};
