
import './App.css';
import {useState} from 'react';
import ViewProject from './components/ViewProject';
import { v4 as uuidv4 } from 'uuid'
import {BrowserRouter,Switch,Route} from "react-router-dom";
import CreateProjectForm from './components/CreateProjectForm';
import EditProjectForm from './components/EditProjectForm';
import Swal from 'sweetalert2'
import Header from './components/Header';



function App() {

  const projectData = [
    {
      id: uuidv4(),
      proj: "Nike",
      description: "Create login",
      manager: "Pedro Alvarez",
      assigned: "Luis Gomez",
      status: "Enable",
    },
    {
      id: uuidv4(),
      proj: "Adidas",
      description: "Header modification",
      manager: "Raul Perez",
      assigned: "Juan Garcia",
      status: "Disable",
    }
  ]

  const [projects, setProjects] = useState(projectData)

  
  // Funcion para agregar un proyecto
  const addProject = (project) => {
    
    
    project.id = uuidv4()
    setProjects ([
      ...projects,
      project
    ])

    

  }

  //Funcion para eliminar un proyecto
  const deleteProject = (id) => {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: 'grey',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setProjects(projects.filter(el => el.id !== id))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

    
  }

  // Funcion para editar un proyecto
  const [editing, setEditing] = useState(false);

  const [currentProject, setCurrentProject] = useState({
        id: null, 
        proj:'', 
        description: '',
        manager: '', 
        assigned:'', 
        status: '',
  })

  const editRow = (project) => {
    
    setEditing(true);
    setCurrentProject({
        id: project.id, 
        proj: project.proj, 
        description: project.description,
        manager: project.manager, 
        assigned: project.assigned, 
        status: project.status,
    })

  }

  const updateProject = (id, updatedProject) => {
    setEditing(false)
  
    setProjects(projects.map((el) => (el.id === id ? updatedProject : el)))
  }

  
  return (
    <div className="container">

    <Header />
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
          <ViewProject 
            projects={projects} 
            deleteProject={deleteProject} 
            editRow={editRow}
          />
      </Route>

      
      
      <Route exact path="/edit/:projectName">
                 <EditProjectForm
                    setEditing={setEditing}
                    currentProject={currentProject}
                    updateProject={updateProject}
                  />
      </Route>
                
      <Route exact path="/add">
                  <CreateProjectForm 
                    addProject={addProject}/>
      </Route>
              
            
    </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;


// {
//   editing ? (
    
//       <EditProjectForm
//         setEditing={setEditing}
//         currentProject={currentProject}
//         updateProject={updateProject}
//       />
    
//   ) : (
//       <CreateProjectForm addProject={addProject}/>
//   )
// }

