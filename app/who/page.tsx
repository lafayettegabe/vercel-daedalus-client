'use client';
import React, { CSSProperties, useState, useEffect } from 'react';
import { Divider } from 'antd';
import { FacebookFilled, ArrowDownOutlined, LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons';
import './whoCss.css';
import Link from 'next/link'
import Image from 'next/image'


import ContactOverlay from '@/components/ContactOverlay';
import FleeFromMouse from '@/components/welcome/fleeFromMouse';

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [imageOffset, setImageOffset] = useState({ offsetX: 0, offsetY: 0 });
    const [darkColorValue, setDarkColorValue] = useState('#4250D7');
    const [whiteColorValue, setWhiteColorValue] = useState('#7598F7');

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
                setDarkColorValue('#1B262C');
                setWhiteColorValue('#0F4C75');
            } else {
                sections.forEach((element) => {
                    element.classList.remove('dark');
                });
                // White Mode
                setDarkColorValue('#BBE1FA');
                setWhiteColorValue('#3282B8');
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
    const logoStyle: CSSProperties = {
        transform: `translate(${-imageOffset.offsetX}px, ${-imageOffset.offsetY}px)`,
        transition: 'transform 0s ease-out',
    };

    return (
        <main>
            <ContactOverlay />

            <div className='fixed right-0 h-full bg-red'>
                <div id='bolotas' className='flex flex-col gap-4 items-center justify-center bg-blue h-screen'>
                </div>
            </div>

            <div className='pointer-events-none h-screen flex flex-col justify-between white-color section' style={whiteColorStyle}>
                <div className='pointer-events-none flex flex-col justify-center items-center h-full'>
                    <FleeFromMouse />
                    <div className='pointer-events-none absolute inset-0 flex justify-center items-center text-8xl font-sans invert drop-shadow-lg' style={{ fontVariant: 'all-small-caps' }}>Who we are?</div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center h-screen w-full diagonal-section section" style={diagonalColorStyle}>
                <div style={{ height: 'calc(100vh - 50px)' }} className='flex flex-col items-center justify-center'>
                    <div className='text-6xl font-bold text-white'>We are</div>
                    <div className='changing-text-container'>
                        <div className="scroller">
                            <span>
                                Cool<br />
                                Art<br />
                                Intruiging<br />
                                Challenging
                            </span>
                        </div>
                    </div>
                    <div className='text-xl w-[800px] text-center text-white'>We have years of experience in the creative industry, producing exciting experiences for brands that are as smart as they are effective.</div>
                    <button type="button" className="mt-4 text-black hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                        Hire Us
                    </button>


                </div>
                <Divider className='border-black top-0'><ArrowDownOutlined /> Meet the founders <ArrowDownOutlined /></Divider>
            </div>

            <div className='flex flex-col items-center justify-center h-screen w-full dark-color section' style={darkColorStyle}>
                <div className='grid grid-cols-2 mx-auto' style={{ width: '1200px' }}>
                    <div className='w-full flex flex-col gap-4 justify-start items-start' >
                        <div className='font-light text-white'>Gabriel Soares - CTO | CO-FOUNDER</div>
                        <div className='text-6xl font-black tracking-wider w-full text-white'>Jack of All-trades <br /> Master of None</div>
                        <div className='text-2xl text-white'>Main character • Protagonist • INTJ • Bookworm</div>
                        <div className='text-white'>
                            • Passionate book lover <br />
                            • Machine Learning Enthusiast <br />
                            • Addicted to the dopamine rush of coding. <br />
                            • When I&apos;m not coding I am usually reading, playing games or hanging out with my gf.
                        </div>
                        <div className="h-1/4 flex flex-row items-center gap-4 text-white">
                            <FacebookFilled className="text-xl" />
                            <LinkedinFilled className="text-xl" />
                            <LinkedinFilled className="text-xl" />
                            <LinkedinFilled className="text-xl" />
                            <TwitterSquareFilled className="text-xl" />
                        </div>
                    </div>
                    <div className='flex flex-row justify-end'>
                        <Image src='/images/avatar-gabriel.png' className='h-auto max-h-full' style={{ width: '400px' }} alt='Avatar'/>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center h-screen w-full dark-color section' style={darkColorStyle}>
                {/* <Divider className='border-black top-0'>Meet the founders</Divider> */}
                <div className='grid grid-cols-2 mx-auto gap-8' style={{ width: '1200px' }}>
                    <div className='flex flex-row justify-start'>
                        <Image src='/images/avatar-lucas.png' className='h-auto max-h-full' style={{ width: '400px' }} alt='Avatar'/>
                    </div>
                    <div className='w-full flex flex-col gap-4 justify-end items-end text-end'>
                        <div className='font-light text-white'>Lucas Diniz - CD | CO-FOUNDER</div>
                        <div className='text-6xl font-black tracking-wider w-full text-white'>Canines enthusiast <br /> Felines hater</div>
                        <div className='text-2xl text-white'>Lazy • Homebody • Philomath • Pet lover</div>
                        <div className='text-white'>
                            • Passionate book lover <br />
                            • Machine Learning Enthusiast <br />
                            • Addicted to the dopamine rush of coding. <br />
                            • When I&apos;m not coding, I&apos;m usually reading, playing games or hanging out with my gf.
                        </div>
                        <div className="h-1/4 flex flex-row items-center gap-4 text-white">
                            <FacebookFilled className="text-xl" />
                            <LinkedinFilled className="text-xl" />
                            <LinkedinFilled className="text-xl" />
                            <LinkedinFilled className="text-xl" />
                            <TwitterSquareFilled className="text-xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center h-screen w-full dark-color section' style={darkColorStyle}>
                <div>last</div>
            </div>
        </main>
    );
}
