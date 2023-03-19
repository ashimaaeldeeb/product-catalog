import React, { useMemo } from "react";
import { Text } from "native-base";
import { useSelector, useDispatch } from "react-redux";
import Screen from "../../containers/Screen/Screen";
import CategoryList from "../../containers/CategoryList/CategoryList";
import { useGetCategories } from "../../services/getCategories";
import { filterProducts } from "../../Utils/helpers";
import { useGetProducts } from "../../services/getProducts";
import { categorySelector } from "../../redux/category/categoriesSelectors";
import ProductsList from "../../containers/ProductsList/ProductsList";
import { all } from "../../Utils/constants";

export default function Products({ navigation }) {
  const { isLoading, error, data: categories, isSuccess } = useGetCategories();
  const {
    isLoading: isGetProductLoading,
    error: isGetProductError,
    data: products,
    isSuccess: isGetProductSuccess,
  } = useGetProducts();

  const categoriesName = categories ? [all, ...categories] : [];
  const selectedCategory = useSelector(categorySelector);

  const filteredProducts =
    isGetProductSuccess && filterProducts(products, selectedCategory);

  return (
    <Screen title="Clothing">
      {/* list of categories   */}
      <CategoryList categories={categoriesName} />
      {/* total amount of products */}
      <Text bold ml={3} mt={5} fontSize={25}>
        {filteredProducts.length} items
      </Text>

      {/* products list */}
      <ProductsList products={filteredProducts} navigation={navigation} />
    </Screen>
  );
}
