import React from 'react';

const NewsFeed = ({ image, textContent, date }) => {
  return (
    <div>
      <img src={image} alt="News Image" />
      <p>{textContent}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default NewsFeed;
