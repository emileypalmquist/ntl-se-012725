import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function ProjectDetails() {
    const [ project, setProject ] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3001/projects/${id}`)
            .then((resp) => resp.json())
            .then((data) => setProject(data))
    }, [])

    if (!project) return <h2>No Project Found</h2>

    return (
        <div>
            Project Details
        </div>
    )
}

export default ProjectDetails