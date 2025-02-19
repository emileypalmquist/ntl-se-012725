import { useState } from "react"

import ProjectCard from "./ProjectCard"

function ProjectContainer({ projects }) {
    const [ phaseFilter, setPhaseFilter ] = useState('all')

    const filteredProjects = phaseFilter === 'all' ? (
        projects 
    ) : (
        projects.filter((project) => project.phase === phaseFilter)
    )
    
    const projectCards = filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)

    return (
        <section>
            <h2>Projects</h2>

            <div className="filter">
                <button onClick={() => setPhaseFilter('all')}>All</button>
                <button onClick={() => setPhaseFilter(5)}>Phase 5</button>
                <button onClick={() => setPhaseFilter(4)}>Phase 4</button>
                <button onClick={() => setPhaseFilter(3)}>Phase 3</button>
                <button onClick={() => setPhaseFilter(2)}>Phase 2</button>
                <button onClick={() => setPhaseFilter(1)}>Phase 1</button>
            </div>

            <input type="text" placeholder="Search..."/>

            <ul className="cards">
                { projectCards }
            </ul>
        </section>
    )
}

export default ProjectContainer