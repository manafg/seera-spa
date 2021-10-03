import _ from "lodash";
import React from "react";

import SlidePrice from "../../../../Components/SlidePrice";
import useDealConfig from "../../../../hooks/useDealConfig";

function SearchSlidePrice() {
  const { searchByPriceSlider } = useDealConfig();

  const onChange = _.debounce((value: number) => {
    searchByPriceSlider(value);
  }, 1000);

  return <SlidePrice onChange={onChange} />;
}

export default SearchSlidePrice;
