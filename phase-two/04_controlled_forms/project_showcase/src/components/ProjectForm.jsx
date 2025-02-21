import { useState } from "react"

const initialState = {
    name: '',
    about: '',
    phase: '',
    link: '',
    image: ''
}

function ProjectForm({ onAddProject }) {
    const [formData, setFormData] = useState(initialState)

    function handleOnChange(event) {
        const { name, value } = event.target
        setFormData((currentFormData) => ({...currentFormData, [name]: value}))
    }

    function handleSubmit(event) {
        event.preventDefault()
        // update projects state in ProjectsPage
        onAddProject(formData)

        // reset form state
        setFormData(initialState)
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h3>Add New Project</h3>

            <label htmlFor='name'>Name:</label>
            <input 
                id='name' 
                name='name' 
                placeholder='Project Name' 
                value={formData.name}
                onChange={handleOnChange}
            />
            
            <label htmlFor='about'>About:</label>
            <textarea 
                id='about' 
                name='about' 
                placeholder='About Project' 
                value={formData.about}
                onChange={handleOnChange}
            />
            
            <label htmlFor="phase">Phase</label>
            <select 
                name="phase" 
                id="phase" 
                value={formData.phase} 
                onChange={handleOnChange}
            >
                <option>Select One</option>
                <option value="1">Phase 1</option>
                <option value="2">Phase 2</option>
                <option value="3">Phase 3</option>
                <option value="4">Phase 4</option>
                <option value="5">Phase 5</option>
            </select>

            <label htmlFor="link">Project Homepage</label>
            <input 
                type="text" 
                id="link" 
                name="link" 
                value={formData.link}
                onChange={handleOnChange}
            />

            <label htmlFor="image">Screenshot</label>
            <input 
                type="text" 
                id="image" 
                name="image" 
                value={formData.image} 
                onChange={handleOnChange}
            />

            <button type='submit'>Add Project</button>
        </form>
    )
}

export default ProjectForm;