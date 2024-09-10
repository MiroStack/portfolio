import './About.css';
import MyPicture from './assets/me.graduated-pic.jpg'
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

function About(props) {
    const theme = props.theme;
    return(
        <section className="about-section" id='about-section'>
            <div className='picture-container'>
             <img src={MyPicture} alt="mirosarte" />
            </div>
            <div className="my-info-container">
                  <h2>ABOUT</h2>
                  <div className='picture-container-inside'>
                    <img src={MyPicture} alt="mirosarte" />
                    </div>
                  <p className={`${theme === "light"? "light-background-p":"dark-background-p"}`}>
                  I’m Miro Ivan D. Sarte, 23 years old, from Rosario, Cavite. I’m a recent graduate from STI College Rosario with a Bachelor of Science in Computer Engineering. I have a passion for creating websites and mobile applications, and I’m enthusiastic about learning new technologies that emerge today. As a child, I was fascinated by popular websites like Facebook and YouTube. I was curious about how they were developed, which inspired my dream of becoming a software developer someday.
                  My journey in programming began when I was a first-year student. The first programming language I learned was Java, which made learning other programming languages easier for me since the syntax is mostly similar. During my third year, I developed my first Android application, a “Student Management System.” I was thrilled to receive applause for that application, but unfortunately, not everything went as planned. Due to the pandemic, I had to pause my studies because of financial problems. Despite this setback, my determination to become a software developer remained strong. I found a job and was fortunate to be hired as a Lean Technician. Although my job was not related to programming, I learned new skills, such as drawing layouts in AutoCAD and SketchUp, familiarizing myself with KAIZEN and Lean Six Sigma, and improving my team leadership abilities. After working as a Lean Technician for 1.5 years, I am still determined to pursue my dream, which is why I have decided to resign and continue my studies.
                  </p>
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
                      </ul>
                  </div>
            </div>
        </section>
    );
}
export default About