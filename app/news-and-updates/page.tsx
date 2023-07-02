'use client';
import React, { CSSProperties, useState, useEffect } from 'react';
import { Button, Divider, DividerProps } from 'antd'
// import LogoImg from '@/components/LogoImg.tsx'
import { ArrowRightOutlined, RightOutlined, RightSquareFilled } from '@ant-design/icons'
import WelcomeBottomHeader from '@/components/WelcomeBottomHeader'
import './global.css';

const elements = [
    { name: 'Home', scrollOffset: 0 },
    { name: 'News Feed', scrollOffset: 100 },
    { name: 'Updates Feed', scrollOffset: 250 },
];

function News() {
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
        <div className='flex flex-col justify-between w-full flex-grow'>
            <div style={{ height: '100px' }}></div>
            {/* Welcome Page */}
            <div className="flex flex-col items-center justify-center h-screenHeader">
                <div className='flex flex-col justify-center items-center mt-auto mb-auto'>
                    <img
                        className='hover:scale-105 max-w-1/6 transition-all duration-300 rotate-slow'
                        src={"/images/logo-dark-nobg.png"}
                        alt="Logo"
                    />
                </div>
                <WelcomeBottomHeader elements={elements} />
            </div>
            {/* End welcome page */}

            <div className={`w-full flex flex-col ${isDarkMode ? "bg-black" : "bg-white"}`}>
                <div className='m-8'><span className='text-4xl font-sans uppercase text-widest tracking-wide' style={{ color: isDarkMode ? "white" : "black" }}>Updates Feed</span>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dr.Roach - Updateded phd in doctoring</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet. Est magnam exercitationem ad voluptates internos qui facere nulla quo suscipit quibusdam in quia magnam At aspernatur consequatur et quas labore. Et labore vero et placeat impedit qui beatae officiis.</p>
                            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></a>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">WhatzapBOT - Something</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet. Est magnam exercitationem ad voluptates internos qui facere nulla quo suscipit quibusdam in quia magnam At aspernatur consequatur et quas labore. Et labore vero et placeat impedit qui beatae officiis.</p>
                        </li>
                        <li className="ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ChatBOT - updated something</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet. Est magnam exercitationem ad voluptates internos qui facere nulla quo suscipit quibusdam in quia magnam At aspernatur consequatur et quas labore. Et labore vero et placeat impedit qui beatae officiis. </p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default News;