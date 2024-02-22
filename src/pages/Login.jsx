import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === emailInput && storedUser.password === passwordInput) {
      navigate("/");
    } else {
      alert("Incorrect credentials");
    }
  };

  return (
    <Box>
      <VStack spacing={4} as="form" onSubmit={handleLogin}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Login
        </Button>
      </VStack>
    </Box>
  );
}

export default Login;
