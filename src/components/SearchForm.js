import { Box, HStack } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react'
import { FaSearch } from 'react-icons/fa'


const SearchForm = ({projects, handleSearch}) => {
    
  console.log(projects)

  const [busqueda, setBusqueda] = useState('');
    
  


  const handleBusqueda = (e) => {
    setBusqueda(
        e.target.value  
    )
}

  
  
  useEffect(() => {
    handleSearch(busqueda.toLowerCase().trim());
  }, [busqueda])
  


  console.log(busqueda)

    return (
        
        <Box>
          <HStack>
          <form 
            className="input-group mb-5 mt-4 container"
            // onSubmit={SubmitName}
          >
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search project" 
              aria-label="" 
              aria-describedby="basic-addon1" 
              onChange={handleBusqueda}
              
              
            />
            {/* <div className="input-group-append"> */}
              {/* <button 
                className="btn btn-secondary" type="button"
                type="submit"
              >
              <FaSearch /> 
              </button> */}
            {/* </div> */}
          </form>
          </HStack>
        </Box>
        
            
        
    )
}

export default SearchForm
