'use client';

import { Button } from '@/app/components/Button';

export const DefaultButton = () => {
  return <Button onPress={() => console.log('Press!')}>Press me</Button>;
};
