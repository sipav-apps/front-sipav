import React from 'react'
import { Input, InputLeftElement, InputGroup, InputRightElement, Button, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Field } from 'formik';
import "./customInput.css";
  
const CustomInput = ({ icon, label, type, show, handleClick, touched, errors,...props }) => {
  return (
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
  )
}

export default CustomInput