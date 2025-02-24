import { useState, useEffect } from "react"

import ProjectForm from "./ProjectForm"
import ProjectContainer from "./ProjectContainer"

function ProjectsPage() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        // fetch projects only when page first loads (After component mounts)
        fetch('http://localhost:3001/projects')
            .then((response) => response.json())
            .then((allProjects) => setProjects(allProjects))
    }, [])

    function onAddProject(newProject) {
        setProjects((currentProjects) => [...currentProjects, newProject])
    }

    function onUpdateAllProjects(newProjects) {
        setProjects(newProjects)
    }

    return (
        <>
            <ProjectForm onAddProject={onAddProject} />
            <ProjectContainer 
                projects={projects} 
                onUpdateAllProjects={onUpdateAllProjects}
            />
        </>
    )
}

export default ProjectsPage