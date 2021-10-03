import { StarIcon } from "@chakra-ui/icons";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";

import { SlidePriceProps } from "./types";

function SlidePrice({ onChange }: SlidePriceProps) {
  return (
    <>
      <Text fontSize='lg' mb='4'>Search by price</Text>

      <Slider
        aria-label="slider-ex-4"
        onChangeEnd={onChange}
        defaultValue={200}
        min={200}
        max={350}
        step={1}
      >
        <SliderTrack bg='red.100'>
          <SliderFilledTrack bg='red.300' />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color="red" as={StarIcon} />
        </SliderThumb>
      </Slider>
    </>
  );
}

export default SlidePrice;
