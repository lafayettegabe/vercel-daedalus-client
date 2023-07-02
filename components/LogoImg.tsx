import React from 'react';

const LogoImg = ({ className }) => {
  return (
      <img className={className} src={document.documentElement.classList.contains('dark') ? "/images/logo-dark-nobg.png" : "/images/logo-light-nobg.png"} alt="Logo" />
  );
};

export default LogoImg;
