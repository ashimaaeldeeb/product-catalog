import React from "react";
import { Box, HStack, Pressable, Center } from "native-base";
import colors from "../../themes/colors";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "../Icon/Icon";
import images from "../../themes/images";

export default function ScreenHeader({
  hasBackButton,
  title,
  onBackButtonPress,
}) {
  return (
    <LinearGradient
      colors={[colors.dark_purple, colors.light_purple]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {hasBackButton && (
        <HStack safeAreaTop pb="5" pl="4">
          <Pressable onPress={onBackButtonPress}>
            <Icon icon={images.arrow_left} />
          </Pressable>
        </HStack>
      )}
      {title && (
        <Box safeAreaTop pb="5" justifyContent="center">
          <Center
            _text={{
              color: colors.white,
              bold: true,
              fontSize: "xl",
            }}
          >
            {title}
          </Center>
        </Box>
      )}
    </LinearGradient>
  );
}
