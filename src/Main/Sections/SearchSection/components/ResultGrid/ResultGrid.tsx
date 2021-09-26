import { SimpleGrid, Box } from "@chakra-ui/react";
import React from "react";

import Card from "../../../../Components/Card";

function ResultGrid() {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box  >
        <Card />
      </Box>
      <Box >
        <Card />
      </Box>
      <Box  >
        <Card />
      </Box>
      <Box  >
        <Card />
      </Box>
      <Box  >
        <Card />
      </Box>
    </SimpleGrid>
  );
}

export default ResultGrid;
