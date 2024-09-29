import './ProjectPage.css'
import { IoArrowBackSharp } from "react-icons/io5";
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom'
import { IndexContext } from './App'
function ProjectPage(){
    const {projectCarouselIndex} = useContext(IndexContext);
    const projectTitle = [
        {title:"Automated Milktea Machine with Self Service Kiosk System",
         tags:["Automation", "Embedded System", "ESP32",  "Robotics", "Internet of Things", "Mobile Development", "Paypal Api", "Invoice Generator", "C++", "KOTLIN", "FIREBASE"],
         description:"Our capstone project for the Computer Engineering program aims to address the issue of slow service times at the Happy Sip Milk Tea and Coffee Cavite branch. Currently in the prototyping phase, our solution has already reduced the process time for making milk tea by 25% through automation. This improvement is expected to significantly enhance our client’s operational efficiency. Additionally, we have addressed the issue of long queues by developing a mobile app that allows customers to order and pay for their milk tea via PayPal. After payment, an order code is generated and provided to the customer. This code can then be entered into a kiosk application we developed, which processes the orders through our automated system.",
         ytVideo:"4hVgIOnySCk" 
        },
        {
            title:"'Aklat Tahanan' Library Management System",
            tags:["Mobile Development", "Kotlin", "QR Generator", "CRUD", "POS", "SQLITE"],
            description:"",
             ytVideo:"4hVgIOnySCk"
        },
        {
            title:"'Organizer' Task Management Application",
            tags:["WEB Development", "React", "Framer Motion", "Toastify", "Local Storage"],
            description:`
                        The project is a task management application designed to help users efficiently organize, track, and prioritize their tasks. It enables users to break down larger projects into smaller, manageable tasks, set deadlines, and monitor their progress. 
                        The application ensures that users stay on top of their responsibilities while optimizing productivity and time management.
                        My purpose in creating this application is to practice my skills and knowledge in React.js, especially in using hooks and components.
                        I also used libraries to make the UI interactive, such as Framer Motion and Toastify.
                        About the storage of tasks data, It is stored in localStorage of the browser users`,
            ytVideo:"CAO-8XE580w"
        },
        {
            title:"Morse Code Translator Application",
            tags:["WEB Development", "React", "Translator"],
            description:"",
            ytVideo:"4hVgIOnySCk"
        },
        {
            title:"Calculator Application",
            tags:["WEB Development", "HTML", "CSS", "JS"],
            description:"",
            ytVideo:"4hVgIOnySCk"
        }]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [ytPlayerSize, setYtPlayerSize] = useState({
        playerWidth:640,
        playerHeight:350
    });

    useEffect(()=>{
        const handleResize = ()=>{
            setWindowWidth(window.innerWidth);
            ytPlayerHandle();
        }
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    },[]);

    const ytPlayerHandle = ()=>{
        if(windowWidth < 450){
            setYtPlayerSize( {width: 350, height: 250})
                 
       }
       else if(windowWidth > 450 && windowWidth < 850){
            ytPlayerSize.width = 450;
            ytPlayerSize.height = 280; 
            setYtPlayerSize( {width: 450, height: 280})
       }
      
       else{
        setYtPlayerSize( {width: 650, height: 350})
       }
    }
    useEffect(()=>{
        ytPlayerHandle();
    },[windowWidth])
   
    

    let opts = {
        height: `${ytPlayerSize.height}`,
        width: `${ytPlayerSize.width}`,
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      
     function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      };

    return(
        <section className="project-page-section" id="project-page-section">
           <YouTube videoId={projectTitle[projectCarouselIndex].ytVideo} opts={opts} onReady={_onReady} className='yt-player'></YouTube>    
          
        
               <div className='project-info'>
                
                      <h3>
                        {projectTitle[projectCarouselIndex].title}
                      </h3>
                      <ul className='tag-list'>
                            <h4>Tags:</h4>
                            {
                                projectTitle[projectCarouselIndex].tags.map((item, index)=>
                                <li className='tag-item' key={index}>{item}</li>)
                            }

                     </ul>
                      <p>
                      {projectTitle[projectCarouselIndex].description}
                     </p>
                      <Link className='return-btn' to={"/"}>
                      <IoArrowBackSharp /> <span>Back</span>
                    </Link>
               </div>
        </section>
    )
}
export default ProjectPage