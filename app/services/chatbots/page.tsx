'use client'
import React, { CSSProperties, useState, useEffect } from 'react';
import Image from 'next/image'

export default function Home() {
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
            <div className='fixed right-0 h-full bg-red'>
                <div id='bolotas' className='flex flex-col gap-4 items-center justify-center bg-blue h-screen'>
                </div>
            </div>

            <div className='h-screen flex flex-col justify-between white-color section' style={whiteColorStyle}>
                <div className='flex flex-col justify-center items-center h-full'>
                    <Image
                        className='hover:scale-105 max-w-1/4 transition-all duration-0 mt-auto mb-auto'
                        src={logoSource}
                        alt="Logo"
                        width={250}
                        height={250}
                        priority={true}
                    />
                    <div className='absolute inset-0 flex justify-center items-center text-8xl font-sans invert drop-shadow-lg' style={{ fontVariant: 'all-small-caps' }}>
                        Chat Bots
                    </div>
                </div>
            </div>
        </main>
    );
}
