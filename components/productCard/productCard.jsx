import { View } from "react-native";
import React from "react";
import { Box, Container, Image, Pressable, Text } from "native-base";
import colors from "../../themes/colors";
import { imageSize } from "../../Utils/constants";
import Icon from "../Icon/Icon";
import images from "../../themes/images";
import FavButton from "../FavButton/FavButton";
import ProductCardDescription from "../ProductCardDescription/ProductCardDescription";

export default function productCard({ product, navigation }) {
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
        <FavButton isFav />
        <ProductCardDescription product={product} />
      </Box>
    </Container>
  );
}
