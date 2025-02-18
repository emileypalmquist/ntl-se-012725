function ProjectCard({ project }) {
    const { name, about, image } = project
    return (
        <article className='card'>
            {/* <img src={ image } alt={ name }/> */}
            <h2>{ name }</h2>
            <p>{ about }</p>
        </article>
    )
}

export default ProjectCard;