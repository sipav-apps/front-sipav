import React, { useEffect, useState } from 'react'
import { Flex } from "@chakra-ui/layout";
import { Text, Divider, Input, InputLeftElement, InputGroup, InputRightElement, Button, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import Auth from "../../services/Auth.js";
import { useNavigate } from "react-router-dom";

const CustomInput = ({ icon, label, type, show, handleClick, touched, errors,...props }) => (
  <Field name={props.name}>
    {({ field, form }) => (
      <FormControl
        isInvalid={form.errors[field.name] && form.touched[field.name]}
        pb="4"
      >
        <FormLabel 
          fontSize="xl"
          color="primary.600"
          mt=".5rem"
          fontWeight="medium"
        >
          {label}
        </FormLabel>
        <InputGroup>
          <InputLeftElement ml=".5rem" h="full" pointerEvents="none">
            {icon}
          </InputLeftElement>
          <Input
            {...field}
            {...props}
            type={type === "password" ? (show ? "text" : "password") : type}
          />
          {type === "password" && (
            <InputRightElement h="full" width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          )}
        </InputGroup>
        <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
      </FormControl>
    )}
  </Field>
);



const Login = () => {
  const navigate = useNavigate();
  const isAuth = Auth.isAuth();

  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("E-mail inválido.")
      .required("O campo email é obrigatório."),
    password: Yup.string()
      .required("O campo senha é obrigatório.")
      .min(6, "Senha muito curta."),
  });

  const loginHandle = (values) => {
    console.log(values)
    Auth.signIn(values.email, values.password, navigate);
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
      onSubmit={(values) => loginHandle(values)}
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
              pt="2rem"
            >
              <CustomInput
                label="E-mail"
                icon={<EmailIcon color='gray.300' />}
                name="email"
                type="email"
                placeholder="Digite email para login"
                height={'54px'}
                borderWidth=".2rem"
                borderRadius="30px"
                touched={touched}
                errors={errors}
              />

              <CustomInput
                label="Senha"
                icon={<LockIcon color='gray.300' />}
                name="password"
                type="password"
                placeholder="Digite sua senha"
                height={'54px'}
                borderWidth=".2rem"
                borderRadius="30px"
                show={show}
                handleClick={handleClick}
                touched={touched}
                errors={errors}
              />
            </Flex>
            <Flex justifyContent="flex-end" marginBottom="1rem" width="70%">
              <Button variant="link">
                <Text as='u' fontWeight="bold" color="primary.600">
                  Esqueceu a senha?
                </Text>
              </Button>
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
              Login
            </Button>
            <Text
              color="primary.500"
              mb="2rem"
            > 
              Não tem uma conta? &nbsp;
              <Text
                as='u'
                fontWeight="bold"
                color="primary.600"
                onClick={() => navigate("/register")}
              >
                Cadastre-se
              </Text>
            </Text>
          </Flex>
        </Flex>
      )}
    </Formik>
    </>
  )
}

export default Login