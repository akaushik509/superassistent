
import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <Flex justify={"space-around"}>
      <Button><NavLink to="/">Categorize</NavLink></Button>
      <Button><NavLink to="/cloze">Cloze</NavLink></Button>
      <Button><NavLink to="/comprehension">Comprehension</NavLink></Button>
    </Flex>
      
    </>
  )
}

export default Navbar