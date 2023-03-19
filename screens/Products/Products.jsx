import React from "react";
import { Text } from "native-base";
import { useSelector } from "react-redux";
import { Screen } from "../../containers";
import { CategoryList } from "../../containers";
import { useGetCategories } from "../../services/getCategories";
import { filterProducts } from "../../Utils/helpers";
import { useGetProducts } from "../../services/getProducts";
import { categorySelector } from "../../redux/category/categoriesSelectors";
import { ProductsList } from "../../containers";
import { all } from "../../Utils/constants";

export default function Products() {
  const { isLoading: isGetCategoriesLoading, data: categories } =
    useGetCategories();
  const {
    isLoading: isGetProductLoading,
    data: products,
    isSuccess: isGetProductSuccess,
  } = useGetProducts();

  const isLoading = isGetCategoriesLoading || isGetProductLoading;
  const categoriesName = categories ? [all, ...categories] : [];
  const selectedCategory = useSelector(categorySelector);

  const filteredProducts =
    isGetProductSuccess && filterProducts(products, selectedCategory);

  return (
    <Screen title="Clothing">
      {isLoading ? (
        <></>
      ) : (
        <>
          {/* list of categories   */}
          <CategoryList categories={categoriesName} />
          {/* total amount of products */}
          <Text bold ml={3} mt={5} fontSize={25}>
            {filteredProducts.length} items
          </Text>
          {/* products list */}
          <ProductsList products={filteredProducts} />
        </>
      )}
    </Screen>
  );
}
