function SwitchButton({ toggled, handleChange, id, htmlFor, title }) {
  return (
    <div className='flex items-center justify-start'>
      <div className='relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in'>
        <input
          type='checkbox'
          onChange={handleChange}
          name='toggle'
          id={id}
          className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
        />
        <label
          htmlFor={htmlFor}
          className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
        ></label>
      </div>
      <label htmlFor='ai-toggle' className='text-xs text-gray-700'>
        <span className='text-sm font-bold text-gray-600'>{title}</span>
      </label>
    </div>
  );
}

export default SwitchButton;
