import React from 'react'
import {  Link } from "react-router-dom";

import { FaEdit, FaTrash } from 'react-icons/fa'
import { Stack, HStack, Heading, Text, Avatar, Box, SimpleGrid, Tag } from "@chakra-ui/react";

const ListShow = (props) => {

    console.log(props);

    const {id, proj, date, manager, description, assigned, status } = props;
    const { deleteProject, editRow} = props;



    return (
        <>

        
        {/* Mobile */}

        <Box 
            bg="#fff" 
            w="100%" 
            h="auto" 
            d={{base: "flex", md: "none"}} 
            direction="row" 
            justifyContent="space-between" 
            px="16px" 
            py="8px" 
            border="1px" 
            borderColor="gray.200"
        >

            <Stack 
                d="flex" 
                direction={{base: "column", md: "row"}} 
                justifyContent={{base: "center", md: "space-around"}}
            >

                <Heading fontFamily="title" fontSize={{base: "14px"}}  >
                    {proj}
                </Heading>

                <Text fontSize={{base: "10px"}} color="gray.500" style={{'margin-top': "0px"}}>
                    Creation date: {date}
                </Text>

                <Stack 
                    d="flex" 
                    direction="row">

                    <Avatar src="https://bit.ly/kent-c-dodds" w="25px" h="25px" />

                    <Text fontSize={{base: "12px"}}>{assigned}</Text>

                </Stack>
            </Stack>

            <Stack>
                    <span 
                        className="btn my-center" 
                        onClick={() => {deleteProject(id)}}
                        
                        > <FaTrash />
                    </span>
                                    
                    <Link to={`./edit/${ proj }`}>
                        <span
                            className="btn"
                            onClick={() => {editRow(props)}}
                            
                            > <FaEdit />
                        </span>
                    </Link>
            </Stack>
        </Box>


        {/* Desktop */}
        <SimpleGrid  
            bg="#fff" 
            border="1px" 
            borderColor="gray.100" 
            columns={6} 
            spacingY="10px" 
            spacingX="10px" 
            p={4} 
            d={{base: "none", md: "grid"}}
        >
            <HStack height="60px">
                <Box>
                    <Text fontSize="14px">{proj}</Text>
                    <Text  fontSize="12px"> Creation date: {date}</Text>
                </Box>
            </HStack>

            <HStack height="60px">
                <Box>
                    <Text fontSize="14px">{description}</Text>
                </Box>
            </HStack>

            <HStack height="60px">
                <Stack d="flex" direction="row">
                    <Avatar src="https://bit.ly/ryan-florence" w="24px" h="24px" />
                    <Text fontSize="12px">{manager}</Text>
                </Stack>
            </HStack>

            <HStack height="60px">

              <Stack d="flex" direction="row">

                <Avatar src="https://bit.ly/kent-c-dodds" w="24px" h="24px" />
                <Text fontSize={{base: "12px"}}>{assigned}</Text>

              </Stack>                
            </HStack>

            <HStack height="60px">
                <Tag>{status}</Tag>
            </HStack>

            <HStack height="60px">
                    <span 
                        className="btn my-center" 
                        onClick={() => {deleteProject(id)}}
                        
                        > <FaTrash />
                    </span>
                                    
                    <Link to={`./edit/${ proj }`}>
                        <span
                            className="btn"
                            onClick={() => {editRow(props)}}
                            
                            > <FaEdit />
                        </span>
                    </Link>
            </HStack>

      </SimpleGrid>
      </>
        
            

            
        
    )
}

export default ListShow


{/* <tbody>
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
            </tbody> */}
