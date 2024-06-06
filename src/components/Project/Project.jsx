import React from 'react';
import './Project.css'
import rasm from '../../assets/img/phoni.png'
import rasm1 from '../../assets/img/pscaled.jpg'
import rasm2 from '../../assets/img/rasm1 (1).png'
import { SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll';

const Project = () => {
    return (
        <div>
            <section id='project' className='container'>
            <Link to='' className="disktopMenuList" activeClass='active'  spy={true} smooth={true} offset={-100} duration={500}  >    <h1>Project</h1></Link>
              <div className="project">
                  <div className="project_all">
                  <div className="all_img">
                     <div className="img">
                        <img src={rasm} alt="" />
                     </div>
                     </div>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde hic quae neque placeat fugiat assumenda quasi</p>
                     <div className="ikon">
                        <div className="ikon_all">
                        
                            <a href="https://5-month-exem.vercel.app/" className=""><SiVercel /> Vercel</a>
                        </div>
                        <div className="ikon_all">
                        
                        <a href="https://github.com/UlugbekRaxmonovv/5-month-Exem.git" className=""><FaGithub /> Github</a>
                    </div>
                     </div>
                  </div>
                  <div className="project_all">
                  <div className="all_img">
                     <div className="img">
                        <img src={rasm1} alt="" />
                        </div>
                        </div>
                     
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde hic quae neque placeat fugiat assumenda quasi</p>
                     <div className="ikon">
                        <div className="ikon_all">
                        
                            <a href="https://6-month-11-lesson-gamma.vercel.app/" className=""><SiVercel /> Vercel</a>
                        </div>
                        <div className="ikon_all">
                        
                        <a href="https://github.com/UlugbekRaxmonovv/6-Month-11-lesson.git" className=""><FaGithub /> Github</a>
                    </div>
                     </div>
                  </div>
                  <div className="project_all">
                    <div className="all_img">
                    <div className="img">
                        <img src={rasm2} alt="" />
                     </div>
                    </div>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde hic quae neque placeat fugiat assumenda quasi</p>
                     <div className="ikon">
                        <div className="ikon_all">
                        
                            <a href="https://7-month-exem.vercel.app/" className=""><SiVercel /> Vercel</a>
                        </div>
                        <div className="ikon_all">
                        
                        <a href="https://github.com/UlugbekRaxmonovv/7-Month-Exem.git" className=""><FaGithub /> Github</a>
                    </div>
                     </div>
                  </div>
              </div>
            </section>
        </div>
    );
}

export default Project;
