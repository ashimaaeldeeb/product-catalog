import React from "react";
import { Center, NativeBaseProvider, Text, Pressable, Box } from "native-base";
import Icon from "../Icon/Icon";
import colors from "../../themes/colors";

export default function BottomBarItem({
  count,
  icon,
  text,
  isSelected = false,
}) {
  return (
    <NativeBaseProvider>
      <Pressable cursor="pointer" py="7" flex={1}>
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
        {count > 0 && (
          <Box
            rounded="full"
            width={5}
            height={5}
            bgColor={colors.yellow}
            alignSelf="flex-end"
            marginTop="-10"
            mr="7"
            justifyContent="center"
            alignItems="center"
            _text={{
              color: colors.white,
              fontSize: 12,
              allowFontScaling: true,
            }}
          >
            {count}
          </Box>
        )}
      </Pressable>
    </NativeBaseProvider>
  );
}
