import React from 'react';

interface HeaderProps {
  title: string;
  backgroundImage: string;
}

const Header: React.FC<HeaderProps> = ({ title, backgroundImage }) => {
  return (
    <header className="relative bg-cover bg-center text-white py-8 rounded-t-lg mb-8" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="text-5xl font-bold text-center relative z-10">{title}</h1>
    </header>
  );
};

export default Header;
