import React from 'react';
import OutlineEditor from '../component/OutlineEditor';

import InputList from '../component/Lists';

function ResultPage() {
  return (
    <div>
      <div className='bg-gray-100 h-screen flex items-center justify-center'>
        <div className='max-w-2xl w-full bg-white p-8 rounded-lg shadow-md'>
          <div className='items-center mb-4 flex gap-x-2 justify-start'>
            <div className='flex flex-col'>
              <h1 className='font-bold text-left'>Outline Editor</h1>
              {/* <div className='flex items-center w-full text-lg my-5 text-gray-400'>
                <OutlineEditor className='text-xl' />
              </div> */}
              <OutlineEditor className='text-xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
