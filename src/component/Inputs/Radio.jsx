import React from 'react';

function Radio() {
  return (
    <>
      <label htmlFor='toggle2' className='text-xs text-gray-700'>
        <span className='text-sm flex justify-start my-3 font-bold text-gray-600'>
          Select Image Source
        </span>
      </label>
      <div className='flex  items-center justify-start'>
        <div className='flex items-center mb-4'>
          <input
            id='country-option-3'
            type='radio'
            name='countries'
            value='Spain'
            className='h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300'
            aria-labelledby='country-option-3'
            aria-describedby='country-option-3'
          />
          <label
            htmlFor='country-option-3'
            className='text-sm font-normal text-gray-900 ml-2 block'
          >
            Use Pixabay Image
          </label>
        </div>
      </div>
      <div className='flex  items-center justify-start'>
        <div className='flex items-center mb-4'>
          <input
            id='country-option-2'
            type='radio'
            name='countries'
            value='Spain'
            className='h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300'
            aria-labelledby='country-option-3'
            aria-describedby='country-option-3'
          />
          <label
            htmlFor='country-option-2'
            className='text-sm font-normal text-gray-900 ml-2 block'
          >
            Use Google Image
          </label>
        </div>
      </div>
      <div className='flex  items-center justify-start'>
        <div className='flex items-center mb-4'>
          <input
            id='country-option-1'
            type='radio'
            name='countries'
            value='Spain'
            className='h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300'
            aria-labelledby='country-option-3'
            aria-describedby='country-option-3'
          />
          <label
            htmlFor='country-option-1'
            className='text-sm font-normal text-gray-900 ml-2 block'
          >
            Don't Use Image
          </label>
        </div>
      </div>
    </>
  );
}

export default Radio;
