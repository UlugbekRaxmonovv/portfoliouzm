import React from 'react';
import './Project.css'
import rasm from '../../assets/img/phoni.png'
import rasm1 from '../../assets/img/pscaled.jpg'
import rasm2 from '../../assets/img/rasm1 (1).png'
import rasm3 from '../../assets/img/mir.png'
import { SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import rasm4 from '../../assets/img/nornligth.jpg'
import { Link } from 'react-scroll';
import rasm5 from '../../assets/img/books.jpg'

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
                     <p>Up to 10% off Voucher <br /> Javascript</p>
                     <div className="ikon">
                        <div className="ikon_all">
                        
                            <a href="https://5-month-exem.vercel.app/" className=""><SiVercel /> Link</a>
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
                     
                     <p>
                     Fresh Vegetables Big discount React js</p>
                     <div className="ikon">
                        <div className="ikon_all">
                        
                            <a href="https://6-month-11-lesson-gamma.vercel.app/" className=""><SiVercel /> Link</a>
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
                     <p>Super Flash Sale:  React js RTK.QUERY</p>
                     <div className="ikon">
                        <div className="ikon_all">
                        
                            <a href="https://7-month-exem.vercel.app/" className=""><SiVercel /> Link</a>
                        </div>
                        <div className="ikon_all">
                        
                        <a href="https://github.com/UlugbekRaxmonovv/7-Month-Exem.git" className=""><FaGithub /> Github</a>
                    </div>
                     </div>
                  </div>



                  <div className="project_all">
                    <div className="all_img">
                    <div className="img">
                        <img src={rasm3} alt="" />
                     </div>
                    </div>
                     <p title='This project is built using React.js, Redux, RTK Query, Axios, and Sass, specifically tailored for logistics operations. It focuses on automating user tasks, streamlining processes, and enhancing efficiency within the logistics domain.'>This project is built using React.js, Redux, RTK Query, Axios, and Sass, specifically tailored for logistics operations. It focuses on automating user tasks, streamlining processes, and enhancing efficiency within the logistics domain.</p>
                     <div className="ikon">
                        <div className="ikon_all">
                        
                            <a href="https://miran-team-tau.vercel.app/" className=""><SiVercel /> Link</a>
                        </div>
                        <div className="ikon_all">
                        
                        <a href="https://github.com/UlugbekRaxmonovv/MiranTeam.git" className=""><FaGithub /> Github</a>
                    </div>
                     </div>
                  </div>




                  <div className="project_all">
                    <div className="all_img">
                    <div className="img">
                        <img src={rasm4} alt="" />
                     </div>
                    </div>
                     <p title='This online marketplace is built using React.js and Sass, featuring a fully responsive design. It leverages a mock API and RTK (Redux Toolkit) for state management. The platform includes complete functionalities for managing shopping carts, creating wishlists, and facilitating smooth checkout processes.'>This online marketplace is built using React.js and Sass, featuring a fully responsive design. It leverages a mock API and RTK (Redux Toolkit) for state management. The platform includes complete functionalities for managing shopping carts, creating wishlists, and facilitating smooth checkout processes.</p>
                     <div className="ikon">
                        <div className="ikon_all">
                        
                            <a href="https://8-month-exem.vercel.app/" className=""><SiVercel /> Link</a>
                        </div>
                        <div className="ikon_all">
                        
                        <a href="https://github.com/UlugbekRaxmonovv/8-MonthExem.git" className=""><FaGithub /> Github</a>
                    </div>
                     </div>
                  </div>




                  <div className="project_all">
                    <div className="all_img">
                    <div className="img">
                        <img src={rasm5} alt="" />
                     </div>
                    </div>
                     <p>This book site may be useful to you React js is written in RTK.QUERY technologies</p>
                     <div className="ikon">
                        <div className="ikon_all">
                        
                            <a href="https://books-theta-woad.vercel.app/" className=""><SiVercel /> Link</a>
                        </div>
                        <div className="ikon_all">
                        
                        <a href="https://github.com/UlugbekRaxmonovv/Books.git" className=""><FaGithub /> Github</a>
                    </div>
                     </div>
                  </div>
              </div>
            </section>
        </div>
    );
}

export default Project;
