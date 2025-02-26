import { NavLink } from "react-router-dom";

function Header({ darkMode, onDarkModeToggle }) {
    const buttonText = darkMode ? "Light Mode" : "Dark Mode"

    function handleToggleDarkModeClick() {
        onDarkModeToggle()
    }

    return (
        <header>
            <NavLink to='/'>
                <h1>
                    <span className="logo">{"//"}</span>
                    Project Showcase
                </h1>
            </NavLink>
            <NavLink to='/projects'>
                All Projects
            </NavLink>
            <NavLink to='/projects/new'>
                Add Project
            </NavLink>
            <button onClick={handleToggleDarkModeClick}>{ buttonText }</button>
        </header>
    )
}

export default Header;