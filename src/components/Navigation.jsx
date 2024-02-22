import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" justifyContent="space-between" p="4">
      <Box>
        <Link as={RouterLink} to="/" m="2">
          Pradžia
        </Link>

        <Link as={RouterLink} to="/ai-facts" m="2">
          AI Faktai
        </Link>
        <Link as={RouterLink} to="/ai-details" m="2">
          AI Informacija
        </Link>
        <Link as={RouterLink} to="/world-news" m="2">
          Pasaulio Naujienos
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
