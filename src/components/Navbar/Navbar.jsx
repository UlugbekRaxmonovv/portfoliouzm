import React,{useState} from 'react';
import './Navbar.css'
import { VscComment } from "react-icons/vsc";
import logo from '../../assets/img/logo.png';
import { Link } from 'react-scroll';
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
    const [click, setClick] = useState(false);
    return (
        <div>
          <nav className="navbar container">
            <Link to=''>  <img src={logo} alt=""  className='logo'/></Link>
            <div className="disktopMenu">
            <Link className="disktopMenuList" activeClass='active' to='main' spy={true} smooth={true} offset={-100} duration={500}  >Home</Link>
            <Link className="disktopMenuList" activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}>My Skills</Link>
            <Link className="disktopMenuList" activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}>About Me</Link>
            <Link className="disktopMenuList" activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
            </div>
            <button className="btnButton" onClick={() =>{
              document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
            <VscComment className="disktopMenuImg" />
             Contact Me
            </button>


            <BiMenuAltRight  className='logoMenu' onClick={() => setClick(!click)} />
            <div className="topMenu" style={{display: click? 'flex' : 'none'}}>
            <Link className="MenuList" activeClass='active' to='main' spy={true} smooth={true} offset={-100} duration={500}  onClick={() => setClick(false)} >Home</Link>
            <Link className="MenuList" activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}  onClick={() => setClick(false)}>My Skills</Link>
            <Link className="MenuList" activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setClick(false)} >About Me</Link>
            <Link className="MenuList" activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setClick(false)} >Portfolio</Link>
            <Link className="MenuList" activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setClick(false)} >Contact</Link>
            </div>
          </nav>
        </div>
    );
}

export default Navbar;
