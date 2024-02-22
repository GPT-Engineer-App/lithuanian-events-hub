import { Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const AdminLogin = () => {
  return (
    <VStack spacing="4" p="8">
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button colorScheme="blue" width="full">
        Admin Login
      </Button>
    </VStack>
  );
};

export default AdminLogin;
