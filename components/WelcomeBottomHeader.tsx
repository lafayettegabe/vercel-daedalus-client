'use client';
import React, { useState } from 'react';

const WelcomeBottomHeader = ({ elements }) => {
  const [activeElement, setActiveElement] = useState(0);

  const handleClick = (index, scrollOffset) => {
    setActiveElement(index);
    window.scrollTo({
      top: scrollOffset,
      behavior: 'smooth',
    });
  };

  return (
    <ul className="flex items-center flex-row p-8 border-t-4 border-b-4 w-full text-xs md:text-xl overflow-hidden text-center invert transition-all duration-300">
      {elements.map((element, index) => (
        <React.Fragment key={index}>
          {index > 0 && <li className='font-bold'>/</li>}
          <li
            className={`mx-4 cursor-pointer ${
              activeElement === index ? 'font-bold' : ''
            } transition-all duration-300 ease-in-out hover:text-blue-600`}
            onClick={() => handleClick(index, element.scrollOffset)}
          >
            {element.name}
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default WelcomeBottomHeader;