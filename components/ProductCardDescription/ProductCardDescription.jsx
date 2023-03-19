import { Box, Text } from "native-base";
import React from "react";
import colors from "../../themes/colors";

export default function ProductCardDescription({ product }) {
  return (
    <Box>
      <Text numberOfLines={2} color={colors.dark_purple}>
        {product.description}
      </Text>
      <Text bold mt={1} color={colors.dark_purple} fontSize={20}>
        ${product.price}
      </Text>
    </Box>
  );
}
