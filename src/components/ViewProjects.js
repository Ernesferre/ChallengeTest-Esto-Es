import React from 'react'
import { useHistory, Link } from "react-router-dom";
import { FaEdit, FaTrash } from 'react-icons/fa'
import SearchForm from './SearchForm';
import * as ReactBootStrap from 'react-bootstrap';
// import ProjectTable from './ProjectTable';


const ViewProjects = (props) => {

  const history = useHistory();

    const handleClickAdd = () => {
      history.push('/add')
    }

    // const handleClickEdit = () => {
    //   history.push('/edit')
    // }
    
    console.log(props.projects);
    
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
              <tbody>
                {
                  
                  props.projects.map( el => (
                    <tr
                    key={ el.id }
                    >
                        <td>{el.proj} </td>
                        <td>{el.description} </td>
                        <td>{el.manager}</td>
                        <td>{el.assigned}</td>
                        <td>{el.status}</td>
                        <td>
                            
                            <div className="">
                              <span 
                                className="btn my-center" 
                                onClick={() => {props.deleteProject(el.id)}}
                  
                                > <FaTrash />
                              </span>
                              <Link to={`./edit/${ el.proj }`}>
                              <span
                                className="btn"
                                onClick={() => {props.editRow(el)}}
                                // onClick={handleClickEdit}
                                > <FaEdit />
                              </span>
                              

                              </Link>
                            </div>


                        </td>
                    </tr>
                  )) 
                }
                
                
                
                  
              </tbody>
          </ReactBootStrap.Table>
        </div>
      
  </div>
         
    )
}

export default ViewProjects
