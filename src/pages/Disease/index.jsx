import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DiseasesContext from '../../context/diseasesContext';
import { Flex, HStack, Text } from '@chakra-ui/react';

const Disease = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { diseases } = useContext(DiseasesContext)

  const [currentDisease, setCurrentDisease] = useState();
  
  useEffect(() => {
    if (!diseases[id-1]) {

      navigate("/");
    }
    setCurrentDisease(diseases[id-1])
  }, [])

  return (
    <Flex 
      width="100%" 
      h="100%" 
      flexDir="column" 
      alignItems="center"
      jus
    >
      <Text 
        fontSize="2xl"
        color="secondary.400"
        fontWeight="semibold"
        onClick={() => navigate("/")}
        mb="2rem"
      >
        {currentDisease?.name}
      </Text>
      <Flex width="100%" justifyContent="center">
        <Flex
          backgroundColor="#F0F1F3"
          py={"2rem"}
          borderRadius="30px"
          flexDirection="column"
          alignItems="center"
          boxShadow="dark-lg"
          px="3rem"
          gap="1rem"
        >
          <HStack px="2rem" justifyContent="space-between" width="100%">
            <Text 
              fontSize="md"
              color="primary.600"
              fontWeight="semibold"
              pb=".5rem"
            >
              Última dose tomada: 
            </Text>
            <Text
              alignItems="flex-end"
              fontSize="md"
              color="primary.600"
              fontWeight="semibold"
              pb=".5rem"
            >
              Test
            </Text>
          </HStack>
          <HStack px="2rem" justifyContent="space-between" width="100%">
            <Text 
              fontSize="md"
              color="primary.600"
              fontWeight="semibold"
              pb=".5rem"
            >
              Vacina em dia: 
            </Text>
            <Text 
              fontSize="md"
              color="primary.600"
              fontWeight="semibold"
              pb=".5rem"
            >
              Test
            </Text>
          </HStack>
          <HStack px="2rem" justifyContent="space-between" width="100%">
            <Text 
              fontSize="md"
              color="primary.600"
              fontWeight="semibold"
              pb=".5rem"
            >
              Número de doses: 
            </Text>
            <Text 
              fontSize="md"
              color="primary.600"
              fontWeight="semibold"
              pb=".5rem"
            >
              {currentDisease?.doses_required}
            </Text>
          </HStack>
          <HStack px="2rem" justifyContent="space-between" width="100%">
            <Text 
              fontSize="md"
              color="primary.600"
              fontWeight="semibold"
              pb=".5rem"
            >
              Número de doses: 
            </Text>
            <Text 
              fontSize="md"
              color="primary.600"
              fontWeight="semibold"
              pb=".5rem"
            >
              {currentDisease?.interval_between_doses}
            </Text>
          </HStack>
          <HStack px="2rem" justifyContent="space-between" width="100%">
            <Text 
              fontSize="md"
              color="primary.600"
              fontWeight="semibold"
              pb=".5rem"
            >
              Contra indicações: 
            </Text>
            <Text 
              fontSize="md"
              color="primary.600"
              fontWeight="semibold"
              pb=".5rem"
            >
              {diseases[id-1]?.name}
            </Text>
          </HStack>
        </Flex>
        {/* <Flex
          backgroundColor="#F0F1F3"
          py={"2rem"}
          borderRadius="30px"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="dark-lg"
          px="3rem"
        >
          <Flex 
            width="100%" 
            alignItems="center" 
            flexDirection="column"
            justifyContent="center"
          >
            <Text 
              fontSize="md"
              color="primary.600"
              fontWeight="semibold"
              pb=".5rem"
            >
              A doença 
            </Text>
          </Flex>
        </Flex> */}
      </Flex>
    </Flex>
  );
}

export default Disease;