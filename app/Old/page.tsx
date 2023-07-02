'use client';
import React, { CSSProperties, useState, useEffect } from 'react';
import { Button, Divider, DividerProps } from 'antd'
// import LogoImg from '@/components/LogoImg.tsx'
import { ArrowRightOutlined, RightOutlined, RightSquareFilled } from '@ant-design/icons';

const buttonStyle: CSSProperties = {
  width: '200px',
  height: '75px',
  backgroundColor: '#2A9FF4',
  color: '#FFFFFF',
  border: '3px solid #FFFFFF',
  boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.2)',
  fontSize: '1.5rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
  borderRadius: '0',
  paddingRight: '1rem',
  paddingLeft: '1rem',
  justifyContent: 'center'
};

const whiteButtonStyle: CSSProperties = {
  ...buttonStyle,
  backgroundColor: 'white',
  color: 'rgb(42, 159, 244)',
  border: '3px solid rgb(42, 159, 244)',
};

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setIsDarkMode(root.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDarkMode(root.classList.contains("dark"));
    });

    observer.observe(root, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className=''>
      <div style={{ height: '100px' }}></div>
      {/* Welcome Page */}
      <div className='h-screenHeader flex flex-col justify-between'>
        <div className='flex flex-col justify-center items-center'>
          <img
            className='hover:scale-105 max-w-1/6 transition-all duration-300'
            src={"/images/logo-dark-nobg.png"}
            alt="Logo"
          />
          <div className='text-center invert transition-all duration-300'>
            <h1 className="text-3xl xl:text-6xl font-bold uppercase">Daedalus Institute</h1>
            <h1 className="text-1xl xl:text-2xl font-bold mt-4" style={{ fontVariant: 'all-small-caps' }}>Pioneering Technology for a Better Future.</h1>
          </div>
          <div className='flex flex-col lg:flex-row items-center justify-center mt-6 w-full gap-4 text-1xl mb-8'>

            <div className="flex w-full lg:justify-end justify-center transition-all duration-300 ease-in-out hover:text-blue-600 hover:translateY-1 hover:ty-1 hover translate-y-1">
              <Button className="bg-white color-blue" style={whiteButtonStyle} type='primary' size='large'><ArrowRightOutlined style={{ fontSize: '1.5rem' }} /> LOGIN</Button>
            </div>

            <Button className="my-button" type="primary" size="large" icon={<ArrowRightOutlined />}>
              Button Text
            </Button>

            <a href="#_" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Button Text</span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </a>

            <div className="flex w-full lg:justify-start justify-center transition-all duration-300 ease-in-out hover:text-blue-600">
              <Button className="" style={buttonStyle} size='large'>Learn More <RightOutlined style={{ fontSize: '1.5rem' }} /></Button>
            </div>
          </div>
        </div>
        <ul className="flex items-center flex-row p-8 border-t-4 border-b-4 w-full text-xs md:text-xl overflow-hidden text-center invert transition-all duration-300">
          <li className="mx-4 cursor-pointer font-bold transition-all duration-300 ease-in-out hover:text-blue-600">
            Home
          </li>
          <li className='font-bold'>/</li>
          <li className="mx-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-600">
            Opportunities
          </li>
          <li className="mx-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-600">
            Research areas
          </li>
          <li className="mx-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-600">
            Collab
          </li>
        </ul>
      </div>
      {/* End welcome page */}

      <div className={`w-full flex flex-col ${isDarkMode ? "bg-black" : "bg-white"}`}>


        {/* Oppening and Opportunities */}
        <div className="columns-2 font-xl flex flex-row w-full my-8 font-sans p-12 invert transition-all duration-300">
          <div className='flex justify-center text-center w-1/2 align-center text-4xl font-light mt-auto mb-auto'>
            <span>Opening and Opportunities</span>
          </div>
          <div className='flex flex-col text-center justify-center w-1/2 align-center text-2xl font-semibold'>
            <span>
              We believe we should be an employer of choice for candidates of all backgrounds and disciplines, and we are dedicated to improving our diversity outreach.
            </span>
            <div className='overflow-hidden mt-8 gap-4 flex flex-row items-center justify-center hover:text-light-blue-500 hover:underline hover:scale-105 transition-all duration-300 cursor-pointer'>
              <RightSquareFilled />
              <span>Visit Talent Acquisition and Diversity</span>
            </div>
          </div>
        </div>
        {/* End of Oppening and Opportunities */}
        <Divider style={{ borderColor: isDarkMode ? "white" : "black" }} />
        {/* Unlock the Power of Collaboration */}
        <div className='columns-2 font-xl flex flex-row w-full my-8 font-sans p-12 invert transition-all duration-300'>
          <div className='flex flex-col text-center justify-center w-1/2 align-center text-2xl font-semibold'>
            <span>
              At Deadelis Institute, we believe that collaboration is the catalyst for groundbreaking innovation. Join us in forging meaningful partnerships with industry leaders, academic institutions, and government agencies.
            </span>
            <div className='overflow-hidden mt-8 gap-4 flex flex-row items-center justify-center hover:text-light-blue-500 hover:underline hover:scale-105 transition-all duration-300 cursor-pointer'>
              <RightSquareFilled />
              <span>Visit Collaborative tab</span>
            </div>
          </div>
          <div className='flex justify-center text-center w-1/2 align-center text-4xl font-light mt-auto mb-auto'>
            <span>Unlock the Power of Collaboration</span>
          </div>
        </div>
        {/* End of Unlock the Power of Collaboration */}
        <Divider style={{ borderColor: isDarkMode ? "white" : "black" }} />
        {/* Join the Revolution Be a Part of Deadelis Institute */}
        <div className='columns-2 font-xl flex flex-row w-full my-8 font-sans p-12 invert transition-all duration-300'>
          <div className='flex justify-center text-center w-1/2 align-center text-4xl font-light mt-auto mb-auto'>
            <span>Join the Revolution Be a Part of Deadelis Institute</span>
          </div>
          <div className='flex flex-col text-center justify-center w-1/2 align-center text-2xl font-semibold'>
            <span>
              Ready to be part of the revolution in technology and innovation? Together, let's drive innovation, shape the future, and create a world where possibilities are limitless.
            </span>
            <div className='overflow-hidden mt-8 gap-4 flex flex-row items-center justify-center hover:text-light-blue-500 hover:underline hover:scale-105 transition-all duration-300 cursor-pointer'>
              <RightSquareFilled />
              <span>Visit Work with us</span>
            </div>
          </div>
        </div>
        {/* End of Join the Revolution Be a Part of Deadelis Institute */}
        {/* Reserch Areas */}

        <div className='flex flex-col items-center text-xl font-sans p-12 my-8 text-center'>
          <Divider style={{ color: isDarkMode ? "white" : "black", borderColor: isDarkMode ? "white" : "black" }}><div className='text-4xl font-bold my-6 transition-all duration-300'>Research Areas</div></Divider>
          <div className='columns-2 flex flex-row w-full'>
            <div><img className='transition-all duration-500 cursor-pointer hover:translate-x-5' src={"/images/welcomePage/robo-right.png"} alt="Artificial Inteligence" /></div>
            <div className='flex flex-col items-center text-xl w-1/2 invert transition-all duration-300 mt-auto mb-auto'>
              <span className='flex justify-center text-center align-center text-4xl font-light'>Unleashing the Power of Artificial Intelligence</span>
              <span className='mt-8'>
                We are at the forefront of artificial intelligence research. Our team of experts is dedicated to pushing the boundaries of AI, developing cutting-edge algorithms, and leveraging machine learning to solve complex problems. Join us in revolutionizing industries, transforming automation, and unlocking the potential of AI for a better future
              </span>
            </div>
          </div>
        </div>
        <Divider style={{ borderColor: isDarkMode ? "white" : "black" }} />
        {/* End Reserch Areas */}
      </div>
    </main>
  );
}

