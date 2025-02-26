import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"

function ProjectsPage() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/projects')
            .then((response) => response.json())
            .then((allProjects) => setProjects(allProjects))
            .catch(console.log)
    }, [])

    function onAddProject(newProject) {
        setProjects((currentProjects) => [...currentProjects, newProject])
    }

    const context = {
        projects,
        onAddProject
        // projects: projects,
        // onAddProject: onAddProject
    }

    return (
        <Outlet context={context} />
    )
}

export default ProjectsPage