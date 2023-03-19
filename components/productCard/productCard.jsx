import React from "react";

import { Box, Container, Image, Pressable } from "native-base";
import colors from "../../themes/colors";
import { imageSize } from "../../Utils/constants";
import FavButton from "../FavButton/FavButton";
import ProductCardDescription from "../ProductCardDescription/ProductCardDescription";

export default function productCard({
  product,
  navigation,
  isFav,
  onFavButtonPress,
}) {
  return (
    <Container
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Box m={3}>
        <Pressable
          onPress={() => {
            navigation.navigate("ProductDetails", { product: product });
          }}
        >
          <Image
            alt={product.category}
            source={{
              uri: product.image,
            }}
            width={imageSize}
            height={imageSize}
            borderRadius={10}
            resizeMode="contain"
            backgroundColor={colors.white}
          />
        </Pressable>
        <FavButton isFav={isFav} onButtonPress={onFavButtonPress} />
        <ProductCardDescription product={product} />
      </Box>
    </Container>
  );
}
