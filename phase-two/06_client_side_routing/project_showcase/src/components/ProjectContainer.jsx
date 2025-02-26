import { useState } from "react"
import { useOutletContext } from "react-router-dom"

import ProjectFilters from "./ProjectFilters"
import ProjectCard from "./ProjectCard"

function ProjectContainer() {
    const [ phaseFilter, setPhaseFilter ] = useState('all')
    const { projects } = useOutletContext()

    function onPhaseFilterChange(phase) {
        setPhaseFilter(phase)
    }

    const filteredProjects = phaseFilter === 'all' ? (
        projects 
    ) : (
        projects.filter((project) => project.phase === phaseFilter)
    )
    
    const projectCards = filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
    ))
    
    return (
        <section>
            <h2>Projects</h2>

            <ProjectFilters onPhaseFilterChange={onPhaseFilterChange} />

            <ul className="cards">
                { projectCards }
            </ul>
        </section>
    )
}

export default ProjectContainer