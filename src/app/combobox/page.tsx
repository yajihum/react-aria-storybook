import { Combobox } from '../components/combobox/Combobox';

export default function Page() {
  return (
    <div className='grid grid-cols-1 gap-28'>
      <h1 className='text-center font-bold text-4xl'>Combobox</h1>

      <section className='grid grid-cols-1 gap-4'>
        <h2 className='font-semibold text-gray-700 text-xl'>
          React Aria Component Combobox
        </h2>
        <div className='flex h-64 w-full items-start justify-center rounded-lg border border-gray-100 bg-white/60 p-6'>
          <Combobox />
        </div>
      </section>
    </div>
  );
}
