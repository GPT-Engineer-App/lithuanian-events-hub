import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AIFacts = () => {
  const navigate = useNavigate();

  const goToAIPage = () => {
    // Assuming there's a dedicated route for AI facts that might have been missed in the update request
    navigate("/ai-facts");
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
