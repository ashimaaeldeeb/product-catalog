export const selectCategoriesName = (categories) => {
  const catsName = categories?.map(function (item) {
    return item["name"];
  });
  return ["All", ...catsName];
};
