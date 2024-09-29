import HeroPage from "./HomePageComponents/HeroPage.jsx";
import About from "./HomePageComponents/About.jsx"
import Projects from "./HomePageComponents/Projects.jsx";
import MyGraduationPicture from './assets/graduated-pic.jpg';
import MyPicture from './assets/myphoto.jpeg';
import ProjectMachineMilktea from './assets/project-images/milkteaMachine/thesis_image4.png';
import ProjectAklatTahanan from './assets/project-images/aklatTahanan/aklat-tahanan.png';
import ProjectTaskNote from './assets/project-images/taskNote/organizer_task_manage_application.png';
import ProjectMorseCode from './assets/project-images/morsecodeTranslator/morse-code-app.png';
import ProjectCalculator from './assets/project-images/calculator/calculator.png';
import Navbar from "./HomePageComponents/Navbar.jsx";
import Contact from "./HomePageComponents/Contact.jsx";
import { useState } from "react";

function HomePage(){
    const [theme, setTheme] = useState("light");

return(
    <div className={`section-wrapper`}>
            <Navbar setTheme={setTheme}
               theme={theme}/>
            <HeroPage MyGraduationPicture={MyGraduationPicture}/>
            <About theme={theme}
                   MyPicture={MyPicture}/>
            <Projects ProjectMachineMilktea={ProjectMachineMilktea}
                      ProjectAklatTahanan={ProjectAklatTahanan}
                      ProjectTaskNote={ProjectTaskNote}
                      ProjectMorseCode={ProjectMorseCode}
                      ProjectCalculator={ProjectCalculator}/>
           <Contact/>
   </div>
)
}
export default HomePage;