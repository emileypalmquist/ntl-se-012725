function ProjectForm() {
    return (
        <form className='form'>
            <h3>Add New Project</h3>

            <label htmlFor='name'>Name:</label>
            <input id='name' name='name' placeholder='Project Name'/>
            
            <label htmlFor='about'>About:</label>
            <textarea id='about' name='about' placeholder='About Project'/>
            
            <label htmlFor="phase">Phase</label>
            <select name="phase" id="phase">
                <option>Select One</option>
                <option value="1">Phase 1</option>
                <option value="2">Phase 2</option>
                <option value="3">Phase 3</option>
                <option value="4">Phase 4</option>
                <option value="5">Phase 5</option>
            </select>

            <label htmlFor="link">Project Homepage</label>
            <input type="text" id="link" name="link" />

            <label htmlFor="image">Screenshot</label>
            <input type="text" id="image" name="image" />

            <button type='submit'>Add Project</button>
        </form>
    )
}

export default ProjectForm;