import React from "react";
import { Box, Text, Pressable } from "native-base";
import colors from "../../themes/colors";

export default function CategoryListItem({
  category,
  onSelectCat,
  selectedCat,
}) {
  return (
    <Box
      bg={selectedCat ? colors.yellow : colors.white}
      mr={3}
      px={3}
      py={1}
      borderRadius={20}
    >
      <Pressable onPress={onSelectCat}>
        <Text color={selectedCat ? colors.white : colors.dark_purple}>
          {category}
        </Text>
      </Pressable>
    </Box>
  );
}
