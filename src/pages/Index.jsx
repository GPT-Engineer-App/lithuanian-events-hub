import { useEffect, useState } from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

const Index = () => {
  const [newsContent, setNewsContent] = useState("Čia bus rodomos naujienos. Prašome palaukti atnaujinimo.");

  const initialNewsContent = `Naujiena skelbiama: ${new Date().toLocaleTimeString()}. Didžiulės eilės prie pasienio kontrolės punktų - tai tampa vis didesniu iššūkiu. Ekspertai teigia, kad artėjant atostogų sezonui, situacija tik pablogės. Transporto įmonių atstovai reikalauja skubių veiksmų problemai spręsti. Be to, naujausios technologijos leidžia mums prognozuoti orus tiksliau nei bet kada anksčiau, tačiau ar tai padeda išvengti stichinių nelaimių? Mokslininkai mano, kad turime investuoti daugiau lėšų į prevencines priemones.`;

  useEffect(() => {
    document.title = "Naujienų Portalas - www.naujienu-portalas.lt";
    setNewsContent(initialNewsContent);

    const updateNews = () => {
      // This function would fetch new news content, for now it sets placeholder text.
      setNewsContent(`Naujiena atnaujinta: ${new Date().toLocaleTimeString()}. Čia bus rodomos naujienos. (Placeholder for dynamically updated news every hour.)`);
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
