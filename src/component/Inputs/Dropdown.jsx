import React from 'react';

function Dropdown({ title, options }) {
  return (
    <div className='flex w-full relative text-left my-4 flex-col'>
      <label htmlFor='toggle' className='text-xs my-2 text-gray-700'>
        <span className='text-sm font-bold text-gray-600'>{title}</span>
      </label>
      <select className='block appearance-none text-sm w-full bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline'>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
