function ProjectFilters({ onPhaseFilterChange }) {
    return (
        <>
            <div className="filter">
                <button onClick={() => onPhaseFilterChange('all')}>All</button>
                <button onClick={() => onPhaseFilterChange(5)}>Phase 5</button>
                <button onClick={() => onPhaseFilterChange(4)}>Phase 4</button>
                <button onClick={() => onPhaseFilterChange(3)}>Phase 3</button>
                <button onClick={() => onPhaseFilterChange(2)}>Phase 2</button>
                <button onClick={() => onPhaseFilterChange(1)}>Phase 1</button>
            </div>

            <input type="text" placeholder="Search..."/>
        </>
    )
}

export default ProjectFilters