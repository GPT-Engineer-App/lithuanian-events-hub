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
      <Button
        colorScheme="blue"
        width="full"
        onClick={() => {
          const emailInput = document.getElementById("email").value;
          const passwordInput = document.getElementById("password").value;
          if (emailInput === "tomasjuodiska2@gmail.com" && passwordInput === "Xal53045") {
            console.log("Admin successfully logged in");
          } else {
            console.log("Admin login failed: Incorrect credentials");
          }
        }}
      >
        Admin Login
      </Button>
    </VStack>
  );
};

export default AdminLogin;
