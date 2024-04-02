import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React, { useRef } from 'react'
import { BiSolidEdit, BiUserPin } from 'react-icons/bi'
import { GoArrowLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import CustomBox from '../../components/CustomBox'
import {
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import CustomModal from '../../components/CustomModal'

const Dependents = () => {
    const initialRef = useRef();
    const finalRef = useRef();
    const [isOpenEditModal, setIsOpenEditModal] = React.useState(false);
    const [isOpenAddModal, setIsOpenAddModal] = React.useState(false);

    const handleOpenEditModal = () => {
        setIsOpenEditModal(true);
    };

    const handleCloseEditModal = () => {
        setIsOpenEditModal(false);
    };

    const handleOpenAddModal = () => {
        setIsOpenAddModal(true);
    };

    const handleCloseAddModal = () => {
        setIsOpenAddModal(false);
    };

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
                                onClick={handleOpenEditModal}
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
                onClick={handleOpenAddModal}
            >
                Adicionar Dependente
            </Button>
            {/* Modal de Edição */}
            <CustomModal
                isOpen={isOpenEditModal}
                onClose={handleCloseEditModal}
                initialRef={initialRef}
                finalRef={finalRef}
            >
                <ModalHeader>Header</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Modal de edição
                    <input ref={initialRef} />
                    <input ref={finalRef} />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleCloseEditModal}>Close</Button>
                </ModalFooter>
            </CustomModal>
            {/* Modal de Adição */}
            <CustomModal
                isOpen={isOpenAddModal}
                onClose={handleCloseAddModal}
                initialRef={initialRef}
                finalRef={finalRef}
            >
                <ModalHeader>Header</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Modal de adição
                    <Text ref={initialRef}>tttttttttt</Text>
                    <Text ref={finalRef}>tttttttttt</Text>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleCloseAddModal}>Close</Button>
                </ModalFooter>
            </CustomModal>
        </Flex>
    )
}

export default Dependents