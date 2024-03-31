import React, { useState } from 'react'
import { 
  Flex,     
} from '@chakra-ui/react'
import CustomMenu from '../../components/CustomMenu/index.jsx';

const Home = () => {
  return (
    <Flex
      backgroundColor="primary.500"
      alignItems="center"
      justifyContent="center"
      h={"100vh"}
      w={"100vw"}
    >
    <CustomMenu  />
    </Flex>
  )
}

export default Home