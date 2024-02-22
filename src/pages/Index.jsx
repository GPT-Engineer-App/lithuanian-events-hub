import { useEffect } from "react";
import { VStack, Heading, Button, Text, Link } from "@chakra-ui/react";
import { FaPaypal, FaComments, FaEnvelope } from "react-icons/fa";

const Index = () => {
  useEffect(() => {
    document.title = "Naujienos";
  }, []);

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="2xl" textAlign="center">
        Lietuvos Renginių Portalas
      </Heading>

      <Text textAlign="center">Norėdami prisidėti prie mūsų, prašome prisijungti arba užsiregistruoti.</Text>
      {/* Šis mygtukas yra tik vizualinis elementas, nes faktinė PayPal integracija negali būti atlikta be serverio pusės programavimo. */}
      <Button as="a" href="/register" colorScheme="blue" variant="solid">
        Registracija
      </Button>
      <Button as="a" href="/login" colorScheme="green" variant="solid">
        Prisijungti
      </Button>
    </VStack>
  );
};

export default Index;
