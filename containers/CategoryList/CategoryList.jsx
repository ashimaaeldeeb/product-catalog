import React, { useState } from "react";
import { Stack, FlatList } from "native-base";
import CategoryListItem from "../../components/CategoryListItem";

export default function CategoryList({ categories }) {
  const [selectedCat, setSelectedCat] = useState(categories[0]);
  return (
    <Stack mt={5}>
      <FlatList
        ml={3}
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <CategoryListItem
            category={item}
            selectedCat={selectedCat === item}
            onSelectCat={() => {
              setSelectedCat(item);
            }}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </Stack>
  );
}
