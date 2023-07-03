import React from 'react';

interface NewsFeedProps {
  image: string;
  textContent: string;
  date: string;
}

const NewsFeed: React.FC<NewsFeedProps> = ({ image, textContent, date }) => {
  return (
    <div>
      <img src={image} alt="News Image" />
      <p>{textContent}</p>
      <p>Date: {date}</p>
    </div>
  );
};

export default NewsFeed;
