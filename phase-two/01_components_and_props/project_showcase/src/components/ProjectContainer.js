// component name in Pascal casing - first letter of each word is capitalized
// structure of our props => {projects: [{}, {}]}
// function ProjectContainer(props) {
    // destructuring props object
    // const { projects } = props

import ProjectCard from "./ProjectCard"

function ProjectContainer({ projects }) {
    return (
        <main>
            {
                projects.map((project) => <ProjectCard key={project.id} project={project} />)
            }
        </main>
    )
}

export default ProjectContainer