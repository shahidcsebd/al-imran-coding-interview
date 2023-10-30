import { MdCable } from 'react-icons/md';
import ArticleForm from '../component/Forms/ArticleForm';

function HomePage() {
  return (
    <div>
      <div className='bg-gray-100 p-4 flex items-center justify-center'>
        <div className='max-w-2xl w-full bg-white p-8 rounded-lg shadow-md'>
          <div className='items-center mb-4 flex gap-x-2 justify-start'>
            {' '}
            <span className='bg-gray-200 w-8 h-8 rounded-lg flex items-center justify-center'>
              <MdCable className='text-blue-600' />{' '}
            </span>{' '}
            <h1 className='font-bold text-xl'>AI Assisted Writer</h1>
          </div>
          <p className='text-left text-xs mb-3'>
            Provide your keyword and get your outline. Modify and edit your
            outline and get article generated with AI depending on that outline
            in an interactive editor.
          </p>
          <ArticleForm />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
