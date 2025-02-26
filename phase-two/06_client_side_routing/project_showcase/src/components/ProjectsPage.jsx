import { useState, useEffect } from "react"

import ProjectForm from "./ProjectForm"
import ProjectContainer from "./ProjectContainer"

function ProjectsPage() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/projects')
            .then((response) => response.json())
            .then((allProjects) => setProjects(allProjects))
    }, [])

    function onAddProject(newProject) {
        setProjects((currentProjects) => [...currentProjects, newProject])
    }

    return (
        <>
            <ProjectForm onAddProject={onAddProject} />
            <ProjectContainer projects={projects} />
        </>
    )
}

export default ProjectsPage