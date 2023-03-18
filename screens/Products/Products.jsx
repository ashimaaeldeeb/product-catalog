import React from "react";
import Screen from "../../containers/Screen/Screen";
import CategoryList from "../../containers/CategoryList/CategoryList";
import { useGetCategories } from "../../services/getCategories";
import { selectCategoriesName } from "../../Utils/helpers";

export default function Products() {
  const { isLoading, error, data, isSuccess } = useGetCategories();
  const categories = isSuccess && selectCategoriesName(data.data);

  return (
    <Screen title="Clothing">
      <CategoryList categories={categories} />
    </Screen>
  );
}
