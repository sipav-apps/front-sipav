import React, { useContext, useEffect, useState } from 'react'
import { Flex, Text, Box } from "@chakra-ui/layout";
import CustomForm from '../../components/CustomForm';
import CustomInput from '../../components/CustomInput';
import * as Yup from "yup";
import { BiUserCircle } from 'react-icons/bi';
import { Formik, Form } from 'formik';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa6';
import { CalendarIcon, EmailIcon } from '@chakra-ui/icons';
import { Button, Image } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react'
import { GoArrowLeft } from "react-icons/go";
import useAuth from '../../services/useAuth';
import { useNavigate } from 'react-router-dom';
import api from '../../services/Api';

const Profile = () => {
  const { isAuthenticated, update } = useAuth();

  const navigate = useNavigate();
  
  const [user, setUser] = useState(null);
  const userData = JSON.parse(localStorage.getItem("@sipavUser"));

  useEffect(() => {
      async function fetchUserData() {
        try {
          const response = await api.get(`/user/${userData.id}`);
          setUser(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Erro ao buscar dados do usuário:', error);
        }
      }
  
      fetchUserData();
  }, []);

  if (!user) {
    return <p>Carregando...</p>;
  }

  // const dataObjeto = new Date(user.birthdate);
  // const dataFormatada = dataObjeto.toISOString().split('T')[0];
  
  const initialValues = {
    id: user.id,
    email: user.email,
    name: user.name,
    telegram: user.telegram || '',
    phoneNumber: user.phoneNumber || '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("E-mail inválido.")
      .required("O campo email é obrigatório."),
    name: Yup.string()
      .required("O campo nome é obrigatório."),
    // birthdate: Yup.date()
    //   .required("O campo data de nascimento é obrigatório."),
  });

  async function updateHandle (values) {
    await update(values);
    navigate(0); 
  };

  return (
    <>
      <Flex
        backgroundColor="#F0F1F3"
        width="36%"
        pt={"2rem"}
        borderRadius="30px"
        flexDirection="column"
        alignItems="center"
        boxShadow="dark-lg"
        maxH={"90vh"}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => updateHandle(values)}
        >
          {({ handleSubmit, errors, touched, isValid, dirty }) => (
          <Flex
            as={Form}
            width="100%"
            onSubmit={handleSubmit}
            flexDirection="column"
            alignItems="center"
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
                Dados
              </Text>
              <Box width="40px" height="40px"></Box>
            </Flex>
            <Flex
              height="50%"
              width="70%"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
              mt="3rem"
              overflowY="auto"
              maxH="450px"
              marginBottom="2rem"
              px={2}
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
              <CustomInput
                label="Nome"
                icon={<BiUserCircle className='custom-icon' />}
                name="name"
                type="text"
                placeholder="Digite seu nome completo"
                height={'54px'}
                borderWidth=".2rem"
                borderRadius="30px"
                touched={touched}
                errors={errors}
              />

              <CustomInput
                label="E-mail"
                icon={<EmailIcon color='gray.500' className='custom-icon' />}
                name="email"
                type="email"
                placeholder="Digite email para cadastro"
                height={'54px'}
                borderWidth=".2rem"
                borderRadius="30px"
                touched={touched}
                errors={errors}
                isDisabled
              />

              <CustomInput
                label="Whatsapp"
                icon={<FaWhatsapp className='custom-icon' color='gray.500' />}
                name="phoneNumber"
                type="number"
                placeholder="Digite seu telefone"
                height={'54px'}
                borderWidth=".2rem"
                borderRadius="30px"
                touched={touched}
                errors={errors}
              />

              <CustomInput
                label="Telegram"
                icon={<FaTelegram className='custom-icon' color='gray.500' />}
                name="telegram"
                type="text"
                placeholder="Digite seu usuário do Telegram"
                height={'54px'}
                borderWidth=".2rem"
                borderRadius="30px"
                touched={touched}
                errors={errors}
              />

            </Flex>
            <Button
              type="submit"
              h="3rem"
              w="10rem"
              borderRadius="30px"
              borderColor="primary.600"
              borderWidth=".2rem"
              isDisabled={!isValid || !dirty}
              color="primary.600"
              variant="solid"
              marginTop="1rem"
              backgroundColor="transparent"
              transition="background-color 0.3s, color 0.3s"
              _hover={(isValid && dirty) && {
                backgroundColor: "primary.600",
                color: "#F0F1F3",
              }}
              mb="1rem"
              fontSize="2xl"
            >
              <Tooltip
                label="Você precisa alterar alguma informação"
                placement="top"
                hasArrow
                isOpen={dirty ? false : undefined} // Oculta o tooltip se o botão estiver "dirty"
              >
                Salvar
              </Tooltip>
            </Button>
          </Flex>
          )}
        </Formik>
        <Button
          h="3rem"
          w="60%"
          borderRadius="30px"
          borderColor="#E0E0E0"
          borderWidth=".2rem"
          color="#F0F1F3"
          variant="solid"
          marginTop="1rem"
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
          Gerenciar Dependentes
        </Button>
      </Flex>
    </>
  )
}

export default Profile