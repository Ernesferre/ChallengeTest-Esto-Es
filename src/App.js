
import './App.css';
import {useState} from 'react';
import ViewProject from './components/ViewProject';
import { v4 as uuidv4 } from 'uuid'
import moment from "moment";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import CreateProjectForm from './components/CreateProjectForm';
import EditProjectForm from './components/EditProjectForm';
import Swal from 'sweetalert2'
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import { ChakraProvider } from "@chakra-ui/react";



function App() {

  const projectData = [
    {
      id: uuidv4(),
      proj: "Nike",
      date: "29 07 2021 2:31 PM",
      description: "Create login",
      manager: "Pedro Alvarez",
      assigned: "Luis Gomez",
      status: "Enable",
    },
    {
      id: uuidv4(),
      proj: "Adidas",
      date: "30 07 2021 10:37 AM",
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
    project.date = moment().format("DD MM YYYY LT");
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
        date: '',
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
        date: project.date,
        description: project.description,
        manager: project.manager, 
        assigned: project.assigned, 
        status: project.status,
    })

  }

  const updateProject = (id, updatedProject) => {
    
    console.log(id)
    console.log(updatedProject)
    
    setEditing(false)
    setProjects(projects.map((el) => (el.id === id ? updatedProject : el)))
  }

  
  return (
    <ChakraProvider>
        <div className="container">

        <Header />
        <BrowserRouter>

        

        <Switch>

          

          <Route exact path="/">
              <ViewProject 
                projects={projects} 
                setProjects={setProjects}
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
    </ChakraProvider>
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

