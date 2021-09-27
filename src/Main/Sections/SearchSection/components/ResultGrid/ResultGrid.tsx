import { SimpleGrid, Box } from "@chakra-ui/react";
import React, { useContext } from "react";

import Card from "../../../../Components/Card";
import { DealStateContext } from "../../../../Context/DealsContext";
import { Deal } from "../../../../Context/DealsContext/type";

function ResultGrid() {
  const state = useContext(DealStateContext);
  const deals: any = state[0] || [];


  return (
    <SimpleGrid columns={2} spacing={10}>
      {deals?.map((item: Deal, index: number) => (
        <Box key={index}>
          <Card
            name={item.name}
            price={item.price}
            city={item.city}
            available_on={item.available_on}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default ResultGrid;
