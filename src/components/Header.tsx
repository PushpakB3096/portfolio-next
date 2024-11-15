'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">Pushpak<span className="accent">.</span></div>
        <div className="menu-toggle" onClick={toggleMenu} id="mobile-menu">
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;