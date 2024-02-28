import { Flex, Button, Box, Text, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import Auth from "../../services/Auth.js";
import menu from '../../assets/menu.png'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenuState = () => setIsMenuOpen(!isMenuOpen);

  const currentUser = localStorage.getItem("@sipavUser");
  return (
    <Flex
      backgroundColor="primary.500"
      alignItems="center"
      justifyContent="center"
      h={"100vh"}
      w={"100vw"}
    >
      <Image 
        onClick={toggleMenuState} 
        src={menu} 
        alt='Hamburger menu' 
        pos="absolute" 
        top="5%" 
        right="5%"
        cursor={"pointer"}
      />
    </Flex>
  )
}

export default Home