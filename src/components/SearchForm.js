import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchForm = () => {
    
    
    return (
        
        <div className="input-group mb-5 mt-4 container">
          <input type="text" className="form-control" placeholder="Search project" aria-label="" aria-describedby="basic-addon1"/>
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button"><FaSearch /> </button>
          </div>
        </div>
            
        
    )
}

export default SearchForm
