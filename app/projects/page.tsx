'use client';
import React, { CSSProperties, useState, useEffect, useRef } from 'react';
import { Button, Divider, DividerProps } from 'antd'
import { FacebookFilled, ArrowDownOutlined, LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons';
import './project.css';

import ContactOverlay from '@/components/ContactOverlay';

export default function HireUS() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [darkColorValue, setDarkColorValue] = useState('#4250D7');
    const [whiteColorValue, setWhiteColorValue] = useState('#7598F7');
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = scrollContainerRef.current?.scrollTop;
            if (scrollTop !== undefined) {
                setScrollPosition(scrollTop);
            }
        };

        scrollContainerRef.current?.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainerRef.current?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const transformValue = `matrix(1, 0, 0, 1, 0, ${scrollPosition})`;


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
            <ContactOverlay />
            <div ref={scrollContainerRef} className='h-screen flex flex-col justify-between white-color' style={whiteColorStyle}>
                <div className='flex flex-col justify-center items-center h-full'>
                    <img
                        className='hover:scale-105 max-w-1/4 transition-all duration-0 mt-auto mb-auto rotate-slow duration-600'
                        src={logoSource}
                        alt="Logo"
                    />
                    <div className='absolute inset-0 flex justify-center items-center text-8xl font-sans invert drop-shadow-lg' style={{ fontVariant: 'all-small-caps' }}>DEADELUS</div>
                </div>
            </div>
            <Divider />
            <div ref={scrollContainerRef} className="flex flex-col justify-center items-center h-screen w-full diagonal-section gap-8  transition-all duration-600" style={diagonalColorStyle}>
                <div className='text-8xl font-black text-white tracking-wider animate-wave hover:scale-105 hover:tracking-widest'>Project 1</div>
                <div className='text-8xl font-black text-white tracking-wider animate-wave hover:scale-105'>Project 1</div>
                <div className='text-8xl font-black text-white tracking-wider animate-wave hover:scale-105'>Project 1</div>
                <div className='text-8xl font-black text-white tracking-wider animate-wave hover:scale-105'>Project 1</div>
                <div className='text-8xl font-black text-white tracking-wider animate-wave hover:scale-105'>Project 1</div>
                <div className='text-8xl font-black text-white tracking-wider animate-wave hover:scale-105'>Project 1</div>
                <div className='text-8xl font-black text-white tracking-wider animate-wave hover:scale-105'>Project 1</div>
            </div>
        </main>
    );
}
