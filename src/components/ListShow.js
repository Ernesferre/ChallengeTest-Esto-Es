import React from 'react'
import {  Link } from "react-router-dom";

import { FaEdit, FaTrash } from 'react-icons/fa'

const ListShow = (props) => {

    console.log(props);

    const {id, proj, manager, description, assigned, status} = props;
    const { deleteProject, editRow} = props;

    // console.log(deleteProject)
    // console.log(editRow)

    return (
        
            <tbody>
                <tr>
                    <td>{proj} </td>
                    <td>{description} </td>
                    <td>{manager}</td>
                    <td>{assigned}</td>
                    <td>{status}</td>
                    <td>
                

                        <div className="">
                                    <span 
                                        className="btn my-center" 
                                        onClick={() => {deleteProject(id)}}
                        
                                        > <FaTrash />
                                    </span>
                                    <Link to={`./edit/${ proj }`}>
                                    <span
                                        className="btn"
                                        onClick={() => {editRow(props)}}
                                        // onClick={handleClickEdit}
                                        > <FaEdit />
                                    </span>
                                    </Link>
                        </div>

                    </td>
                </tr>
            </tbody>


            
        
    )
}

export default ListShow
