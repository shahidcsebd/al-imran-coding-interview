function InputField({ title, placeholder }) {
  return (
    <div className='flex w-full relative text-left my-4 flex-col'>
      <label htmlFor='toggle' className='text-xs my-2 text-gray-700'>
        <span className='text-sm font-bold text-gray-600'>{title}</span>
      </label>
      <input
        id='postContent'
        name='postContent'
        className='w-full border rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
    sm:leading-5 resize-none focus:outline-none focus:border-blue-500'
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
