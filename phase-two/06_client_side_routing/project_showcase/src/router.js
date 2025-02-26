import { createBrowserRouter } from "react-router-dom"

import App from "./components/App";
import About from "./components/About"
import ProjectsPage from "./components/ProjectsPage"
import ProjectContainer from "./components/ProjectContainer";
import ProjectForm from "./components/ProjectForm"
import ProjectDetails from "./components/ProjectDetails";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {index: true, element: <About />},
        {
          path: 'projects',
          element: <ProjectsPage />,
          children: [
            {index: true, element: <ProjectContainer />},
            {
              path: 'new',
              element: <ProjectForm />
            },
            {
              path: ':id',
              element: <ProjectDetails />
            }
          ]
        }
      ]
    }
])