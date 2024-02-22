import { VStack, Heading, Button, Text, Link } from "@chakra-ui/react";
import { FaPaypal, FaComments, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="2xl" textAlign="center">
        Lietuvos Renginių Portalas
      </Heading>

      <Text textAlign="center">Norėdami prisidėti prie mūsų, prašome prisijungti arba užsiregistruoti.</Text>
      {/* Šis mygtukas yra tik vizualinis elementas, nes faktinė PayPal integracija negali būti atlikta be serverio pusės programavimo. */}
      <Button as={Link} to="/register" colorScheme="blue" variant="solid">
        Registracija
      </Button>
      <Button as={Link} to="/login" colorScheme="green" variant="solid">
        Prisijungti
      </Button>
      <Link href="https://www.paypal.com/donate?business=senderlithuania%40gmail.com" isExternal>
        <Button leftIcon={<FaPaypal />} colorScheme="blue" variant="outline">
          Paaukoti per PayPal
        </Button>
      </Link>
    </VStack>
  );
};

export default Index;
