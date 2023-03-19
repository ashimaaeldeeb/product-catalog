import React from "react";
import { Stack, FlatList } from "native-base";
import CategoryListItem from "../../components/CategoryListItem";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../../redux/category/categoriesSlice";
import { categorySelector } from "../../redux/category/categoriesSelectors";

export default function CategoryList({ categories }) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(categorySelector);

  return (
    <Stack mt={5}>
      <FlatList
        ml={3}
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <CategoryListItem
            category={item}
            selectedCat={selectedCategory === item}
            onSelectCat={() => {
              dispatch(setSelectedCategory(item));
            }}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </Stack>
  );
}
