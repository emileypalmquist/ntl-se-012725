function ProjectCard({ project }) {
    const { about, image, link, name, phase } = project
    return (
        <li className="card">
            <figure className="image">
                <img src={image} alt={name} />
                <button className="claps">
                    👏 0
                </button>
            </figure>
            <section className="details">
                <h4>{name}</h4>
                <p>{about}</p>
                {link ? <a href={link}>Link</a> : null}
            </section>
            <footer className="extra">
                <span className="badge blue">Phase {phase}</span>
            </footer>
        </li>
    )
}

export default ProjectCard;