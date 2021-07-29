import React from 'react'
import { useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'
import Swal from 'sweetalert2'


const EditProjectForm = (props) => {

    const history = useHistory();

    const {projectName } = useParams();
    console.log (projectName);

    const handleClick = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Changes Saved',
            showConfirmButton: false,
            timer: 2500
        })
        history.push('/');
    }

    const handleBack = () => {
        history.push('/')
    }


    console.log(props.currentProject)

    const [proyecto, setProyecto] = useState(props.currentProject);

    
    const actualizarState = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    
    const {proj, manager, description, assigned, status} = proyecto;


    return (
        <div>
            
            <div className="d-inline-block mb-4">
                <span className="d-md-inline-block ml-2" onClick={handleBack} cursor="pointer"> <FaArrowLeft /> </span>
                <h6 className="d-md-inline-block" onClick={handleBack}>Back </h6>
                <h3 className="d-md-inline-block mb-3 mt-5 m-5" > Edit Project </h3>
            </div>
            
            
            
            
            <form 
                onSubmit={(e) => {
                    e.preventDefault()
                    props.updateProject(proyecto.id, proyecto)

                }}>
                <div className="form-group">
                    <label>Project name</label>
                    <input 
                        type='text'
                        className="form-control mb-3" 
                        name='proj'
                        onChange={actualizarState}
                        value={proj}
                    />

                    <label>Description</label>
                    <input 
                        type='text'
                        className="form-control mb-3" 
                        name='description'
                        onChange={actualizarState}
                        value={description}
                    />
                        
                        <div className="form-group">
                        <label for="select1">Poject manager</label>
                        <select
                            type='text'
                            id="select1"
                            className="form-select mb-3" 
                            name='manager'
                            placeholder="Add manager"
                            onChange={actualizarState}
                            value={manager}
                        >
                            <option value="" selected disabled>Please select a Manager</option>
                            <option value="Cristian Gonzalez"> Cristian Gonzalez </option>
                            <option value="Javier Andrada"> Javier Andrada </option>
                            <option value="Claudia Lopez"> Clauida Lopez </option>
                            
                        </select> 
                    </div>  
                    <div className="form-group">
                        <label for="select2">Assigned to</label>
                        <select
                            type='text'
                            id="select2"
                            className="form-select mb-3" 
                            name='assigned'
                            placeholder='Assigned to'
                            onChange={actualizarState}
                            value={assigned}
                        >
                            <option value="" selected disabled>Please select a Person to Assign task</option>
                            <option value="Paulo Lopez"> Paulo Lopez </option>
                            <option value="Lorena Castillo"> Lorena Castillo </option>
                            <option value="Susana Cardenas"> Susana Cardenas </option>
                            
                        </select> 
                    </div>
                        
                    
                    <div className="form-group">
                        <label for="select3">Status</label>
                        <select
                            type='text'
                            id="select3"
                            className="form-select mb-3" 
                            name='status'
                            placeholder='Status'
                            onChange={actualizarState}
                            value={status}
                        >
                            <option value="" selected disabled>Please select Status</option>
                            <option value="Enable"> Enable </option>
                            <option value="Disable"> Disable </option>
                            
                        </select> 
                    </div>

                    <button 
                        className="btn btn-danger mt-3"
                        onClick={handleClick}
                    >
                        Save changes
                    </button>
                    
            
            
            
                </div>
            </form>
            
        </div>
    );
}

export default EditProjectForm;
