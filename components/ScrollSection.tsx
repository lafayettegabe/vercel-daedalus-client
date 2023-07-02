'use client'
import React, { useState, useEffect, KeyboardEvent } from 'react';

const ScrollSection = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  useEffect(() => {
    var sections = document.querySelectorAll('.section');
    console.log(sections);
    const handleScroll = (event) => {
      if (sections.length === 0) {
        console.log(sections, 'off');
        return;
      } // Return if there are no sections

      event.preventDefault();
      if (!scrollEnabled) return; // Return if scroll is disabled

      setScrollEnabled(false); // Disable scroll temporarily

      const delta = event.deltaY;

      console.log(event)

      let currentSectionIndex = -1;
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          currentSectionIndex = i;
          break;
        }
      }

      let nextSectionIndex = null;
      if (delta > 0 || event.key === 'ArrowDown' || event.key === ' ') {
        nextSectionIndex = currentSectionIndex !== -1 ? currentSectionIndex + 1 : 0;
        if (nextSectionIndex >= sections.length) {
          nextSectionIndex = 0;
        }
      } else if ( delta < 0 || event.key === 'ArrowUp'){
        nextSectionIndex = currentSectionIndex !== -1 ? currentSectionIndex - 1 : sections.length - 1;
        if (nextSectionIndex < 0) {
          nextSectionIndex = sections.length - 1;
        }
      }

      if (nextSectionIndex !== null) {
        const nextSection = sections[nextSectionIndex];
        nextSection.scrollIntoView({ behavior: 'smooth' });
        setActiveSectionIndex(nextSectionIndex);
      }

      // Enable scroll after a delay of 1 second
      setTimeout(() => {
        setScrollEnabled(true);
      }, 1000);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown' || event.key === ' ' || event.key === 'ArrowUp') {
        handleScroll(event);
      }
    };

    document.addEventListener('wheel', handleScroll, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('wheel', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [scrollEnabled]); // Include scrollEnabled as a dependency

  const handleSectionClick = (index) => {
    const sections = document.querySelectorAll('.section');
    if (sections.length === 0) {
      console.log('No sections found');
      return;
    }

    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
      setActiveSectionIndex(index);
    }
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center">
      {/* Render a circle for each section */}
      {document.querySelectorAll('.section').length > 0 &&
        Array.from({ length: document.querySelectorAll('.section').length }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleSectionClick(index)}
            className={`circle ${index === activeSectionIndex ? 'active' : ''}`}
          />
        ))}
    </div>
  );
};

export default ScrollSection;
