import React from 'react';
import './Skills.css'
import rasm1 from  '../../assets/img/html.png'
import rasm from '../../assets/img/CSS3.png'
import rasm2 from '../../assets/img/png-.png'
import rasm3 from '../../assets/img/tailwind.png'
import rasm4 from '../../assets/img/js.png'
import rasm5 from '../../assets/img/react.png'
import rasm6 from '../../assets/img/redux.png'
import rasm7 from '../../assets/img/ty.png'
import rasm8 from '../../assets/img/AKT.png'
import rasm9 from '../../assets/img/mui.png'
import rasm10 from '../../assets/img/GIT.png'
import rasm11 from '../../assets/img/nxt.png'
const Skills = () => {
    return (
        <div>
           <section id='skills' className='container'>
            <h1 style={{fontSize:'2rem'}}>My Skills</h1>
             <div className="skills">
             <div className="skill">
                    <div className="skills_img">
                        <img src={rasm1} alt="html" />
                    </div>
                        <h1>HTML</h1>
                </div>
                <div className="skill">
                    <div className="skills_img">
                        <img src={rasm} alt="html" />
                    </div>
                    <h1>CSS</h1>
                </div>
                <div className="skill">
                    <div className="skills_img">
                        <img src={rasm2} alt="html" />
                    </div>
                    <h1>SASS</h1>
                </div>

                <div className="skill">
                    <div className="skills_img">
                        <img src={rasm9} alt="html" />
                    </div>
                    <h1>MATERIAL.UI</h1>
                </div>
                <div className="skill">
                    <div className="skills_img">
                        <img src={rasm3} alt="html" />
                    </div>
                    <h1>TAILWIND</h1>
                </div>
                <div className="skill">
                    <div className="skills_img">
                        <img src={rasm10} alt="html" />
                    </div>
                    <h1>GITHUB</h1>
                </div>
                <div className="skill">
                    <div className="skills_img">
                        <img src={rasm4} alt="html" />
                    </div>
                    <h1>JAVASCRIPT</h1>
                </div>
                <div className="skill">
                    <div className="skills_img">
                        <img src={rasm5} alt="html" />
                    </div>
                    <h1>REACT.JS</h1>
                </div>
                <div className="skill">
                    <div className="skills_img">
                        <img src={rasm8} alt="html" />
                    </div>
                    <h1>RTK.QUERY</h1>
                </div>
                <div className="skill">
                    <div className="skills_img">
                        <img src={rasm6} alt="html" />
                    </div>
                    <h1>REDUX</h1>
                </div>
                <div className="skill">
                    <div className="skills_img">
                        <img src={rasm11} alt="html" />
                    </div>
                    <h1>NEXT.JS</h1>
                </div>
                <div className="skill">
                    <div className="skills_img">
                        <img src={rasm7} alt="html" />
                    </div>
                    <h1>TYPESCRIPT</h1>
                </div>
             </div>
           </section>
        </div>
    );
}

export default Skills;
