import React from 'react'
import { useHistory } from "react-router-dom";
import SearchForm from './SearchForm';
import * as ReactBootStrap from 'react-bootstrap';
import ListShow from './ListShow';


const ViewProject = ({projects, deleteProject, editRow}) => {

  const history = useHistory();

    const handleClickAdd = () => {
      history.push('/add')
    }
    
    return (
      <div className="container">
        
          <h1 className="text-center mt-5 mb-5"> My Projects </h1>

          <div className="container d-flex justify-content-end">
            <button
            className="btn btn-danger mb-3"
            onClick={handleClickAdd} 
            >
            + Add project
            </button>
          </div>

        <SearchForm />

        <div className="table-responsive">

          <ReactBootStrap.Table className="">
              <thead className="thead-dark">
                  <tr>
                      <th>Project name</th>
                      <th>Description</th>
                      <th>Project manager</th>
                      <th>Assigned to</th>
                      <th>Status</th>
                      <th>Actions</th>
                  </tr>
              </thead>
              
                
                  {projects.lenght !==0 ? (
                  projects.map((el) => <ListShow key={el.id} {...el} 
                    deleteProject={deleteProject} 
                    editRow={editRow} 
                    />)
                  ) : (
                    <h3>Add New Projects</h3>
                  )
                  }
          </ReactBootStrap.Table>
        </div>
      </div>
         
    )
}

export default ViewProject
