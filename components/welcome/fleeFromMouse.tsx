import React, { useRef } from 'react';
import Image from 'next/image';

const ImageAnimation: React.FC = () => {
  const imagesRef = useRef<Array<HTMLDivElement | null>>([]);

  const animateMove = (element: HTMLDivElement, top: number, left: number) => {
    console.log(element, top, left);
    try {
      element.style.transition = 'transform 0.3s ease-out';
      element.style.transform = `translate(${left}px, ${top}px)`;
    } catch (err) {
      console.log(err);
    }
  };

  const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    const element = imagesRef.current[index];
    if (element) {
      const top = getRandomNumber(window.innerHeight - element.offsetHeight);
      const left = getRandomNumber(window.innerWidth - element.offsetWidth);

      animateMove(element, top, left);
    }
  };

  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="relative">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="image"
            ref={(el) => (imagesRef.current[index] = el)}
            onMouseOver={(event) => handleMouseOver(event, index)}
            style={{ pointerEvents: 'none' }}
          >
            <Image src="/images/logo.png" alt="Running Emoji" width={50} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageAnimation;
