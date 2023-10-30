import { Link } from 'react-router-dom';

function Button({ title }) {
  return (
    <div className='flex w-full items-center justify-center'>
      <Link
        to='/result'
        type='submit'
        className='flex justify-center mt-3 w-full items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline- text-white py-2 px-4 rounded-md transition duration-300 gap-2'
      >
        {title}
      </Link>
    </div>
  );
}

export default Button;
