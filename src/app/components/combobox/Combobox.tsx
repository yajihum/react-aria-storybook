'use client';

import { useState, type FC } from 'react';
import {
  Button,
  ComboBox,
  Group,
  Input,
  Label,
  Popover,
  type Key,
} from 'react-aria-components';
import { ListBox } from './ListBox';

export type Option = { id: number; name: string };

const options: Option[] = [
  { id: 1, name: 'Aardvark' },
  { id: 2, name: 'Cat' },
  { id: 3, name: 'Dog' },
  { id: 4, name: 'Kangaroo' },
  { id: 5, name: 'Panda' },
  { id: 6, name: 'Snake' },
  { id: 7, name: 'Tiger' },
  { id: 8, name: 'Zebra' },
  { id: 9, name: 'Elephant' },
  { id: 10, name: 'Giraffe' },
];

export const Combobox: FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(
    options[0],
  );

  const handleSelectOption = (id: Key) => {
    const option = options.find((option) => id === option.name);
    if (!option) return;
    setSelectedOption(option);
  };

  return (
    <div className='grid grid-cols-1 gap-6'>
      <dl className='flex gap-2'>
        <dt>selected:</dt>
        <dd className='font-bold text-blue-700'>{selectedOption?.name}</dd>
      </dl>
      <ComboBox
        className='grid grid-cols-1 gap-1.5'
        onSelectionChange={handleSelectOption}
      >
        <Label className='text-sm'>Favorite Animal</Label>
        <Group className='cursor-pointer rounded border border-gray-300 bg-white px-1.5 py-1 focus-within:outline hover:outline focus-within:outline-2 focus-within:outline-gray-500 hover:outline-2 hover:outline-gray-500 focus-within:outline-offset-2 hover:outline-offset-2'>
          <Input className='cursor-pointer outline-none' />
          <Button>▼</Button>
        </Group>
        <Popover>
          <ListBox options={options} />
        </Popover>
      </ComboBox>
    </div>
  );
};
