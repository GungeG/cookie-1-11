import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <button
        className="flex justify-between w-full p-4 text-lg font-bold bg-gray-200 rounded-lg m-2"
        onClick={toggleContent}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100 m-2 w-full">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;