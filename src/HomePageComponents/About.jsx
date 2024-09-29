import './About.css';
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiGithubAlt } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiFirebase } from "react-icons/di";
import { DiCode } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { LiaAdobe } from "react-icons/lia";
import { LiaSketch } from "react-icons/lia";

function About(props) {
    const theme = props.theme;
    const MyPicture = props.MyPicture
    return(
        <section className="about-section" id='about-section'>
            <div className='picture-container'>
             <img src={MyPicture} alt="mirosarte" />
            </div>
            <div className="my-info-container" >
                  <h2>ABOUT</h2>
                  <h3>I’ll  introduce  a little about myself</h3>
                  <div className='picture-container-inside'>
                    <img src={MyPicture} alt="mirosarte" />
                    </div>
                  <p className={`${theme === "light"? "light-background-p":"dark-background-p"}`}>
                  I’m Miro Ivan D. Sarte, 23 years old, from Rosario, Cavite. I recently graduated from STI College Rosario with a Bachelor of Science in Computer Engineering. I am passionate about creating websites and mobile applications, and I’m enthusiastic about learning new technologies as they emerge.

I had to pause my college education during the pandemic due to financial problems, which led me to work as a Lean Technician at DANAM Philippines Incorporated for one and a half years. In this role, I applied continuous improvement methodologies in the production area using KAIZEN and Lean Six Sigma principles to enhance efficiency and maintain product quality. Although the job was not related to my course or passion, I discovered that I am flexible, a problem solver, and a collaborative team player. After saving enough money for my college education, I returned to school and attempted to become a working student. However, due to scheduling conflicts, I resigned from DANAM and decided to focus fully on my studies.

During my return to college, I ventured into freelancing, offering software development services. Through freelancing, I expanded my programming knowledge and learned how to use the SDLC methodology in my projects, which helped me speed up development and collaborate effectively with clients.                  </p>
                  <h2>
                    BACKGROUNDS
                  </h2>
                  <div className='myBackground-container'>
                         <p className='header'>WORK EXPERIENCE</p>
                         <div className='timeline'>
                            <p className='company first-p'>Freelancing</p>
                            <p className='position'>Software Development and 2D/3D modeling</p>
                            <p className='time-frame'>2023-present</p>

                            <p className='company'>DANAM Philippines Inc</p>
                            <p className='position'>Lean Technician</p>
                            <p className='time-frame'>2022-2023</p>

                         </div>
                         <p className='header'>EDUCATION</p>
                         <div className='timeline'>
                            <p className='company first-p'>STI College Rosario</p>
                            <p className='position'>Computer Engineering</p>
                            <p className='time-frame'>2019-2024</p>
                            <p className='company'>Galilee Academy School</p>
                            <p className='position'>General Academic Strand</p>
                            <p className='time-frame'>2017-2019</p>
                         </div>
                  </div>
                  <h2>SKILLS</h2>
                  <div className='skills-container'> 
                      <ul className='skills-list'>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiHtml5 /></span><span className='skills'>HTML</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiCss3 /></span><span className='skills'>CSS</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiJsBadge /></span><span className='skills'>JS</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiReact /></span><span className='skills'>REACT JS</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiNodejsSmall /></span><span className='skills'>NODE JS</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiNodejsSmall /></span><span className='skills'>EXPRESS JS</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiJava /></span><span className='skills'>JAVA</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiAndroid /></span><span className='skills'>KOTLIN</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiCode /></span><span className='skills'>C++</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiGit /></span><span className='skills'>GIT</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiGithubAlt /></span><span className='skills'>GITHUB</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiMysql /></span><span className='skills'>MYSQL</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiFirebase /></span><span className='skills'>FIREBASE</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiHtml5 /></span><span className='skills'>FIGMA</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><LiaAdobe /></span><span className='skills'>AUTOCAD</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><LiaSketch /></span><span className='skills'>SKETCHUP</span>
                           </li>
                           <li className='skills-item'>
                            <span className='skills-icon'><DiCode /></span><span className='skills'>ARDUINO</span>
                           </li>
                           
                      </ul>
                  </div>
            </div>
        </section>
    );
}
export default About