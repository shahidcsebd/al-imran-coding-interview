import OutlineEditor from '../component/OutlineEditor';

function ResultPage() {
  return (
    <div>
      <div className='bg-gray-100 flex items-center justify-center'>
        <div className='max-w-2xl w-full bg-white m-4 p-8 rounded-lg shadow-md'>
          <div className='items-center mb-4 flex gap-x-2 justify-start'>
            <div className='flex flex-col'>
              <h1 className='font-bold text-left'>Outline Editor</h1>
              <OutlineEditor className='text-xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
