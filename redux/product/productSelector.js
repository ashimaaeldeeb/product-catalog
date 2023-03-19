export const selectFavProducts = (state) => state.product.favProducts;

export const selectFavProductsCount = (state) =>
  state.product.favProducts.length;
