import { useState, useEffect } from "react";
import { IoMenuSharp, IoClose, IoHomeOutline, IoPersonOutline, IoCode, IoMailOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
function Navbar(props) {
    const { setTheme, theme } = props;
    const [burgerStatus, setBurgerStatus] = useState("hide-burger-menu");

    const handleToggle = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    }

    const handleBurgerStatus = (event) => {
        setBurgerStatus(prev => prev === "hide-burger-menu" ? "show-burger-menu" : "hide-burger-menu");
        handleLink(event);
    }

    const handleLink = (event) => {
        const home = document.getElementById("heropage-section");
        const about = document.getElementById("about-section");
        const project = document.getElementById("projects-section");
        const contact = document.getElementById("contact-section");
        const link = document.querySelectorAll('.nav-ul li');
        const liItem = event.target.closest("li");
        const selectedNavItem = event.target.textContent;
        if (liItem) {
            link.forEach((item) => {
                item.classList.remove("activeLink");
            });
            liItem.classList.add("activeLink");
        } else {
            console.error("No li element found for the event target", event.target);
        }
        switch (selectedNavItem) {
            case 'Home':
                home.scrollIntoView();
                break;
            case 'About':
                about.scrollIntoView();
                break;
            case 'Projects':
                project.scrollIntoView();
                break;
            case 'Contact':
                contact.scrollIntoView();
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
    }, [theme]);

    const location = useLocation();
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <nav className="nav-list">
            <span className="burger-menu" onClick={handleBurgerStatus}><IoMenuSharp /></span>
            <h1>MIRO SARTE</h1>
            <ul className={`${burgerStatus} nav-ul`}>
                <IoClose className="close" onClick={handleBurgerStatus} />

                <li onClick={handleBurgerStatus} className="activeLink nav-item">
                    <span className="nav-icons"><IoHomeOutline /></span>
                    <span className="nav-link">Home</span>
                </li>
                <li onClick={handleBurgerStatus}>
                    <span className="nav-icons"><IoPersonOutline /></span>
                    <span className="nav-link">About</span>
                </li>
                <li onClick={handleBurgerStatus}>
                    <span className="nav-icons"><IoCode /></span>
                    <span className="nav-link">Projects</span>
                </li>
                <li onClick={handleBurgerStatus}>
                    <span className="nav-icons"><IoMailOutline /></span>
                    <span className="nav-link">Contact</span>
                </li>
            </ul>

            <div className="theme-toggle" onClick={handleToggle}>
                <div className={`theme-icon ${theme === "light" ? "theme-toggled-light" : "theme-toggled-dark"}`}></div>
            </div>
        </nav>
    );
}

export default Navbar;
