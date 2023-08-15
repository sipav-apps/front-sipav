import { Flex, Button, Box, Text } from '@chakra-ui/react'
import React from 'react'
import Auth from "../../services/Auth.js";

const Home = () => {
  const currentUser = localStorage.getItem("@sipavUser");
  return (
    <Flex
      backgroundColor="primary.500"
      alignItems="center"
      justifyContent="center"
      h={"100vh"}
      w={"100vw"}
    >
      <Flex
            backgroundColor="#F0F1F3"
            width="80%"
            py={"2rem"}
            borderRadius="30px"
            flexDirection="column"
            alignItems="center"
            boxShadow="dark-lg"
      >
        <Box>
          <Text fontSize="3xl" mb="2rem">
            Bem vindo, {currentUser}
          </Text>
        </Box>
        <Button
          colorScheme="red"
          onClick={() => {
            Auth.signOut();
          }}
        >
          Sair
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home