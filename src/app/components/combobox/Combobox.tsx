'use client';

import { useState, type FC } from 'react';
import { useKeyboard } from 'react-aria';
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

type ComboboxProps = {
  options: Option[];
};

export const Combobox: FC<ComboboxProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(
    options[0],
  );
  const [inputValue, setInputValue] = useState<string>('');

  const handleSelectOption = (id: Key) => {
    const option = options.find((option) => id === option.name);
    if (!option) return;
    setSelectedOption(option);
  };

  const { keyboardProps } = useKeyboard({
    onKeyDown: (event) => {
      if (event.key === 'Escape') {
        setInputValue('');
        setSelectedOption(undefined);
      }
    },
  });

  return (
    <div className='grid grid-cols-1 gap-6'>
      <dl className='flex gap-2'>
        <dt>selected:</dt>
        <dd className='font-bold text-blue-700'>{selectedOption?.name}</dd>
      </dl>
      <ComboBox
        className='grid grid-cols-1 gap-1.5'
        onSelectionChange={handleSelectOption}
        onInputChange={setInputValue}
        inputValue={inputValue}
      >
        <Label className='text-sm'>Favorite Animal</Label>
        <Group className='cursor-pointer rounded border border-gray-300 bg-white px-1.5 py-1 focus-within:outline hover:outline focus-within:outline-2 focus-within:outline-gray-500 hover:outline-2 hover:outline-gray-500 focus-within:outline-offset-2 hover:outline-offset-2'>
          <Input {...keyboardProps} className='cursor-pointer outline-none' />
          <Button aria-label='候補を表示'>▼</Button>
        </Group>
        <Popover>
          <ListBox options={options} />
        </Popover>
      </ComboBox>
    </div>
  );
};
