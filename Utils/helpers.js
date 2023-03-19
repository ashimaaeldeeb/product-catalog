import { all } from "./constants";

export const filterProducts = (products, category) => {
  if (category === all) return products;
  return products.filter((product) => product.category === category);
};
