import React from "react";
import { Center, NativeBaseProvider, Text, Pressable } from "native-base";
import Icon from "../Icon/Icon";
import colors from "../../themes/colors";

export default function BottomBarItem({ icon, text, isSelected = false }) {
  return (
    <NativeBaseProvider>
      <Pressable cursor="pointer" py="7" flex={1} onPress={() => {}}>
        <Center>
          <Icon icon={icon} />
          <Text
            color={isSelected ? colors.purple : colors.gray}
            fontSize="10"
            lineHeight={13}
            bold
          >
            {text}
          </Text>
        </Center>
      </Pressable>
    </NativeBaseProvider>
  );
}
