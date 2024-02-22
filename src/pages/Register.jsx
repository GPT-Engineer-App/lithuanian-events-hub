import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

function Register() {
  return (
    <Box>
      <VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
        <FormControl id="first-name" isRequired>
          <FormLabel>First Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="last-name" isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="phone-number" isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input type="tel" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Register
        </Button>
      </VStack>
    </Box>
  );
}

export default Register;
