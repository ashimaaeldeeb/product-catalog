import React from "react";
import { Box, Text } from "native-base";
import Screen from "../../containers/Screen/Screen";
import colors from "../../themes/colors";

export default function ProductDetails({ navigation, route }) {
  const selectedProduct = route.params.product;

  return (
    <Screen hasBackButton onBackButtonPress={() => navigation.goBack()}>
      <Box flex={1} bgColor={colors.bg} pt={5} pl={4} pr={6}>
        <Text fontSize={19} color={colors.dark_purple} lineHeight={23}>
          {selectedProduct.description}
        </Text>

        <Text mt={8} bold fontSize={"2xl"} color={colors.dark_purple}>
          ${selectedProduct.price}
        </Text>
      </Box>
    </Screen>
  );
}
