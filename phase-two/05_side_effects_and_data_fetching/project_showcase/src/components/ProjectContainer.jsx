import { useState, useEffect } from "react"

import ProjectFilters from "./ProjectFilters"
import ProjectCard from "./ProjectCard"

function ProjectContainer({ projects, onUpdateAllProjects }) {
    const [ phaseFilter, setPhaseFilter ] = useState('all')

    function onPhaseFilterChange(phase) {
        setPhaseFilter(phase)
    }
    
    // useffect without the dependency array - calls the callback function after render and every subsequent rerender
    // useEffect with an empty dependency array - calls the callback function only after first render
    // useEffect with a value(s) in the dependency array - calls the callback function after first render and whenever the value(s) in the dependency array change
    // useEffect(() => {
    //      make request to get projects on first render and subsequent renders if phaseFilter changes
    //     if (phaseFilter !== 'all') {
    //         fetch(`http://localhost:3001/projects?phase=${phaseFilter}`)
    //             .then((response) => response.json())
    //             .then((data) => onUpdateAllProjects(data))
    //     } else {
    //         fetch('http://localhost:3001/projects?_page=1&_per_page=3')
    //             .then((response) => response.json())
    //             .then((responseData) => onUpdateAllProjects(responseData.data))
    //     }
    // }, [phaseFilter])

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