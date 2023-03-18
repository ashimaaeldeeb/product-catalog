import { View, Text } from "react-native";
import React from "react";
import { Box, Center, NativeBaseProvider } from "native-base";

export default function Products() {
  return (
    <NativeBaseProvider>
      <Box>
        <Text>Products</Text>
      </Box>
    </NativeBaseProvider>
  );
}
