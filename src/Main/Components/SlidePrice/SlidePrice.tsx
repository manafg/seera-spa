import { StarIcon } from "@chakra-ui/icons";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import React from "react";

import { SlidePriceProps } from "./types";

function SlidePrice({ onChange }: SlidePriceProps) {
  return (
    <Slider aria-label="slider-ex-4" onChangeEnd={onChange} defaultValue={200} min={200} max={350} step={1}>
      <SliderTrack  bg="blue.100">
        <SliderFilledTrack bg="blue" />
      </SliderTrack>
      <SliderThumb boxSize={6}>
        <Box color='blue' as={StarIcon} />
      </SliderThumb>
    </Slider>
  );
}

export default SlidePrice;
