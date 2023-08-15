import React, { useEffect, useState } from 'react'
import { Flex } from "@chakra-ui/layout";
import { Text, Divider, Button } from "@chakra-ui/react";
import { CalendarIcon, EmailIcon, LockIcon } from '@chakra-ui/icons';
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import Auth from "../../services/Auth.js";
import { useNavigate } from "react-router-dom";
import CustomInput from '../../components/CustomInput/index.jsx';
import { BiUserCircle, BiNews } from "react-icons/bi";

const Register = () => {
  const navigate = useNavigate();
  const isAuth = Auth.isAuth();

  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  const initialValues = { 
    email: "", 
    password: "",
    name: "",
    cpf: "",
    birthdate: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("E-mail inválido.")
      .required("O campo email é obrigatório."),
    password: Yup.string()
      .required("O campo senha é obrigatório.")
      .min(6, "Senha muito curta."),
    name: Yup.string()
      .required("O campo nome é obrigatório."),
      cpf: Yup.string()
      .required("O campo CPF é obrigatório.")
      .min(8),
      birthdate: Yup.date()
      .required("O campo data de nascimento é obrigatório."),
  });

  const registerHandle = (values) => {
    values.birthdate = new Date(values.birthdate)
    console.log(values)
    Auth.register(
      values,
      navigate
    );
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => registerHandle(values)}
    >
      {({ handleSubmit, errors, touched, isValid, dirty }) => (
        <Flex
          backgroundColor="primary.500"
          alignItems="center"
          justifyContent="center"
          h={"100vh"}
          w={"100vw"}
        >
          <Flex
            as={Form}
            backgroundColor="#F0F1F3"
            width="36%"
            pt={"2rem"}
            borderRadius="30px"
            flexDirection="column"
            alignItems="center"
            boxShadow="dark-lg"
            onSubmit={handleSubmit}
          >
            <Text
              fontSize="5xl"
              color="primary.600"
              fontWeight="semibold"
              pb=".5rem"
            >
              SIPAV
            </Text>
            <Divider
              borderColor="primary.600"
              backgroundColor="primary.600"
              borderWidth=".2rem"
              w={"15%"}
            />
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
              />

              <CustomInput
                label="CPF"
                icon={<BiNews color='gray.500' className='custom-icon' />}
                name="cpf"
                type="text"
                placeholder="Digite CPF para cadastro"
                height={'54px'}
                borderWidth=".2rem"
                borderRadius="30px"
                touched={touched}
                errors={errors}
              />

              <CustomInput
                label="Senha"
                icon={<LockIcon className='custom-icon' color='gray.500' />}
                name="password"
                type="password"
                placeholder="Digite sua senha para cadastro"
                height={'54px'}
                borderWidth=".2rem"
                borderRadius="30px"
                show={show}
                handleClick={handleClick}
                touched={touched}
                errors={errors}
              />

              <CustomInput
                label="Data de Nascimento"
                icon={<CalendarIcon className='custom-icon' color='gray.500' />}
                name="birthdate"
                type="date"
                placeholder="Selecione sua data de nascimento"
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
              backgroundColor="transparent" // Defina a cor de fundo desejada
              transition="background-color 0.3s, color 0.3s" // Adicione uma transição suave
              _hover={{
                backgroundColor: "primary.600", // Cor de fundo ao passar o mouse
                color: "#F0F1F3", // Cor do texto ao passar o mouse
              }}
              mb="2rem"
              fontSize="2xl"
            >
              Cadastrar
            </Button>
            <Text
              color="primary.500"
              mb="2rem"
            > 
              Já possui uma conta? &nbsp;
              <Text
                as='u'
                fontWeight="bold"
                color="primary.600"
                onClick={() => navigate("/login")}
                cursor="pointer"
              >
                Entre
              </Text>
            </Text>
          </Flex>
        </Flex>
      )}
    </Formik>
    </>
  )
}

export default Register