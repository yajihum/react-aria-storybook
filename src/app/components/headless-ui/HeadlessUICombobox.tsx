'use client';

import type { FC } from 'react';

import { Combobox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

type Option = { id: number; name: string };

const options = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
];

type HeadlessUIComboboxProps = {
  options: Option[];
};

export const HeadlessUICombobox: FC<HeadlessUIComboboxProps> = ({
  options,
}) => {
  const [selected, setSelected] = useState(options[0]);
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? options
      : options.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className='grid grid-cols-1 gap-2'>
        <div className='flex cursor-pointer overflow-hidden rounded-lg border border-gray-300 bg-white text-left sm:text-sm focus-within:outline hover:outline focus-within:outline-2 focus-within:outline-gray-500 hover:outline-2 hover:outline-gray-500 focus-within:outline-offset-2 hover:outline-offset-2'>
          <Combobox.Input
            className='w-full border-0 py-2 pr-10 pl-3 text-gray-900 text-sm leading-5 focus:outline-none'
            displayValue={(option: Option) => option.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className='flex items-center pr-2'>
            🔽
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className='max-h-52 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 sm:text-sm focus:outline-none'>
            {filteredPeople.length === 0 && query !== '' ? (
              <div className='relative cursor-default select-none px-4 py-2 text-gray-700'>
                Nothing found.
              </div>
            ) : (
              filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  className={({ active }) =>
                    `cursor-default select-none py-2 pr-4 pl-10 flex justify-between ${
                      active ? 'bg-teal-600 text-white' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`flex items-center pl-3 ${
                            active ? 'text-white' : 'text-teal-600'
                          }`}
                        >
                          ✔️
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};
