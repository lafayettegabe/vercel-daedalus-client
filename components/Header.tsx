'use client';
import { useState, useEffect } from 'react';
import { FacebookFilled, LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons';
import { Button } from 'antd';
import Link from 'next/link'
import Image from 'next/image'
import ThemeSwitch from '@/components/ThemeSwitch';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const headerOptions = [
    { label: 'Home', link: '/' },
    { label: 'Who', link: '/who' },
    { label: 'Services', link: '/services' },
    { label: 'Academic', link: '/academic' },
    { label: 'Projects', link: '/projects' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='flex justify-between items-center bg-gray-800 py-2 px-3 lg:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out  bg-transparent' style={{ transform: !scroll ? 'backdrop-blur shadow-lg' : 'backdrop-blur-none shadow-none' }}>
      <div className="mr-4 w-1/3 transition-all duration-200 ease-in-out" style={{ transform: !scroll ? 'translate(0px, 0px)' : 'translate(0px, -100px)' }}>
       <Link href="/">
          <div className="hover:cursor-pointer flex justify-center items-center">
            <Image
              className="object-contain transition-all duration-300 ease-in-out"
              src="/images/logo.png"
              alt="Logo"
              priority={true}
              height={65}
              width={65}
            />
            Deadelus
          </div>
        </Link>
      </div>
      <div className="flex items-center w-full transition-all duration-500 ease-in-out" style={{ transform: !scroll ? 'translate(0px, 0px)' : 'translate(0px, -100px)' }}>
        <nav className="passive-hide lg:block flex items-center w-full ">
          <div className='flex flex-row w-full items-center justify-center'>
            <ul className="flex items-center invert transition-all duration-300">
              {headerOptions.map((option, index) => (
                <li key={index}>
                  <Link prefetch={true}
                    className="font-semibold text-lg hover:text-light-blue-500 hover-underline-animation hover:scale-105 transition-all duration-300 cursor-pointer" style={{ fontVariant: 'all-small-caps' }}
                    href={option.link}
                  >
                    {option.label}
                  </Link>
                  {index !== headerOptions.length - 1 && <span className="mx-2">|</span>}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex flex-row justify-end w-1/3">
        <div className='passive-hide lg:block'>
        </div>
        <Link href={'/contact'}>
          <Button type="primary" size={!scroll ? 'middle' : 'large'}>Contact</Button>
        </Link>
        <div className='z-50 flex justify-center lg:hidden text-black'>
          <input type="checkbox" id="menu" onClick={toggleMenu} />
          <label htmlFor="menu" className="icon">
            <div className="menu"></div>
          </label>
          <button className="lg:hidden mr-4 text-white focus:outline-none z-50 invert">
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="lg:hidden absolute left-0 right-0 top-0 m-4 nav-mobile"> {/* after 1s height: calc(100vh - 2rem) */}
          <ul className="h-3/4 w-full flex flex-col items-center justify-center text-3xl font-sans gap-4 font-bold" style={{ fontVariant: 'all-small-caps' }}>
            {headerOptions.map((option, index) => (

              <li key={index} className="mb-2">
                <Link
                  className="hover:text-light-blue-500 hover:underline"
                  href={option.link}
                  >
                    {option.label}
                  </Link>
              </li>
            ))}
          </ul>
          <div>
            <div className='w-full flex flex-col items-center justify-center text-lg font-sans gap-4 font-light mb-6 uppercase cursor'>Contact</div>
            <div className="h-1/4 flex flex-row justify-center items-center gap-4">
              <FacebookFilled className="text-xl" />
              <LinkedinFilled className="text-xl" />
              <TwitterSquareFilled className="text-xl" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
