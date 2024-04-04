'use client';

import { useState } from 'react';
import {
  Button,
  ComboBox,
  Group,
  Input,
  Label,
  ListBox,
  Popover,
  ListBoxItem as RACListBoxItem,
  composeRenderProps,
  type Key,
  type ListBoxItemProps,
} from 'react-aria-components';

const ListBoxItem = ({
  id,
  children,
  textValue,
  ...props
}: ListBoxItemProps) => {
  return (
    <RACListBoxItem
      {...props}
      id={id}
      textValue={textValue}
      className='flex cursor-pointer rounded px-1 data-[focused]:bg-gray-200'
    >
      {composeRenderProps(children, (children, { isSelected }) => (
        <>
          <span className='flex flex-1 items-center gap-2 truncate font-normal'>
            {children}
          </span>
          <span>{isSelected && '✔'}</span>
        </>
      ))}
    </RACListBoxItem>
  );
};

type Option = { id: number; name: string };

const options: Option[] = [
  { id: 1, name: 'Aardvark' },
  { id: 2, name: 'Cat' },
  { id: 3, name: 'Dog' },
  { id: 4, name: 'Kangaroo' },
  { id: 5, name: 'Panda' },
  { id: 6, name: 'Snake' },
];

export const RACCombobox = () => {
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
        <dd className='font-bold text-blue-500'>{selectedOption?.name}</dd>
      </dl>
      <ComboBox
        className='grid grid-cols-1 gap-1.5'
        defaultSelectedKey={options[0].name}
        onSelectionChange={handleSelectOption}
      >
        <Label className='text-gray-600 text-sm'>Favorite Animal</Label>
        <Group className='cursor-pointer rounded px-1.5 py-1 outline outline-gray-300 data-[focus-within]:outline-gray-500'>
          <Input className='cursor-pointer outline-none' />
          <Button>▼</Button>
        </Group>
        <Popover className='w-[--trigger-width] rounded border border-gray-500 bg-white/80 p-2 shadow-md'>
          <ListBox>
            {options.map((option) => (
              <ListBoxItem
                key={option.id}
                id={option.name}
                textValue={option.name}
              >
                {option.name}
              </ListBoxItem>
            ))}
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  );
};
