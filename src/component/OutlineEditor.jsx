import { useEffect, useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import inputListData from '../utils/data.json';

const OutlineEditor = () => {
  const [lists, setLists] = useState([]);
  const [draggedList, setDraggedList] = useState(null);
  const [draggedField, setDraggedField] = useState(null);
  const [hoveredListIndex, setHoveredListIndex] = useState(-1);

  //load data in initial render [note: api data will be added here later]
  useEffect(() => {
    setLists(inputListData);
  }, []);

  //handle hover effect
  const handleMouseEnter = (listIndex) => {
    setHoveredListIndex(listIndex);
  };

  const handleMouseLeave = () => {
    setHoveredListIndex(-1);
  };

  //handle field update===>

  //add new field for h2 section
  const addField = (listIndex) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].fields.push('H3');
    setLists(updatedLists);
  };

  //add new h3 input field
  const addList = () => {
    const updatedLists = [...lists];
    updatedLists.push({ id: Date.now(), text: 'New Item', fields: ['H3'] });
    setLists(updatedLists);
  };

  //handle dragging====>
  const handleDragStartList = (e, item) => {
    setDraggedList(item);
    e.dataTransfer.setData('text/plain', JSON.stringify(item));
  };

  const handleDragStartField = (e, listIndex, fieldIndex) => {
    setDraggedField({ listIndex, fieldIndex });
    e.dataTransfer.setData(
      'text/plain',
      JSON.stringify(lists[listIndex].fields[fieldIndex])
    );
  };

  //toggling multi-select field based on the input id
  const handleToggleMultiSelect = (listIndex) => {
    const updatedLists = [...lists];
    updatedLists[listIndex].showMultiSelect =
      !updatedLists[listIndex].showMultiSelect;
    setLists(updatedLists);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDropList = (e, targetList) => {
    e.preventDefault();

    if (draggedList !== null) {
      const updatedLists = [...lists];
      const sourceIndex = updatedLists.findIndex(
        (item) => item.id === draggedList.id
      );
      const targetIndex = updatedLists.findIndex(
        (item) => item.id === targetList.id
      );

      if (sourceIndex !== targetIndex) {
        // Reorder the lists
        updatedLists.splice(sourceIndex, 1);
        updatedLists.splice(targetIndex, 0, draggedList);
        setLists(updatedLists);
      }

      setDraggedList(null);
    }
  };

  const handleDropField = (e, targetListIndex, targetFieldIndex) => {
    e.preventDefault();

    if (draggedField !== null) {
      const updatedLists = [...lists];
      const { listIndex, fieldIndex } = draggedField;
      const sourceField = updatedLists[listIndex].fields[fieldIndex];

      if (listIndex === targetListIndex) {
        // Moving field within the same list
        updatedLists[listIndex].fields.splice(fieldIndex, 1);
        updatedLists[listIndex].fields.splice(targetFieldIndex, 0, sourceField);
      } else {
        // Moving field to a different list
        updatedLists[listIndex].fields.splice(fieldIndex, 1);
        updatedLists[targetListIndex].fields.splice(
          targetFieldIndex,
          0,
          sourceField
        );
      }

      setLists(updatedLists);
      setDraggedField(null);
    }
  };

  return (
    <div className='w-full'>
      <div className='flex text-sm items-center my-4'>
        <BsPlus />
        <button onClick={addList}>Add H2 Section</button>
      </div>
      <input
        value={'How to master Javascript'}
        type='text'
        placeholder='Introduction'
        className='w-full my-2 border rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
            sm:leading-5 resize-none focus:outline-none focus:border-blue-500'
      />
      <ul onDragOver={handleDragOver}>
        {lists.map((list, listIndex) => (
          <li
            key={list.id}
            draggable
            onDragStart={(e) => handleDragStartList(e, list)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDropList(e, list)}
            className={`draggable-item  border p-4 rounded-sm my-2${
              draggedList && list.id === draggedList.id
                ? 'dragged border-blue-400'
                : ''
            } ${hoveredListIndex === listIndex ? 'button-hovered' : ''}
            }`}
          >
            {/* {list.text} */}
            {list.fields?.map((field, fieldIndex) => (
              <>
                <input
                  className='draggable-inp w-full relative  my-2 border rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500 input-with-dots'
                  key={fieldIndex}
                  draggable
                  onDragStart={(e) =>
                    handleDragStartField(e, listIndex, fieldIndex)
                  }
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDropField(e, listIndex, fieldIndex)}
                  type='text'
                  value={field}
                />
                {/* <span className='absolute  pt-8 font-bold text-gray-400'>
                  H3
                </span> */}
                <span className='absolute rotate-90 pt-8 font-bold text-gray-400'>
                  ....
                </span>
              </>
            ))}

            {list.showMultiSelect && (
              <input
                type='text'
                className='w-full mb-3 border rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none focus:outline-none focus:border-blue-500'
                placeholder='multi-select keyword field'
              />
            )}

            <div className='flex justify-between items-center'>
              <div className='flex items-center text-xs'>
                <BsPlus />
                <button onClick={() => addField(listIndex)}>
                  New H3 Heading
                </button>
              </div>
              <div className='flex items-center text-xs button-class'>
                <BsPlus />
                <button
                  className='button-class'
                  onClick={() => handleToggleMultiSelect(listIndex)}
                  onMouseEnter={() => handleMouseEnter(listIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  Insert NLP & LSI Keyword
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutlineEditor;
