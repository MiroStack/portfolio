import './HomePage.css'
import ProfileImg from './assets/me.profile.jpg'
import {useState, useEffect, useRef} from 'react';

function HomePage() {
 
    const downloadMyResume = ()=>{
        const linkElement = document.createElement('a')
        linkElement.href = "https://raw.githubusercontent.com/MiroSarte/resume/main/resume-mirosarte-2024.pdf"
        linkElement.download = "resume-mirosarte-2024.pdf"
        linkElement.click()
    }

    const[textP1, setTextP1] = useState("");
    const[myName, setMyName] = useState("");
    let textIndefRef = useRef(0);
    let nameIndexRef = useRef(0);
    const handleText = () =>{
       const p1 = "  Hi my name is"
       const pToArr = p1.split("");
       const spanMyName = "  Miro Ivan D. Sarte";
       const myNameToArr = spanMyName.split("");
       if(textIndefRef.current < pToArr.length-1){
         setTextP1(prev => prev.concat(pToArr[textIndefRef.current]));
         textIndefRef.current++
       }
       else if(textIndefRef.current >=  pToArr.length-1 && nameIndexRef.current < myNameToArr.length-1){
            setMyName(n => n.concat(myNameToArr[nameIndexRef.current]));
            nameIndexRef.current++
            console.log(spanMyName)
       }
    }
    useEffect(()=>{
       setTimeout(()=>{handleText()}, 50);
       console.log(myName);
    },[textP1, myName])

  
    return(
        <section className="homepage-section" id="homepage-section">
              <div className='hero-container'>
                         <img src={ProfileImg} alt='mirosarte'/>
                         <span className='border top'></span>
                         <span className='border left'></span>
                         <span className='border bottom'></span>
                         <span className='border right'></span>
                         
                 <p className='paragraph1'>
                    {textP1}
                  <span>{myName}</span>
                 </p>
                 <p className='paragraph2'>
                   I’m a <span>Software Developer</span>
                 </p>
                 <p className='paragraph3'>
                   I create software applications with passion.
                 </p>
                 <button className='download-cv-btn' onClick={downloadMyResume}>
                    Download CV
                 </button>
          
              </div>
        </section>
    )
    
}
export default HomePage;