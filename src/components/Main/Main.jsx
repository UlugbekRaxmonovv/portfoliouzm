import React from 'react';
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
                    <span className="maintext">I'm <span className="names">John</span> <br /> Frontend Developer </span>
                    <p className="par">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
Deserunt voluptas aut accusamus ?
                    </p>
                    <Link to='home'><button className="btn"><PiHandbagSimpleFill  className='btnImg' /> Hiro Me</button></Link>
                </div>
                <img src={rasm} alt="" className="bg" />
             </section>
        </div>
    );
}

export default Main;
