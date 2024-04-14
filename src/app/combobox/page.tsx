import { Combobox } from '../components/combobox/Combobox';
import { HeadlessUICombobox } from '../components/headless-ui/HeadlessUICombobox';

const options = [
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

export default function Page() {
  return (
    <div className='grid grid-cols-1 gap-28'>
      <h1 className='text-center font-bold text-4xl'>Combobox</h1>

      <section className='grid grid-cols-1 gap-4'>
        <h2 className='font-semibold text-gray-700 text-xl'>
          React Aria Component Combobox
        </h2>
        <div className='flex h-64 w-full items-start justify-center rounded-lg border border-gray-100 bg-white/60 p-6'>
          <Combobox options={options} />
        </div>
      </section>

      <section className='grid grid-cols-1 gap-4'>
        <h2 className='font-semibold text-gray-700 text-xl'>
          HeadlessUI Combobox
        </h2>
        <div className='flex h-64 w-full items-start justify-center rounded-lg border border-gray-100 bg-white/60 p-6'>
          <HeadlessUICombobox options={options} />
        </div>
      </section>
    </div>
  );
}
