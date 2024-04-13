import type { FC } from 'react';
import {
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  composeRenderProps,
  type ListBoxItemProps,
} from 'react-aria-components';
import type { Option } from './Combobox';

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
      className='flex cursor-pointer px-2 py-0.5 data-[focused]:border-gray-500 data-[focused]:border-y-2 data-[focused]:bg-blue-100 data-[focused]:py-0'
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

type Props = {
  options: Option[];
  'aria-label'?: string;
};

export const ListBox: FC<Props> = ({ 'aria-label': ariaLabel, options }) => {
  return (
    <RACListBox
      aria-label={ariaLabel}
      className='max-h-52 w-48 overflow-auto rounded border border-gray-500 bg-white shadow-md'
    >
      {options.map((option) => (
        <ListBoxItem key={option.id} id={option.name} textValue={option.name}>
          {option.name}
        </ListBoxItem>
      ))}
    </RACListBox>
  );
};
