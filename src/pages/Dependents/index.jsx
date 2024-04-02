import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import { BiSolidEdit, BiUserPin } from 'react-icons/bi'
import { GoArrowLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import CustomBox from '../../components/CustomBox'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

const Dependents = () => {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("@sipavUser"));
    const dependents = user.dependents;

    return (

        <Flex
            backgroundColor="#F0F1F3"
            width="36%"
            pt={"2rem"}
            borderRadius="30px"
            flexDirection="column"
            alignItems="center"
            boxShadow="dark-lg"
        >
            <Flex
                justifyContent="space-between"
                w="80%"
            >
                <GoArrowLeft 
                    onClick={() => navigate(-1)}
                    alt='Voltar' 
                    cursor={"pointer"}
                    size={40}
                    color='#088395'
                />
                <Text
                    fontSize="2xl"
                    color="primary.600"
                    fontWeight="semibold"
                    pb=".5rem"
                >
                    Seus Dependentes
                </Text>
                <Box width="40px" height="40px"></Box>
            </Flex>
            <Flex
                height="50%"
                width="80%"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                mt="1rem"
                overflowY="auto"
                maxH="300px"
                minH="100px"
                marginBottom="2rem"
                borderRadius="1rem"
                px="1rem"
                py="1rem"
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
                {dependents.map((dependent, index) => (
                    <CustomBox 
                        key={index} 
                        text={dependent.name}
                        rightImage={
                            <BiSolidEdit 
                                size={40}
                                color='#088395'
                                cursor={"pointer"}
                            />
                        }
                    />
                ))}
            </Flex>
            <Button
                h="3rem"
                w="70%"
                borderRadius="30px"
                borderColor="#E0E0E0"
                borderWidth=".2rem"
                color="#F0F1F3"
                variant="solid"
                backgroundColor="primary.600"
                transition="background-color 0.3s, color 0.3s"
                _hover={{
                    backgroundColor: "primary.600",
                    color: "#F0F1F3",
                }}
                mb="2rem"
                fontSize="md"
                onClick={() => navigate("/dependents")}
            >
                Adicionar Dependente
            </Button>
        </Flex>

    )
}

export default Dependents