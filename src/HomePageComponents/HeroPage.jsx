import './HeroPage.css'
// React
import { DiAngularSimple, DiNodejs } from 'react-icons/di';
import { FaReact } from "react-icons/fa";
import { IoArrowDownOutline } from "react-icons/io5";
import { easeIn, motion } from "framer-motion"
import { DiAndroid } from 'react-icons/di';
import { TypeAnimation } from 'react-type-animation';
import { FaJava } from "react-icons/fa";
import { DiPhp } from 'react-icons/di';
import MyHeroPicture from '../assets/hero-my-image.jpg'
import { SiTypescript } from "react-icons/si";
function HeroPage(props) {
   const MyProfessionalPicture = props.MyProfessionalPicture;
   const MyGraduationPicture = props.MyGraduationPicture;

   const downloadMyResume = () => {
      const linkElement = document.createElement('a')
      linkElement.href = "https://raw.githubusercontent.com/MiroSarte/resume/main/resume-miro.pdf"
      linkElement.download = "resume-miro.pdf"
      linkElement.click()
   }

   return (
      <section className="heropage-section" id="heropage-section">
         <div className='hero-container' id='hero-container'>
            <div
               className='intro-container'>
               <motion.p
                  initial={{
                     marginBottom: "5em",
                     opacity: .5,

                  }}
                  animate={{
                     marginBottom: "0",
                     opacity: 1,
                  }}
                  transition={{
                     duration: 1,
                     ease: "easeIn",
                  }}

                  className='paragraph1'>
                  Hello, my name is Miro Ivan D. Sarte
               </motion.p>
               <motion.p
                  initial={{
                     x: -200,
                     opacity: .5,

                  }}
                  animate={{
                     x: 0,
                     opacity: 1,
                  }}
                  transition={{
                     duration: 1.5,
                     ease: "easeIn",
                  }}
                  className='paragraph2'>
                  I'm a
                  <span>
                     <TypeAnimation
                        sequence={[' Full Stack Developer', ' Software Developer', 500, ' Programmer', 500, ' Computer Engineer', 500]}
                        repeat={Infinity} />
                  </span>
               </motion.p>

               <motion.p
                  initial={{
                     x: -200,
                     opacity: .5,

                  }}
                  animate={{
                     x: 0,
                     opacity: 1,
                  }}
                  transition={{
                     duration: 1.5,
                     ease: "easeIn",
                  }}
                  className='paragraph3'>
                  Let's create innovative solutions for your business
               </motion.p>
               <motion.p
                  initial={{
                     opacity: 0,

                  }}
                  animate={{
                     opacity: 1,
                  }}
                  transition={{
                     duration: 3,
                     ease: "easeIn",
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
               initial={{
                  opacity: .5,
                  scale: 0.5,
               }}
               animate={{
                  opacity: 1,
                  scale: 1,
               }}
               transition={{
                  ease: easeIn,
                  duration: 1,
               }}
               className='image-container'>
               <motion.div className='image-wrapper'
                  animate={{ y: [0, -18, 0] }}         // up then back
                  transition={{
                     duration: 1,
                     ease: "easeInOut",
                     repeat: Infinity,
                     repeatType: "loop",               // loop or mirror — same here
                     repeatDelay: 0.3,
                  }}
               >
                  <img src={MyHeroPicture} alt='mirosarte' />

               </motion.div>
               <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                     duration: 5,
                     ease: "easeInOut",
                     repeat: Infinity,
                     repeatType: "loop",               // loop or mirror — same here
                     repeatDelay: 1.3,
                  }}
                  className='react icon' ><FaReact /></motion.div>
               <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                     duration: 2,
                     ease: "easeInOut",
                     repeat: Infinity,
                     repeatType: "loop",               // loop or mirror — same here
                     repeatDelay: .5,
                  }}
                  className='android icon' ><DiAndroid /></motion.div>
               <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                     duration: 3,
                     ease: "easeInOut",
                     repeat: Infinity,
                     repeatType: "loop",               // loop or mirror — same here
                     repeatDelay: .3,
                  }}
                  className='nodejs icon'><DiNodejs /></motion.div>
               <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                     duration: 5,
                     ease: "easeInOut",
                     repeat: Infinity,
                     repeatType: "loop",               // loop or mirror — same here
                     repeatDelay: .5,
                  }}
                  className='java icon'>   <FaJava /></motion.div>
               <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                     duration: 4,
                     ease: "easeInOut",
                     repeat: Infinity,
                     repeatType: "loop",               // loop or mirror — same here
                     repeatDelay: 1,
                  }}
                  className='typescript icon' ><SiTypescript /></motion.div>

               <div className='current-work-container'>
                  <div></div>
                  <p>Currently work as Jr. Java Developer</p>
               </div>
            </motion.div>



         </div>
      </section>
   )

}
export default HeroPage;