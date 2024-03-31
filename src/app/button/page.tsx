import {
  DefaultButton,
  RACButton,
  UseButtonHookButton,
} from './_components/button';

export default function Page() {
  return (
    <div className='grid grid-cols-1 gap-16'>
      <h1 className='font-bold text-4xl'>Button</h1>
      <section className='grid grid-cols-1 gap-4'>
        <h2 className='font-semibold text-gray-700 text-xl'>
          Not Using React Aria
        </h2>
        <div className='flex h-48 w-full items-center justify-center rounded-lg border border-gray-200 p-10'>
          <DefaultButton />
        </div>
      </section>
      <section className='grid grid-cols-1 gap-4'>
        <h2 className='font-semibold text-gray-700 text-xl'>
          Using React Aria
        </h2>
        <div className='flex h-48 w-full items-center justify-center rounded-lg border border-gray-200 p-10'>
          <RACButton />
        </div>
      </section>
      <section className='grid grid-cols-1 gap-4'>
        <h2 className='font-semibold text-gray-700 text-xl'>
          Using useButton Hook
        </h2>
        <div className='flex h-48 w-full items-center justify-center rounded-lg border border-gray-200 p-10'>
          <UseButtonHookButton />
        </div>
      </section>
    </div>
  );
}
