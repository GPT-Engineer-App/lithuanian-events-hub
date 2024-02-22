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
        Interesting Facts about Artificial Intelligence
      </Text>
      <Button onClick={goToAIPage} colorScheme="blue">
        Learn More
      </Button>
      {/* Content can be populated here with facts about AI */}
    </Box>
  );
};

export default AIFacts;
