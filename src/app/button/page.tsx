export default function Button() {
  return (
    <div className='grid grid-cols-1 gap-16'>
      <h1 className='font-bold text-4xl'>Components</h1>
      <ul className='mt-4 grid grid-cols-1 gap-4'>
        <li>
          <a href='/button' className='text-2xl text-blue-500 underline'>
            Button
          </a>
        </li>
      </ul>
    </div>
  );
}
