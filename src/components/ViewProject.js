import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import SearchForm from './SearchForm';
// import * as ReactBootStrap from 'react-bootstrap';
import ListShow from './ListShow';
import { Text, SimpleGrid, Box, HStack, Heading } from "@chakra-ui/react";



const ViewProject = ({projects, setProjects, deleteProject, editRow}) => {

  console.log(projects)
  

  const history = useHistory();
  const [search, setSearch] = useState([]);
  const [searchError, SetSearchError ] = useState(false);

  

    const handleClickAdd = () => {
      history.push('/add')
    }



    
    const handleSearch = (project_name) => {
      const serach_project = projects.find(el => el.proj.toLowerCase() === project_name)
      console.log(serach_project)
      if (serach_project) {
        setSearch([serach_project])
        console.log(search)
      } else {
      SetSearchError(true)
      setSearch([]);
      }
    }

  
    
    return (
      <div className="container">
        
          
          <Heading 
            orientation="horizontal" 
            marginTop="8" 
            textAlign="center" 
            marginBottom="5"
          > 
            My Projects 
          </Heading>

          <div className="container d-flex justify-content-end">
            <button
            className="btn btn-danger mb-3"
            onClick={handleClickAdd} 
            >
            + Add project
            </button>
          </div>

        <SearchForm 
          projects={(search) ? search : projects}
          handleSearch={handleSearch} 
        />


        

        {/* Encabezado */}
        <Box w="100%" m="auto" bg="rgba(0, 0, 0, 0.02)" boxShadow="lg" borderRadius="4px">

              <SimpleGrid px={4} columns={6}  spacingY="10px" spacingX="10px" border="1px" borderColor="gray.200" bg="bgGray.100" display={{base: "none", md: "grid"}} borderRadius="4px" textDecoration="bold">
                  
                  <HStack height="60px">
                        <Text fontSize="14px">
                            Project Info
                        </Text>    
                  </HStack>

                  <HStack height="60px">
                        <Text fontSize="14px">
                            Description
                        </Text>    
                  </HStack>

                  <HStack height="60px">
                      <Text fontSize="14px">
                          Project Manager
                      </Text>    
                  </HStack>

                  <HStack height="60px">
                      <Text fontSize="14px">
                          Assigned to
                      </Text>    
                  </HStack>

                  <HStack height="60px">
                      <Text fontSize="14px">
                          Status
                      </Text>    
                  </HStack>

                  <HStack height="60px">
                      <Text fontSize="14px">
                          Actions
                      </Text>    
                  </HStack>

                </SimpleGrid>
             
                
                  {
                    search.length > 0  ? (
                      
                      search.map((el) => <ListShow key={el.id} {...el} 
                      deleteProject={deleteProject} 
                      editRow={editRow} 
                    />)
                  ) : (

                    projects.map((el) => <ListShow key={el.id} {...el} 
                    deleteProject={deleteProject} 
                    editRow={editRow} 
                    />
                    // <Heading textAlign="center" marginTop={4} marginBottom={4}>Empty Projects</Heading>
                  ))
                    }
          </Box>
        
      </div>
         
    )
}

export default ViewProject
