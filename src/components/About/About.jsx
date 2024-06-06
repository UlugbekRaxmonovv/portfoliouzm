import React from 'react';
import './About.css'
import rasm from '../../assets/img/about.jpg'
import { Link } from 'react-scroll';
const About = () => {
    return (
        <div>
            <section id='about' className='container'>
           <Link to='' className="disktopMenuList" activeClass='active'  spy={true} smooth={true} offset={-100} duration={500}  ><h1>About Me</h1></Link>
              
               
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
