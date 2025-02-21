import { useState } from "react"

import Header from "./Header"
import ProjectForm from "./ProjectForm";
import ProjectContainer from "./ProjectContainer";

import projects from "../projects"

function App() {
  const [ darkMode, setDarkMode ] = useState(true)

  function onDarkModeToggle() {
    setDarkMode(!darkMode)
  }

  const className = darkMode ? "App" : "App light"

  return ( 
    <div className={ className }>
      <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle} />
      <ProjectForm />
      <ProjectContainer projects={projects} />
    </div>
  );
}

export default App;