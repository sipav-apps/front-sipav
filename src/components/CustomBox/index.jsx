import { Flex, Text } from '@chakra-ui/react';
import React from 'react'

const CustomBox = ({text, rightImage}) => {
  return (
    <Flex 
        width="100%"
        justifyContent="space-between"
        align="center"
        borderWidth=".1rem"
        borderRadius="15px"
        py=".5rem"
        px="1rem"
        my="1rem"
        sx={{ boxShadow: '0px 0px 16px 1px grey'}}
    >
        <Text 
            fontSize="md" 
            fontWeight="semibold" 
            color="primary.600"

            px="10px"
        >
            {text}
        </Text>
        {rightImage}
    </Flex>
  )
}

export default CustomBox;