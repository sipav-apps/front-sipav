import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DiseasesContext from '../../context/diseasesContext';
import { Box, Flex, HStack, StackDivider, Text, VStack } from '@chakra-ui/react';

const Disease = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { diseases } = useContext(DiseasesContext)

  const [currentDisease, setCurrentDisease] = useState();

  useEffect(() => {
    if (!diseases[id - 1]) {
      console.log(diseases)
      // navigate("/");
    }
    setCurrentDisease(diseases[id - 1])
  }, [])

  return (
    <Flex
      width="100%"
      h="full"
      flexDir="column"
      alignItems="center"
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
      <HStack 
        justifyContent="center"
        width="100%" 
        px="10%"
        gap="6rem"
        alignItems="flex-start"
      >

        <Flex width="100%" justifyContent="center">
          <Flex
            backgroundColor="#F0F1F3"
            py={"2rem"}
            borderRadius="30px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            boxShadow="dark-lg"
            px="3rem"
            width="100%"
          >
            <Text
              fontSize="xl"
              color="secondary.400"
              fontWeight="semibold"
              mb="2rem"
            >
              Vacina {diseases[id - 1]?.vaccine}
            </Text>
            <VStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
              align='stretch'
              width="100%"
            >
              <Flex alignItems="flex-start">
                <Text
                  fontSize="md"
                  color="secondary.500"
                  fontWeight="semibold"
                  mr="1rem"
                  textAlign="left" // Alinhe o rótulo fixo à direita
                  width="150px"
                >
                  Vacina em dia:
                </Text>
                <Text
                  fontSize="md"
                  flex="1"
                >
                  Sim
                </Text>
              </Flex>
              <Flex alignItems="flex-start">
                <Text
                  fontSize="md"
                  color="secondary.500"
                  fontWeight="semibold"
                  mr="1rem"
                  textAlign="left" // Alinhe o rótulo fixo à direita
                  width="150px"
                >
                  Última dose tomada:
                </Text>
                <Text
                  fontSize="md"
                  flex="1"
                >
                  Sim
                </Text>
              </Flex>
              <Flex alignItems="flex-start">
                <Text
                  fontSize="md"
                  color="secondary.500"
                  fontWeight="semibold"
                  mr="1rem"
                  textAlign="left" // Alinhe o rótulo fixo à direita
                  width="150px"
                >
                  Número de doses:
                </Text>
                <Text
                  fontSize="md"
                  flex="1"
                >
                  {diseases[id - 1]?.doses_required}
                </Text>
              </Flex>
              <Flex alignItems="flex-start">
                <Text
                  fontSize="md"
                  color="secondary.500"
                  fontWeight="semibold"
                  mr="1rem"
                  textAlign="left" // Alinhe o rótulo fixo à direita
                  width="150px"
                >
                  Intervalo entre doses:
                </Text>
                <Text
                  fontSize="md"
                  flex="1"
                  overflowX="auto"
                  maxH="100px"
                  sx={{
                    "&::-webkit-scrollbar": {
                      marginLeft: "1rem",
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#f1f1f1",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#088395",
                      borderRadius: "4px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: "#0A4D68",
                    },
                  }}
                >
                  {diseases[id - 1]?.interval_between_doses}
                </Text>
              </Flex>
              <Flex alignItems="flex-start">
                <Text
                  fontSize="md"
                  color="secondary.500"
                  fontWeight="semibold"
                  mr="1rem"
                  textAlign="left" // Alinhe o rótulo fixo à direita
                  width="150px"
                >
                  Contra indicações:
                </Text>
                <Text
                  fontSize="md"
                  flex="1"
                  overflowX="auto"
                  maxH="100px"
                  sx={{
                    "&::-webkit-scrollbar": {
                      marginLeft: "1rem",
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#f1f1f1",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#088395",
                      borderRadius: "4px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: "#0A4D68",
                    },
                  }}
                >
                  {diseases[id - 1]?.contraindications}
                </Text>
              </Flex>
            </VStack>
          </Flex>
        </Flex>
        <Flex width="100%" justifyContent="center">
          <Flex
            backgroundColor="#F0F1F3"
            py={"2rem"}
            borderRadius="30px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            boxShadow="dark-lg"
            px="3rem"
            width="100%"
          >
            <Text
              fontSize="xl"
              color="secondary.400"
              fontWeight="semibold"
              mb="2rem"
            >
              A doença
            </Text>
            <VStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
              align='stretch'
              width="100%"
            >
              <Flex alignItems="flex-start">
                <Text
                  fontSize="md"
                  color="secondary.500"
                  fontWeight="semibold"
                  mr="1rem"
                  textAlign="left" // Alinhe o rótulo fixo à direita
                  width="150px"
                >
                  Informações:
                </Text>
                <Text
                  fontSize="md"
                  flex="1"
                  overflowY="auto"
                  maxH="150px"
                  sx={{
                    "&::-webkit-scrollbar": {
                      marginLeft: "1rem",
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#f1f1f1",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#088395",
                      borderRadius: "4px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: "#0A4D68",
                    },
                  }}
                >
                  {diseases[id - 1]?.disease_info}
                </Text>
              </Flex>
              <Flex alignItems="flex-start">
                <Text
                  fontSize="md"
                  color="secondary.500"
                  fontWeight="semibold"
                  mr="1rem"
                  textAlign="left" // Alinhe o rótulo fixo à direita
                  width="150px"
                >
                  Sintomas:
                </Text>
                <Text
                  fontSize="md"
                  flex="1"
                  overflowY="auto"
                  maxH="150px"
                  sx={{
                    "&::-webkit-scrollbar": {
                      marginLeft: "1rem",
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#f1f1f1",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#088395",
                      borderRadius: "4px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: "#0A4D68",
                    },
                  }}
                >
                  {diseases[id - 1]?.disease_info}
                </Text>
              </Flex>
              <Flex alignItems="flex-start">
                <Text
                  fontSize="md"
                  color="secondary.500"
                  fontWeight="semibold"
                  mr="1rem"
                  textAlign="left" // Alinhe o rótulo fixo à direita
                  width="150px"
                  overflowY="auto"
                  maxH="150px"
                  sx={{
                    "&::-webkit-scrollbar": {
                      marginLeft: "1rem",
                      width: "4px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#f1f1f1",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#088395",
                      borderRadius: "4px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: "#0A4D68",
                    },
                  }}
                >
                  Tratamento:
                </Text>
                <Text
                  fontSize="md"
                  flex="1"
                >
                  Test
                </Text>
              </Flex>
            </VStack>
          </Flex>
        </Flex>
      </HStack>
    </Flex>
  );
}

export default Disease;