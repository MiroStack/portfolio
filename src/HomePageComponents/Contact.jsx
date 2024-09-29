import './Contact.css'
import { IoLogoGoogle } from "react-icons/io5";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react'; 
function Contact(){
    const form = useRef();
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleName =(e)=>{
      setName(e.target.value);
    }
    const handleSubject =(e)=>{
        setSubject(e.target.value);
      }
      const handleEmail =(e)=>{
        setEmail(e.target.value);
      }
      const handleMessage =(e)=>{
        setMessage(e.target.value);
      }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fkfimcd', 'template_6idqlcq', form.current, {
        publicKey: '3YZJSgR_7IPNeVeHG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent succesfully.")
          setName('');
          setSubject('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 return(
    <section className="contact-section" id="contact-section">
        <div className="contact-wrapper">
        <div className='contact-social-media'>
                <h2>
                  Lets talk
               </h2>
               <p>
                  Tell me about your project, and let's build it together.
               </p>
               <hr />
               <p className='contact-media'>
                <span>
                    <IoLogoGoogle />
                    <span>
                        <a href="mailto:miroivansarte@gmail.com">miroivansarte@gmail.com</a>
                    </span>
                </span>
            </p>
               <p className='contact-media'><span><IoPhonePortraitSharp /><span>+639655996049</span></span></p>
               <h2>
                  I am based in
               </h2>
               <p>
                  <IoLocationOutline /> 833 Tramo St, Tejeros Convention Rosario Cavite, Philippines
               </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className='contact-form'>
                <label htmlFor="user_name">Name</label>
                <input type="text" id="user_name" name='user_name' placeholder="Name" value={name} onChange={handleName}/>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name='subject' placeholder="Subject"  value={subject} onChange={handleSubject}/>
                <label htmlFor="user_email">Email</label>
                <input type="email" id="user_email" name='user_email'  placeholder="Email"  value={email} onChange={handleEmail} />
                <textarea name="message" id="message" placeholder='Message'  value={message} onChange={handleMessage}></textarea>
                <input type="submit" placeholder='Submit'/>
            </form>
          
        </div>
          
    </section>
 )
}
export default Contact;