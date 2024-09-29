import './Projects.css'
import { useRef, useState, useEffect, useContext } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import {Link} from 'react-router-dom';
import { IndexContext } from '../App';
import { IoEye } from "react-icons/io5";

function Projects(props){
   const ProjectMachineMilktea = props.ProjectMachineMilktea;
   const ProjectAklatTahanan = props.ProjectAklatTahanan;
   const ProjectTaskNote = props.ProjectTaskNote;
   const ProjectMorseCode = props.ProjectMorseCode;
   const ProjectCalculator = props.ProjectCalculator;
   const [projectCarouselId, setProjectCarouselId] = useState([1, 2, 3, 4, 5]);
  
   const {projectCarouselIndex, setProjectCarouselIndex} = useContext(IndexContext);
   let prevRef = useRef(0);

   const handleSelectedItem = (event) => {
      const projectList = document.querySelectorAll(".project-list li div");
      const projectItem = event.target.closest("div");
      const selectedIndex = Array.from(projectList).indexOf(projectItem);
      const projectPageLink = document.createElement('a');
      prevRef.current = projectCarouselIndex;
      setProjectCarouselIndex(selectedIndex);

      projectPageLink.href = "#project-page-section";
      projectPageLink.click()

   };
   const handleSelectedDot = (event) => {
      const dotList = document.querySelectorAll(".dot-list li");
      const dotItem = event.target.closest("li");
      const selectedIndex = Array.from(dotList).indexOf(dotItem);
      setProjectCarouselIndex(selectedIndex);
     

   };

   const handlePevButton = ()=>{
      const projectList = document.getElementsByClassName("project-list")[0];
      setProjectCarouselIndex(prev => prev <= 0 ? 4 : prev - 1);
     
   }
   const handleNextButton = ()=>{
      const projectList = document.getElementsByClassName("project-list")[0];
      setProjectCarouselIndex(prev => prev >= 4 ? 0 : prev + 1);
     
   }

   useEffect(()=>{
      const projectList = document.getElementsByClassName("project-list")[0];
      const div = document.querySelectorAll(".project-list li div");
      const dotList = document.querySelectorAll(".dot-list li");
      div.forEach((projectItem)=>{
         projectItem.classList.remove("active-project-item");
      })
      div.forEach((projectItem, index)=>{
         if(projectCarouselIndex === index){
            projectItem.classList.add("active-project-item");
         }
      })

      dotList.forEach((dotItem, index)=>{
         dotItem.classList.remove("active-dot");
      })
      dotList.forEach((dotItem, index)=>{
         if(projectCarouselIndex === index){
            dotItem.classList.add("active-dot");
         }
      })
      console.log(projectCarouselIndex)
      switch (projectCarouselIndex) {
       
         case 4:
            setProjectCarouselId([2, 3, 4, 5, 1])
            break;
        case 3:
            setProjectCarouselId([3, 4, 5, 1, 2])
            break;
        case 2:
            setProjectCarouselId([4, 5, 1, 2, 3])
            break;
        case 1:
            setProjectCarouselId([5, 1, 2, 3, 4])
            break;
        case 0:
            setProjectCarouselId([1, 2, 3, 4, 5])
            break;
       
      }
   }, [projectCarouselIndex])
   console.log((projectCarouselId))


  


 return(
    <section className="projects-section" id="projects-section">
      <div className='projects-container' id='projects-container'>
          <h2>
             Projects
          </h2>
      
        <div className='carousel'>
             <ul className='project-list'  >
                <li  onClick={handleSelectedItem}  id={`project${projectCarouselId[0]}`}>
                  <Link to="/projectpage" className='project-item'>
                        <div className='active-project-item image-container'>
                           <img src={ProjectMachineMilktea} alt="project" />
                        </div>
                        <p>
                           AUTOMATED MILKTEA MACHINE WITH KIOSK SYSTEM
                        </p>
                  </Link>
                </li>
              
                <li onClick={handleSelectedItem}  id={`project${projectCarouselId[1]}`}>
                  <Link  to="/" className='project-item' onClick={()=>alert("Sorry, this project is still in developing process. Please see my other projects. Thank you!")}>
                  <div className='image-container'>
                        <img src={ProjectAklatTahanan} alt="project" />
                     </div>
                     <p>
                        "AKLAT TAHANAN" LIBRARY MANAGEMENT SYSTEM
                     </p>
                  
                  </Link>
                </li>
                <li onClick={handleSelectedItem}  id={`project${projectCarouselId[2]}`}>
                <Link  to="/projectpage" className='project-item'>
                <div className='image-container'>
                     <img src={ProjectTaskNote} alt="project"/>
                  </div>
                  <p>
                    'Organizer' Task Management Application
                  </p>
                  </Link>
                </li>
                <li  onClick={handleSelectedItem} id={`project${projectCarouselId[3]}`}>
                <Link  to="https://mirosarte.github.io/morse-code-translator/" className='project-item'>
                <div className='image-container'>
                     <img src={ProjectMorseCode} alt="project" />
                  </div>
                  <p>
                    MORSE CODE APPLICATION
                  </p>
                  </Link>
                </li>
                <li  onClick={handleSelectedItem}  id={`project${projectCarouselId[4]}`} >
                  <Link  to="https://mirosarte.github.io/Calculator/" className='project-item'>
                     <div className='image-container'>
                        <img src={ProjectCalculator} alt="project" />
                     </div>
                     <p>
                        CALCULATOR APPLICATION
                     </p>
                  </Link>
                </li>
             </ul>
              <button className='carouselbtn prev' onClick={handlePevButton}>
              <IoIosArrowBack className='carousel-icon'/>
             </button>
             <button className=' carouselbtn next' onClick={handleNextButton}>
                <IoIosArrowForward className='carousel-icon' />
            </button>
        </div>
      
       <ul className='dot-list'>
         <li className='active-dot' onClick={handleSelectedDot}></li>
         <li  onClick={handleSelectedDot}></li>
         <li  onClick={handleSelectedDot}></li>
         <li  onClick={handleSelectedDot}></li>
         <li  onClick={handleSelectedDot}></li>
       </ul>

      </div>
        

    </section>
 )   
}
export default Projects;