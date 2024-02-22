import { useEffect, useState } from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

const Index = () => {
  const [newsContent, setNewsContent] = useState("Čia bus rodomos naujienos. Prašome palaukti atnaujinimo.");

  useEffect(() => {
    document.title = "Naujienų Portalas - www.naujienu-portalas.lt";

    const updateNews = () => {
      // This function would fetch new news content, for now it sets placeholder text.
      setNewsContent(`Naujiena atnaujinta: ${new Date().toLocaleTimeString()}. Čia bus rodomos naujienos.`);
    };

    const intervalId = setInterval(updateNews, 3600000); // Update every hour (3600000 milliseconds)

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="2xl" textAlign="center" mb={6}>
        Naujienų Portalas
      </Heading>
      <Text>{newsContent}</Text>
    </VStack>
  );
};

export default Index;
