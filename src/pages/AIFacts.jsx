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
      <Button onClick={goToAIPage} colorScheme="blue">
        Sužinoti daugiau
      </Button>
      {/* Content can be populated here with facts about AI */}
    </Box>
  );
};

export default AIFacts;
