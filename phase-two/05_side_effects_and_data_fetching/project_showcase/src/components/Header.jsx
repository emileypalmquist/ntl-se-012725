function Header({ darkMode, onDarkModeToggle }) {
    const buttonText = darkMode ? "Light Mode" : "Dark Mode"

    function handleToggleDarkModeClick() {
        onDarkModeToggle()
    }

    return (
        <header>
            <h1>
                <span className="logo">{"//"}</span>
                Project Showcase
            </h1>
            <button onClick={handleToggleDarkModeClick}>{ buttonText }</button>
        </header>
    )
}

export default Header;