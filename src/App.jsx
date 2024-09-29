import { useState, useContext, createContext, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import  HomePage from './HomePage.jsx'
import ProjectPage from "./ProjectPage.jsx";


export const IndexContext = createContext()

function App() {
  const observer = new IntersectionObserver(entries => {
    console.log(entries)
  })
 
const[projectCarouselIndex, setProjectCarouselIndex]= useState(0);
  return (
    <Router>
    <div className="root-container">
  
        <IndexContext.Provider value = {{projectCarouselIndex, setProjectCarouselIndex}}>
        <Routes>
              <Route  path="/" element={<HomePage/>}/>
              <Route  path="/projectpage" element={<ProjectPage/>}/>
        </Routes>
       </IndexContext.Provider>

    <footer>©2024 Miro Ivan D. Sarte</footer>
    </div>
    </Router>
  )
}

export default App
