import { SimpleGrid, Box, Center, Button } from "@chakra-ui/react";
import React, { useContext } from "react";

import Card from "../../../../Components/Card";
import { DealStateContext } from "../../../../Context/DealsContext";
import { Deal } from "../../../../Context/DealsContext/type";
import { ResultGridProps } from "./types";

function ResultGrid({ clearSearch }: ResultGridProps) {
  const state = useContext(DealStateContext);
  const deals: any = state[0];

  return (
    <>
      {deals.length ? (
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
      ) : (
        <Center bg='#F7F7F7' mt='200px' ml='300px' color='black'>
          No Result match your search
          <Button p='3' colorScheme="red" variant="link" onClick={clearSearch}>
             Reset
          </Button>
        </Center>
      )}
    </>
  );
}

export default ResultGrid;
