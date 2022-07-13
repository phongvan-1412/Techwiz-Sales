export const productSelector = (state) => {
  const products = state.product.products.filter(
    (product) => product.category_name == state.product.filter.category_name
  );
  return products;
};
