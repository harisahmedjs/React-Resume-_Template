import React from 'react';
import About from './component/About';
import Coverletter from './component/Coverletter';

export default function App() {
  return (
    <div className='bg-slate-300 p-8 rounded-lg shadow-lg'>
      <div className=' bg-white flex flex-row w-[1100px] ml-20 px-2 py-2 font-serif'>
        <div><About /></div>
        <div><Coverletter /></div>
      </div>

  </div>
  )
}
