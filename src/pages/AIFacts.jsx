import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AIFacts = () => {
  const navigate = useNavigate();

  const goToAIPage = () => {
    navigate("/ai-details");
  };

  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>
        Įdomūs faktai apie dirbtinį intelektą
      </Text>

      <Text as="p" mb={2}>
        Ar žinojote, kad dirbtinis intelektas jau gali nuspėti orų pokyčius su didesniu tikslumu nei tradiciniai metodai?
      </Text>
      <Text as="p" mb={2}>
        Dirbtinis intelektas yra naudojamas medicinoje, padedant diagnozuoti ligas nuo vėžio iki retų genetinių sutrikimų.
      </Text>
      <Text as="p" mb={2}>
        Šachmatų programos, kurios naudoja dirbtinį intelektą, gali nugalėti pasaulio šachmatų čempionus.
      </Text>
      <Text as="p" mb={2}>
        AI technologijos yra svarbus elementas autonominių automobilių vystyme, leidžiančių transporto priemonėms važiuoti be vairuotojo įsikišimo.
      </Text>
      <Text as="p">Kasdien naudojame dirbtinį intelektą, net to nežinodami – nuo asmeninių asistentų iki rekomendacijų sistemos internetinėse parduotuvėse.</Text>
    </Box>
  );
};

export default AIFacts;
