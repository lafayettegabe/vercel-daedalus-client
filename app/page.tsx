'use client';
import React, { CSSProperties, useState, useEffect } from 'react';
import { ArrowDownOutlined, SmileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

import ContactOverlay from '@/components/ContactOverlay';

export default function Home() {
  const router = useRouter();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [imageOffset, setImageOffset] = useState({ offsetX: 0, offsetY: 0 });
  //load colors
  const [darkColorValue, setDarkColorValue] = useState('#222831');
  const [whiteColorValue, setWhiteColorValue] = useState('#EEEEEE');

function handleArrowClick() {
  WheelEvent
}
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const offsetX = (clientX - window.innerWidth / 2) / 40;
      const offsetY = (clientY - window.innerHeight / 2) / 40;
      setImageOffset({ offsetX, offsetY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    setIsDarkMode(root.classList.contains('dark'));

    const observer = new MutationObserver(() => {
      setIsDarkMode(root.classList.contains('dark'));
      let sections = document.querySelectorAll('.section');

      if (root.classList.contains('dark')) {
        sections.forEach((element) => {
          element.classList.add('dark');
        });
        // Dark Mode
        setDarkColorValue('#222831');
        setWhiteColorValue('#393E46');
      } else {
        sections.forEach((element) => {
          element.classList.remove('dark');
        });
        // White Mode
        setDarkColorValue('#00ADB5');
        setWhiteColorValue('#EEEEEE');
      }
    });

    observer.observe(root, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = () => {
    router.push('/projects');
  };

  const darkColorStyle = {
    '--dark-color': darkColorValue,
  } as React.CSSProperties;

  const whiteColorStyle = {
    '--white-color': whiteColorValue,
  } as React.CSSProperties;

  const diagonalColorStyle = {
    '--white-color': whiteColorValue,
    '--dark-color': darkColorValue,
  } as React.CSSProperties;

  const logoSource = isDarkMode ? "/images/logo.png" : "/images/logo-white-nobg.png";
  const logoStyle: CSSProperties = {
    transform: `translate(${-imageOffset.offsetX}px, ${-imageOffset.offsetY}px)`,
    transition: 'transform 0s ease-out',
  };

  return (
    <main>
      <ContactOverlay />
      <div className='h-screen flex flex-col justify-between white-color section' style={whiteColorStyle}>
        <div className='flex flex-col justify-center items-center h-full'>
          <img
            className='hover:scale-105 max-w-1/4 transition-all duration-0 mt-auto mb-auto'
            src={logoSource}
            alt="Logo"
            style={logoStyle}
          />
          <div className='absolute inset-0 flex justify-center items-center text-8xl font-sans invert drop-shadow-lg' style={{ fontVariant: 'all-small-caps' }}>DEADELUS</div>
        </div>
        <div className='flex flex-col justify-center items-center w-full'>
          <ArrowDownOutlined className='ArrowMore' onClick={ handleArrowClick }/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen w-full diagonal-section section " style={diagonalColorStyle}>
        <div className='small-title'>Elevate Your Brand with Deadelus</div>
        <SmileOutlined className='my-4'/>
        <div className='main-title'>Creating tailor-made e-commerce solutions that drive sales and expand your online business reach.</div>
        <div className='sub-title'>We pride ourselves on our ability to transform your ideas into impactful digital experiences that leave a lasting impression.</div>
      </div>
      <div className='flex flex-col items-center justify-center h-screen w-full dark-color section' style={darkColorStyle}>
        <div className='recent-title mr-6'>RECENT</div>
        <div className='recent-title ml-6'>WORKS</div>
        <button className='mt-4' onClick={ handleClick }> PORTOFOLIO</button>
      </div>
    </main>
  );
}
