import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const password = document.getElementById("password").value;

    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/");
  };

  return (
    <Box>
      <VStack spacing={4} as="form" onSubmit={handleRegister}>
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
