import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

function Login() {
  return (
    <Box>
      <VStack spacing={4} as="form" onSubmit={(e) => e.preventDefault()}>
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
