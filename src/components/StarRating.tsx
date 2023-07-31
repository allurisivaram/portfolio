import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Radio, HStack, Box } from "@chakra-ui/react";

type Props = {
    rating: any;
    setRating: any;
    count: any;
    size: any;
}

const StarRating = ({ rating, setRating, count, size }:Props) => {
  // count:  number of stars you want, pass as props
  //size: size of star that you want

  const [hover, setHover] = useState(null);
  return (
    <HStack spacing={"2px"}>
      {[...Array(count || 5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <Box
            as="label"
            key={index}
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          >
            {/* <Radio
              name="rating"
              onChange={() => setRating(ratingValue)}
              value={ratingValue}
            ></Radio> */}
            <FaStar
              cursor={"pointer"}
              size={size || 12}
              transition="color 200ms"
            />
          </Box>
        );
      })}
    </HStack>
  );
}

export default StarRating;
