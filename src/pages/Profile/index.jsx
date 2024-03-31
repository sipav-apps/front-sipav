import React, { useContext, useEffect, useState } from 'react'
import { Flex, Text } from "@chakra-ui/layout";
import CustomForm from '../../components/CustomForm';
import CustomInput from '../../components/CustomInput';
import * as Yup from "yup";
import { BiUserCircle } from 'react-icons/bi';
import { Formik, Form } from 'formik';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa6';
import { EmailIcon } from '@chakra-ui/icons';
import UserContext from '../../context/userContext';

const Profile = () => {
  const initialValues = {
    email: "",
    password: "",
    name: "",
    cpf: "",
    birthdate: "",
    telegram: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("E-mail inválido.")
      .required("O campo email é obrigatório."),
    password: Yup.string()
      .required("O campo senha é obrigatório.")
      .min(8, "Senha muito curta."),
    name: Yup.string()
      .required("O campo nome é obrigatório."),
    cpf: Yup.string()
      .required("O campo CPF é obrigatório.")
      .min(8),
    birthdate: Yup.date()
      .required("O campo data de nascimento é obrigatório."),
  });

  const { user, setUser } = useContext(UserContext);

  console.log(user)

  const updateHandle = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => updateHandle(values)}
      >
        {({ handleSubmit, errors, touched, isValid, dirty }) => (
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
          fontSize="2xl"
          color="primary.600"
          fontWeight="semibold"
          pb=".5rem"
        >
          Dados
        </Text>
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
        </Flex>
        )}
      </Formik>
    </>
  )
}

export default Profile