import React from 'react';
import './About.css'
import rasm from '../../assets/img/about.jpg'
const About = () => {
    return (
        <div>
            <section id='about' className='container'>
                <h1>About Me</h1>
             <div className="about">
             <div className="abot_all">
                  <img src={rasm} alt="" />
                </div>
                <div className="abot_all">
                  <h2><span className='bh'>I am </span>Progtames</h2>
                  <span className='bty'>I can Programme Anythin You Want</span>
                <p>Hello,I am programming and computer literate. I have sufficient knowledge and skills in programming</p>
                </div>
             </div>
            </section>
        </div>
    );
}

export default About;
