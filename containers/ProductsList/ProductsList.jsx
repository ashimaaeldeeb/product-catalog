import { View, Text } from "react-native";
import React from "react";
import { FlatList, Stack } from "native-base";
import ProductCard from "../../components/productCard";
import styles from "./ProductsList.styles";

export default function ProductsList({ products, navigation }) {
  return (
    <FlatList
      data={products}
      style={styles.container}
      renderItem={({ item }) => (
        <ProductCard key={item.id} product={item} navigation={navigation} />
      )}
      numColumns={2}
    />
  );
}
