import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" justifyContent="space-between" p="4">
      <Box>
        <Link as={RouterLink} to="/" m="2">
          Home
        </Link>
        <Link as={RouterLink} to="/register" m="2">
          Register
        </Link>
        <Link as={RouterLink} to="/login" m="2">
          Login
        </Link>
        <Link as={RouterLink} to="/admin-login" m="2">
          Admin Login
        </Link>
        <Link as={RouterLink} to="/ai-facts" m="2">
          AI Faktai
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
