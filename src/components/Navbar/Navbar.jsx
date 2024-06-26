import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Switch from '@mui/material/Switch';
import { IoIosArrowUp } from "react-icons/io";
const label = { inputProps: { 'aria-label': 'Switch demo' } };
import { VscComment } from "react-icons/vsc";
import logo from '../../assets/img/logo.png';
import { Link } from 'react-scroll';
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
    const [toogle, setToogle] = useState(false);
    const [click, setClick] = useState(false);
    const [bgColor, setBgColor] = useState(false); // Initially false, representing the default background color

    useEffect(() => {
        if (bgColor) {
            document.body.classList.add('all');
        } else {
            document.body.classList.remove('all');
        }
    }, [bgColor]);

    const changeColor = () => {
        setBgColor(!bgColor);
    };


    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setToogle(true);
        } else {
            setToogle(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            <nav className="navbar container">
             
                <Link to=''>  
                    <img src={logo} alt="logo" className='logo' />
                </Link>
                <div className="disktopMenu">
                    <Link className="disktopMenuList" activeClass='active' to='main' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                    <Link className="disktopMenuList" activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}>About Me</Link>
                    <Link className="disktopMenuList" activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}>My Skills</Link>
                    <Link className="disktopMenuList" activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
                    
                </div>
                
            
                
                <BiMenuAltRight className='logoMenu' onClick={() => setClick(!click)} />
                <div className="topMenu" style={{ display: click ? 'flex' : 'none' }}>
                    <Link className="MenuList" activeClass='active' to='main' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setClick(false)}>Home</Link>
                    <Link className="MenuList" activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setClick(false)}>About Me</Link>
                    <Link className="MenuList" activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setClick(false)}>My Skills</Link>
                    <Link className="MenuList" activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setClick(false)}>Portfolio</Link>
                    <Link className="MenuList" activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setClick(false)}>Contact</Link>
                </div>
                <div className="btn-all">
                    <div className="btn_rw">
                    <button className="btnButton" onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}>
                    <VscComment className="disktopMenuImg" />
                    Contact Me
                </button>
                    </div>
                    <div className="btn_rw">
                    <Switch style={{color:'white'}}  onClick={changeColor} {...label} defaultChecked />
                    <div>
                    
                    </div>

                    </div>
                </div>
            </nav>
            <div className="backTop">
            {toogle ?
                <div onClick={scrollToTop} className="backtop_button">
                    <IoIosArrowUp />
                </div>
                :
                ""
            }
        </div>
        </div>
    );
}

export default Navbar;
