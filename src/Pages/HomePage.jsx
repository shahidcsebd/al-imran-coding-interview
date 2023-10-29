import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdCable } from 'react-icons/md';
import { BsFillInfoCircleFill } from 'react-icons/bs';

function HomePage() {
  const [toggled, setToggled] = useState(false);

  const handleChange = () => {
    setToggled(!toggled);
  };
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
          <form>
            <div className='mb-6 mt-4 text-left'>
              <label
                for='postContent'
                className='flex flex-col text-gray-700 text-sm font-bold mb-4'
              >
                <span className='text-sm font-semibold'>
                  Your Target Keyword
                </span>
                <div className='flex gap-x-2 items-center justify-start font-normal text-gray-500 my-2'>
                  <BsFillInfoCircleFill />
                  <span> Write down your main keyword for the article</span>
                </div>
              </label>

              <input
                id='postContent'
                name='postContent'
                className='w-full border rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
          sm:leading-5 resize-none focus:outline-none focus:border-blue-500'
                placeholder='Write keyword here'
              />
            </div>
            <div className='flex items-center justify-start'>
              <div className='relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in'>
                <input
                  type='checkbox'
                  onChange={handleChange}
                  name='toggle'
                  id='toggle'
                  className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
                />
                <label
                  for='toggle'
                  className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
                ></label>
              </div>
              <label for='toggle' className='text-xs text-gray-700'>
                <span className='text-sm font-bold text-gray-600'>
                  AI Generated Title
                </span>
              </label>
            </div>
            {!toggled && (
              <div className='flex w-full relative text-left my-4 flex-col'>
                <label for='toggle' className='text-xs my-2 text-gray-700'>
                  <span className='text-sm font-bold text-gray-600'>
                    Input Your Title
                  </span>
                </label>
                <input
                  id='postContent'
                  name='postContent'
                  className='w-full border rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
                sm:leading-5 resize-none focus:outline-none focus:border-blue-500'
                  placeholder='Write Title here'
                />
              </div>
            )}

            <div className='flex w-full relative text-left my-4 flex-col'>
              <label for='toggle' className='text-xs my-2 text-gray-700'>
                <span className='text-sm font-bold text-gray-600'>
                  Choose Type of Info Article
                </span>
              </label>
              <select className='block appearance-none w-full text-sm bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline'>
                <option className=''>Long Post Form</option>
                <option>Short Post Form</option>
              </select>
            </div>
            <div className='flex w-full relative text-left my-4 flex-col'>
              <label for='toggle' className='text-xs my-2 text-gray-700'>
                <span className='text-sm font-bold text-gray-600'>
                  Number of Sub-headings
                </span>
              </label>
              <select className='block appearance-none text-sm w-full bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline'>
                <option>Random (AI will think Creatively)</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className='flex w-full relative text-left my-4 flex-col'>
              <label for='toggle' className='text-xs my-2 text-gray-700'>
                <span className='text-sm font-bold text-gray-600'>
                  Number of FAQ's
                </span>
              </label>
              <select className='block appearance-none text-sm w-full bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline'>
                <option>Random (AI will think Creatively)</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className='flex items-center justify-start my-6'>
              <div className='relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in'>
                <input
                  type='checkbox'
                  name='toggle2'
                  id='toggle2'
                  className='toggle-checkbox2 absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer'
                />
                <label
                  for='toggle2'
                  className='toggle-label2 block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
                ></label>
              </div>
              <label for='toggle2' className='text-xs text-gray-700'>
                <span className='text-sm font-bold text-gray-600'>
                  Include FAQ Schema
                </span>
              </label>
            </div>
            <label for='toggle2' className='text-xs text-gray-700'>
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
                  for='country-option-3'
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
                  for='country-option-2'
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
                  for='country-option-1'
                  className='text-sm font-normal text-gray-900 ml-2 block'
                >
                  Don't Use Image
                </label>
              </div>
            </div>

            <div className='flex w-full items-center justify-center'>
              <Link
                to='/result'
                type='submit'
                className='flex justify-center mt-3 w-full items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline- text-white py-2 px-4 rounded-md transition duration-300 gap-2'
              >
                {' '}
                Create Article Outline
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
