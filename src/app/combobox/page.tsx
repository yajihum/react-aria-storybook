import { RACCombobox } from '../components/Combobox';

export default function Page() {
  return (
    <div className='grid grid-cols-1 gap-16'>
      <h1 className='font-bold text-4xl'>Combobox</h1>
      <section className='grid grid-cols-1 gap-4'>
        <h2 className='font-semibold text-gray-700 text-xl'>
          React Aria Component
        </h2>
        <div className='flex h-64 w-full items-start justify-center rounded-lg border border-gray-200 p-6'>
          <RACCombobox />
        </div>
      </section>
    </div>
  );
}
