import { useState } from "react";

function ProjectCard({ project }) {
    const [ claps, setClaps ] = useState(0)

    const { about, image, link, name, phase } = project

    function handleClap() {
        setClaps( claps + 1 )
    }

    return (
        <li className="card">
            <figure className="image">
                <img src={image} alt={name} />
                <button className="claps" onClick={handleClap}>
                    👏 { claps }
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