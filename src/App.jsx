import { useEffect, useState } from "react"
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoCode } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import HomePage from "./HomePage.jsx";
import About from "./About.jsx"
function App() {
const [theme, setTheme] = useState("light");
const[burgerStatus, setBurgerStatus] = useState("hide-burger-menu");
useEffect(()=>{
 document.body.classList.remove("light", "dark");
 document.body.classList.add(theme);
}, [theme])

const handleToggle = ()=>{
  setTheme(prev => prev === "light"? "dark":"light")
}
const handleBurgerStatus =()=>{
  setBurgerStatus(prev => prev === "hide-burger-menu"? "show-burger-menu":"hide-burger-menu");
}
  return (
    <div className="root-container">
      <nav className="nav-list">
        <span className="burger-menu" onClick={handleBurgerStatus}><IoMenuSharp /></span>
        <h1>MIRO SARTE</h1>
        <ul className={`${burgerStatus}`}>
           <IoClose className="close" onClick={handleBurgerStatus}/>
            <li onClick={handleBurgerStatus}><span className="nav-icons"><IoHomeOutline /></span>
                <a className="nav-link" 
                  href="#homepage-section">
                    Home
                </a>
            </li>
            <li onClick={handleBurgerStatus}><span className="nav-icons"><IoPersonOutline /></span>
                <a className="nav-link" href="#about-section">About</a>
            </li>
            <li onClick={handleBurgerStatus}><span className="nav-icons"><IoCode /></span>
                <a className="nav-link">Projects</a>
            </li>
            <li onClick={handleBurgerStatus}><span className="nav-icons"><IoMailOutline /></span>
                <a className="nav-link">Contact</a>
            </li>
        </ul>
      
        <div className="theme-toggle" onClick={handleToggle}>
          <div className={`theme-icon ${ theme === "light"? "theme-toggled-light":"theme-toggled-dark"}`}>     
          </div>
        </div>
            </nav>
            <HomePage/>
            <About theme={theme}/>
    <footer>©2024 Miro Ivan D. Sarte</footer>
    </div>
  )
}

export default App
