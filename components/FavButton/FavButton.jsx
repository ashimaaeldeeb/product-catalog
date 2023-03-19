import React from "react";
import { Box, Pressable } from "native-base";
import Icon from "../Icon/Icon";
import colors from "../../themes/colors";
import images from "../../themes/images";

export default function FavButton({ isFav }) {
  return (
    <Pressable>
      <Box
        shadow={1}
        bgColor={colors.white}
        rounded="full"
        width={10}
        height={10}
        alignSelf="flex-end"
        mr={2}
        mt={-5}
        alignContent="center"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Icon
          icon={isFav ? images.ic_fav_selected : images.ic_fav_unselected}
        />
      </Box>
    </Pressable>
  );
}
