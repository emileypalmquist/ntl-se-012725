import Header from "./Header"
import ProjectForm from "./ProjectForm";
import ProjectContainer from "./ProjectContainer";

import projects from "../projects"

function App() {
  return ( 
    <div className="App">
      <Header />
      <ProjectForm />
      <ProjectContainer projects={projects} />
    </div>
  );
}

export default App;