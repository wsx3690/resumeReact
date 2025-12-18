import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
        <div className="container">
            <div className="hero-content">
                <p className="greeting">Hello, I'm</p>
                <h1 className="name">賴子涵</h1>
                <h2 className="title">Frontend Engineer</h2>
                <p className="intro">
                    [Placeholder: Brief introduction about yourself. e.g., Passionate about creating beautiful web experiences.]
                </p>
                <a href="#contact" className="btn btn-primary">Contact Me</a>
            </div>
        </div>
    </section>
  );
};

export default Hero;
