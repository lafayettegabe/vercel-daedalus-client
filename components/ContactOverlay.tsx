'use-client'
import React, { useEffect, useRef, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';

const ContactOverlay = () => {
  const overlayRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(true);
  }, []);

  function handleClose() {
    setIsExpanded(false);
    let overlay = document.querySelector('#contacts-overlay');
    if (overlay) {
      overlay.classList.add('hidden');
    }
  }

  //TODO overlay aparece somente uma vez n da para abrir novamente, prob essa animaçao merda que o GPT fez, fazer uma 
  return (
    <div className='w-screen flex items-center justify-center'>
      <div
        ref={overlayRef}
        id='contacts-overlay'
        className={`w-4/5 h-4/5 mt-auto mb-auto mx-auto absolute inset-0 flex items-center justify-center z-50 transition-all duration-500 ${
          isExpanded ? 'hidden' : ''
        }`}
        style={{
          background: 'linear-gradient(to bottom right, white 50%, lightblue 50%, blue)',
          transformOrigin: 'top',
          transform: isExpanded ? 'scaleY(1)' : 'scaleY(0)',
        }}
      >
        <div className='flex flex-col justify-center items-center font-xl'>
          <button onClick={handleClose}>
            <CloseOutlined style={{ fontSize: '5rem' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactOverlay;
