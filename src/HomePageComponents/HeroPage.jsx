import './HeroPage.css'
// React
import { DiReact } from 'react-icons/di';
import { DiNodejs } from 'react-icons/di';
import { IoArrowDownOutline } from "react-icons/io5";
import { easeIn, motion } from "framer-motion"
import { DiAndroid } from 'react-icons/di';
import { TypeAnimation } from 'react-type-animation';
import { DiPhp } from 'react-icons/di';
function HeroPage(props) {
    const MyProfessionalPicture = props.MyProfessionalPicture;
    const MyGraduationPicture = props.MyGraduationPicture;
 
    const downloadMyResume = ()=>{
        const linkElement = document.createElement('a')
        linkElement.href = "https://raw.githubusercontent.com/MiroSarte/resume/main/resume-miro.pdf"
        linkElement.download = "resume-miro.pdf"
        linkElement.click()
    }

    return(
        <section className="heropage-section" id="heropage-section">
              <div className='hero-container' id='hero-container'>
                         <div
                         className='intro-container'>
                              <motion.p
                              initial={{
                                 marginBottom:"5em",
                                 opacity:.5,

                              }}
                              animate={{
                                 marginBottom:"0",
                                 opacity:1,
                              }}
                              transition={{
                                 duration: 1,
                                 ease:"easeIn",
                              }}

                              className='paragraph1'>
                                       Hello, my name is Miro Ivan D. Sarte
                                    </motion.p>
                              <motion.p    
                                 initial={{
                                 x:-200,
                                 opacity:.5,

                              }}
                              animate={{
                                 x:0,
                                 opacity:1,
                              }}
                              transition={{
                                 duration: 1.5,
                                 ease:"easeIn",
                              }}
                               className='paragraph2'>
                                 I'm a
                                    <span>
                                       <TypeAnimation
                                             sequence={[' Full Stack Developer', ' Software Developer', 500, ' Programmer', 500, ' Computer Engineer', 500]}
                                             repeat={Infinity}/>
                                       </span>
                                    </motion.p>
                             
                              <motion.p
                               initial={{
                                 x:-200,
                                 opacity:.5,

                                    }}
                                    animate={{
                                       x:0,
                                       opacity:1,
                                    }}
                                    transition={{
                                       duration: 1.5,
                                       ease:"easeIn",
                                    }}
                                    className='paragraph3'>
                                 Let's create innovative solutions for your business 
                              </motion.p>
                              <motion.p 
                                  initial={{
                                    opacity:0,
   
                                 }}
                                 animate={{
                                    opacity:1,
                                 }}
                                 transition={{
                                    duration: 3,
                                    ease:"easeIn",
                                 }}
                                 className='paragraph4'>I specialize in developing robust, responsive, and user-friendly software applications, driven by a passion for helping businesses achieve their goals and succeed.</motion.p>
                              <p className='paragraph5'>
                                 Hire me 
                                 <span><IoArrowDownOutline /></span>
                              </p>
                              <button className='download-cv-btn' onClick={downloadMyResume}>
                                 Download CV
                              </button>
                        </div>
                        <motion.div
                           initial={{opacity: .5,
                                     scale:0.5,
                           }}
                           animate={{opacity: 1,
                              scale:1,
                              }}
                           transition={{
                              ease:easeIn,
                              duration:1,
                           }}
                           className='image-container'>
                                    <div className='blob-container1'>
                                       <div className='blob'> 
                                         

                                          </div>
                                     
                                    </div>
                                    <div className='blob-container2'>
                                       <div className='blob'> 
                                         
                                       </div>
                                     
                                    </div>
                                    <div className='blob-container3'>
                                       <div className='blob'>
                                          <DiNodejs
                                          style={{
                                             position:"absolute",
                                             left:"50%",
                                             top:"0%",  
                                          }}
                                          />
                                           <DiPhp style={{
                                              position:"absolute",
                                              right:"20%",
                                              bottom:"0%",  
                                          }}/>
                                         
                                       </div>  
                                    </div>

                                    <div className='blob-container4'>
                                       <div className='blob'> 
                                          <DiReact style={{
                                                position:"absolute",
                                                left:"0",
                                                top:"0",             
                                             }}/>
                                           <DiAndroid style={{
                                           position:"absolute",
                                           right:"10%",
                                           bottom:"10%", 
                                         }}/>
                                       </div>
                                     
                                    </div>

                           <div className='image-wrapper'>
                                 <img src={MyGraduationPicture} alt='mirosarte'/>
                           </div>
                        </motion.div>
          
                       
          
              </div>
        </section>
    )
    
}
export default HeroPage;