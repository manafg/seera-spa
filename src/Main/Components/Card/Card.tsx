import { StarIcon } from "@chakra-ui/icons";
import { Badge, Image, Box } from "@chakra-ui/react";
import React from "react";

import { Deal } from "../../Context/DealsContext/type";

function Card({ name, price, city, available_on }: Deal) {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      bg='white'
      overflow='hidden'
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="red">
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize='xs'
            textTransform="uppercase"
            ml='2'
          >
            Available on : {available_on}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as='h4'
          lineHeight="tight"
          isTruncated={true}
        >
          {name}
        </Box>

        <Box>
          ${price}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "red.400" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            City:   {city}
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default Card;
