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
          <FormLabel>Vardas</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="last-name" isRequired>
          <FormLabel>Pavardė</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>El. paštas</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="phone-number" isRequired>
          <FormLabel>Telefono numeris</FormLabel>
          <Input type="tel" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Slaptažodis</FormLabel>
          <Input type="password" />
        </FormControl>
      </VStack>
    </Box>
  );
}

export default Register;
