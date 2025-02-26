import { useState } from "react"

import Header from "./Header"
import ProjectsPage from "./ProjectsPage"

function App() {
  const [ darkMode, setDarkMode ] = useState(true)

  function onDarkModeToggle() {
    setDarkMode(!darkMode)
  }

  const className = darkMode ? "App" : "App light"

  return ( 
    <div className={ className }>
      <Header darkMode={darkMode} onDarkModeToggle={onDarkModeToggle} />
      <ProjectsPage />
    </div>
  );
}

export default App;