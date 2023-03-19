import React from "react";
import { Box, FlatList } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/productCard";
import styles from "./ProductsList.styles";
import { selectFavProducts } from "../../redux/product/productSelector";
import { toggleFavProduct } from "../../redux/product/productSlice";

export default function ProductsList({ products, navigation }) {
  const selectedFavProducts = useSelector(selectFavProducts);
  const dispatch = useDispatch();

  return (
    <>
      <FlatList
        data={products}
        style={styles.container}
        renderItem={({ item }) => (
          <ProductCard
            key={item.id}
            product={item}
            navigation={navigation}
            isFav={selectedFavProducts?.includes(item.id)}
            onFavButtonPress={() => dispatch(toggleFavProduct(item.id))}
          />
        )}
        numColumns={2}
      />
      <Box height={20} />
    </>
  );
}
