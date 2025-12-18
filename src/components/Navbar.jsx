import React from 'react';

const Navbar = () => {
  return (
    <header className="header">
        <div className="container">
            <nav className="nav">
                <a href="#home" className="logo">Han's Resume</a>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Navbar;
