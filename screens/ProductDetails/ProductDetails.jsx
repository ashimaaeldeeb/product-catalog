import { View, Text } from "react-native";
import React from "react";
import { Box, NativeBaseProvider } from "native-base";

export default function ProductDetails() {
  return (
    <NativeBaseProvider>
      <Box>
        <Text>ProductDetails</Text>
      </Box>
    </NativeBaseProvider>
  );
}
