'use client';
import { useRouter } from 'next/navigation';
import React, { CSSProperties, useState, useEffect } from 'react';
import { Button, Divider, DividerProps } from 'antd'
import { FacebookFilled, ArrowDownOutlined, SmileOutlined, TwitterSquareFilled } from '@ant-design/icons';
import './hireus.css';
import Link from 'next/link'
import Image from 'next/image'

import ContactOverlay from '@/components/ContactOverlay';

export default function HireUS() {
    const router = useRouter();

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [darkColorValue, setDarkColorValue] = useState('#4250D7');
    const [whiteColorValue, setWhiteColorValue] = useState('#7598F7');

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
                setDarkColorValue('#100D33');
                setWhiteColorValue('#4250D7');
            } else {
                sections.forEach((element) => {
                    element.classList.remove('dark');
                });
                // White Mode
                setDarkColorValue('#4250D7');
                setWhiteColorValue('#7598F7');
            }
        });

        observer.observe(root, { attributes: true });

        return () => {
            observer.disconnect();
        };
    }, []);

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

    const logoSource = isDarkMode ? "/images/logo.png" : "/images/logo.png";

    return (
        <main>
            <div className='h-screen flex flex-col justify-between white-color section' style={whiteColorStyle}>
                <div className='flex flex-col justify-center items-center h-full'>
                    <Image
                        className='hover:scale-105 max-w-1/4 transition-all duration-0 mt-auto mb-auto rotate-slow duration-600 absolute z-0'
                        src={logoSource}
                        alt="Logo"
                        height={350}
                        width={350}
                    />
                    <div className="w-[1200px] font-Lausanne text-8xl text-black text-center tracking-tighter flex items-center justify-center z-50">
                        Igniting enthusiasm for your vision and propelling your progress forward.
                    </div>
                </div>
            </div>

            <div className="h-screen w-full bg-white section dark:bg-dark-color">
                <div className="h-full w-full flex items-center justify-center">

                    <div className="w-[1200px] flex flex-col justify-center items-center">
                        <div className="w-[600px] text-6xl font-bold">
                            Your path to growth
                        </div>
                        <div className="w-[600px]">
                            At Dotlogics, we believe that unlocking growth requires a multifaceted approach. That's why we're a full-service agency dedicated to building excitement and delivering amazing experiences for your customers.
                        </div>
                        <div id="accordion-collapse" data-accordion="collapse">
                            <h2 id="accordion-collapse-heading-1">
                                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                    <span>What is Flowbite?</span>
                                    <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS, including buttons, dropdowns, modals, navbars, and more.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-2">
                                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                    <span>Is there a Figma file available?</span>
                                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite was first conceptualized and designed using the Figma software, so everything in the library has a design equivalent in our Figma file.</p>
                                    <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-3">
                                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                    <span>What are the differences between Flowbite and Tailwind UI?</span>
                                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open-source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of both worlds.</p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col justify-center items-center h-screen w-full white-color section' style={darkColorStyle}>
                <div className='h-full w-full m-8'>
                    <div className='w-full h-1/3 flex flex-row justify-start items-start'>
                        <div className='h-full w-[300px] hover:border-slate-400 flex items-end justify-center'>
                            ChatBots
                        </div>
                    </div>
                    <div className='w-[1200px] h-1/3 flex flex-row justify-center items-center'>
                        <div className='text-6xl font-bold text-white'>
                            We are a multi-disciplinary company offering a wide range of expertise across various areas. Our services and values are diverse, catering to the unique needs of our clients.
                        </div>
                    </div>
                    <div className='w-full h-1/3 flex flex-row justify-end items-end'>
                        <div className='h-full w-[300px] hover:border-slate-400 flex items-start justify-center'>
                            WebDesign
                        </div>
                    </div>
                </div>
            </div>


        </main >
    );
}
