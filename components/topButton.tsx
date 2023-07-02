import React, { useState } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset != 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='fixed bottom-0 right-0 z-50 m-4'>
      {showButton && (
        <button className='flex items-center justify-center  transition-all duration-300 ease-in-out back-top-btn' onClick={handleTopClick}>
            <ArrowUpOutlined />
        </button>
      )}
    </div>
  );
};

export default TopButton;
