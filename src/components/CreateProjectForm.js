import React from 'react'
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'


const CreateProjectForm = ({addProject}) => {

    const history = useHistory();

    const handleBack = () => {
        history.push('/')
    }
      

    const [proyecto, setProyecto] = useState({
        id: null, 
        proj:'', 
        description: '',
        manager: '', 
        assigned:'', 
        status: '',
    });

    const [error, actualizarError] = useState(false)

    // funcion que se ejecuta cuando el usuario escribe dentro del input
    const actualizarState = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los Valores
    const {proj, manager, description, assigned, status} = proyecto;

     // Cuando el usuario presiona agregar cita
     const SubmitProject = e => {
        e.preventDefault();

        // Validacion de formulario

        if (proj.trim() === '' || description.trim() === '' || manager.trim() === '' || assigned.trim() === '' || status.trim() === ''){
            actualizarError(true)
            return
        }

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Project has been saved',
            showConfirmButton: false,
            timer: 2500
        })

        // Eliminar el mensaje previo
        actualizarError(false);

        addProject(proyecto);

        
    
        history.push('/')
    
          


         // Reiniciar el form
            setProyecto ({ 
                proj:'', 
                description: '',
                manager: '', 
                assigned:'', 
                status: '',
            })
     }

     

    return (
        <div>
            
            <div className="d-inline-block mb-3">
                
                    <span className="d-md-inline-block ml-2 d-flex flex-sm-row" onClick={handleBack} cursor="pointer"> <FaArrowLeft /> </span>
                    <h6 className="d-md-inline-block p-2" onClick={handleBack}>Back </h6>
                
                <h3 className="d-md-inline-block mb-3 mt-5 m-5 p-2" > Add Project </h3>
            </div>
            
            
            {error ? <p className="text-danger ">Every field is required !!!</p> 
            : null }
            <form onSubmit={SubmitProject}>
                <div className="form-group mt-4">
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
                        <label htmlFor="select1">Poject manager</label>
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
                        <label htmlFor="select2">Assigned to</label>
                        <select
                            type='text'
                            id="select2"
                            className="form-select form-control mb-3" 
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
                    
                    <div className="form-group dropdown">
                        <label htmlFor="select3">Status</label>
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
                        type="submit"
                        className="btn btn-danger mt-3"
                        // onClick={handleClick}

                        >Create project
                    </button>
            
            
            
            </div>
            </form>
            
        </div>
    );
}

export default CreateProjectForm;

