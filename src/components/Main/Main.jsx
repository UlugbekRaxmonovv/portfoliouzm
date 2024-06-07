import React from 'react';
import {ReactTyped} from "react-typed";
import './Main.css'
import rasm from '../../assets/img/rasm1.png'
import { PiHandbagSimpleFill } from "react-icons/pi";
import { Link } from 'react-scroll';

const Main = () => {
    return (
        <div>
            <section id="main">
                <div className="mainContact container">
                    <span className="hello">Hello,</span>
                    <span className="maintext">
                        I'm <span className="names">
                            <ReactTyped
                                strings={["Raxmonov Ulug'bek"]}
                                typeSpeed={40}
                                startDelay={500}
                                showCursor={false}
                            />
                        </span> 
                        <br /> 
                        <ReactTyped
                            strings={["Frontend Developer"]}
                            typeSpeed={40}
                            startDelay={2000}
                            showCursor={false}
                        />
                    </span>
                    <p className="par">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                        Deserunt voluptas aut accusamus?
                    </p>
                    <Link to='home' smooth={true} duration={500}>
                        <button className="btn">
                            <PiHandbagSimpleFill className='btnImg' />
                            Hire Me
                        </button>
                    </Link>
                </div>
                <img src={rasm} alt="Background" className="bg" />
            </section>
        </div>
    );
}

export default Main;
