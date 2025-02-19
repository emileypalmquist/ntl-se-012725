import { useState } from "react"

function Header() {
    const [ darkMode, setDarkMode ] = useState(true)
   
    const buttonText = darkMode ? "Light Mode" : "Dark Mode"

    function handleToggleDarkModeClick() {
        setDarkMode(!darkMode)
    }

    return (
        <header>
            <h1>
                <span className="logo">{"//"}</span>
                Project Showcase
            </h1>
            <button onClick={handleToggleDarkModeClick} >{ buttonText }</button>
        </header>
    )
}

export default Header;