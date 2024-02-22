import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleAdminLogin = (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    // Updated admin credentials for the first-time setup to match the provided credentials
    const adminCredentials = {
      email: "tomasjuodiska2@gmail.com",
      password: "kandilakis",
    };
    localStorage.setItem("admin", JSON.stringify(adminCredentials));
    const storedAdmin = adminCredentials;

    if (storedAdmin && storedAdmin.email === emailInput && storedAdmin.password === passwordInput) {
      navigate("/");
    } else {
      alert("Admin login failed: Incorrect credentials");
    }
  };

  return (
    <Box>
      <VStack spacing={4} as="form" onSubmit={handleAdminLogin}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Admin Login
        </Button>
      </VStack>
    </Box>
  );
};

export default AdminLogin;
