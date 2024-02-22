import { useEffect } from "react";
import { VStack, Heading, Button, Text, Link } from "@chakra-ui/react";
import { FaPaypal, FaComments, FaEnvelope } from "react-icons/fa";

const Index = () => {
  useEffect(() => {
    document.title = "Naujienų Portalas - www.naujienu-portalas.lt";
  }, []);

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="2xl" textAlign="center">
        Naujienų Portalas
      </Heading>

      <Text textAlign="center">Norėdami prisidėti prie mūsų, prašome prisijungti arba užsiregistruoti.</Text>
    </VStack>
  );
};

export default Index;
