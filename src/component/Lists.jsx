import React, { useState } from 'react';
import DraggableList from 'react-draggable-lists';
import { BsPlus } from 'react-icons/bs';

const InputList = () => {
  const [toggleMultiSelect, settoggleMultiSelect] = useState(false);
  const [showFocus, setShowFocus] = useState(false);

  const [lists, setLists] = useState([
    { fields: ['H3', 'H3', 'H3'] }, // Initial list with one empty input field
  ]);

  const addField = (listIndex) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].fields.push('H3');
    setLists(updatedLists);
  };

  const addList = () => {
    const updatedLists = [...lists];
    updatedLists.push({ fields: [''] }); // Add a new list with one empty input field
    setLists(updatedLists);
  };

  const handleToggle = () => {
    settoggleMultiSelect(!toggleMultiSelect);
  };

  const handleFocus = () => {
    setShowFocus(!showFocus);
  };

  const onMoveEnd = (newList) => {
    console.log(newList);
  };

  return (
    <div className='w-full'>
      <div className='flex text-sm items-center my-4'>
        <BsPlus />
        <button onClick={addList}>Add H2 Section</button>
      </div>
      <input
        type='text'
        placeholder='Introduction'
        className='w-full my-2 border rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
            sm:leading-5 resize-none focus:outline-none focus:border-blue-500'
      />

      {lists.map((list, listIndex) => (
        <div
          key={listIndex}
          className={`${showFocus ? '' : ''} w-full border p-4 my-2 `}
        >
          {/* <DraggableList
            width={600}
            height={50}
            rowSize={1}
            onMoveEnd={onMoveEnd}
          > */}
          {list.fields.map((field, fieldIndex) => (
            <input
              className='w-full my-2 border rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
            sm:leading-5 resize-none focus:outline-none focus:border-blue-500'
              key={fieldIndex}
              type='text'
              value={field}
              onChange={(e) => {
                const updatedLists = [...lists];
                updatedLists[listIndex].fields[fieldIndex] = e.target.value;
                setLists(updatedLists);
              }}
            />
          ))}
          {/* </DraggableList> */}
          {/* <DraggableList
            width={300}
            height={50}
            rowSize={1}
            onMoveEnd={onMoveEnd}
          >
            {listItems.map((item, index) => (
              <li className='border-2' key={index}>{`${
                index + 1
              }.  ${item}`}</li>
            ))}
          </DraggableList> */}
          {toggleMultiSelect && (
            <div>
              <input
                type='text'
                className='w-full mb-3 border rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
      sm:leading-5 resize-none focus:outline-none focus:border-blue-500'
                placeholder='multi-select keyword field'
              />
            </div>
          )}

          <div className='flex justify-between items-center'>
            <div className='flex items-center text-xs'>
              <BsPlus />
              <button onClick={() => addField(listIndex)}>
                New H3 Heading
              </button>
            </div>
            <div className='flex items-center text-xs'>
              <BsPlus />
              <button onClick={handleToggle} onMouseOver={handleFocus}>
                Insert NLP & LSI Keyword
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InputList;
