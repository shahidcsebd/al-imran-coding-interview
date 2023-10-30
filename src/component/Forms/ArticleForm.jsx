import Dropdown from '../Inputs/Dropdown';
import SwitchButton from '../Buttons/SwitchButton';
import Radio from '../Inputs/Radio';
import Button from '../Buttons/Button';
import InputField from '../Inputs/InputField';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { useState } from 'react';

function ArticleForm() {
  const [toggled, setToggled] = useState(false);

  const handleChange = () => {
    setToggled(!toggled);
  };

  const dropdownOptions = [
    'Random (AI will think Creatively)',
    1,
    2,
    3,
    4,
    5,
    6,
  ];
  const typeofArticleOptions = ['Long Post Form', 'Short Post Form'];

  return (
    <>
      <form>
        <div className='mb-6 mt-4 text-left'>
          <label
            htmlFor='postContent'
            className='flex flex-col text-gray-700 text-sm font-bold mb-4'
          >
            <span className='text-sm font-semibold'>Your Target Keyword</span>
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

        <SwitchButton
          toggled={toggled}
          handleChange={handleChange}
          id={'ai-toggle'}
          htmlFor={'ai-toggle'}
          title={'AI Generated Title'}
        />

        {!toggled && (
          <InputField
            title={'Input Your Title'}
            placeholder={'Write Title Here'}
          />
        )}

        <Dropdown
          title={'Choose Type of Info Article'}
          options={dropdownOptions}
        />
        <Dropdown title={'Number of Sub-headings'} options={dropdownOptions} />
        <Dropdown title={"Number of FAQ's"} options={typeofArticleOptions} />

        <SwitchButton
          id={'faq-toggle'}
          htmlFor={'faq-toggle'}
          title={'Include FAQ change'}
        />

        <Radio />

        <Button title={'Create Article Outline'} />
      </form>
    </>
  );
}

export default ArticleForm;
