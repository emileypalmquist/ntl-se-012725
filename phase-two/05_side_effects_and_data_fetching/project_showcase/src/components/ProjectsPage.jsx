import { useState } from "react"

import ProjectForm from "./ProjectForm"
import ProjectContainer from "./ProjectContainer"

import initialProjects from "../projects"

function ProjectsPage() {
    const [projects, setProjects] = useState(initialProjects)

    function onAddProject(newProject) {
        console.log('need to update state', newProject)
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