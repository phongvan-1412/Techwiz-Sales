export const productSelector = (state) => {
  const products = state.product.products.filter((product) => {
    return product.category_name.includes(state.product.filter.category_name);
  });
  return products;
};

export const categorySelector = (state) => {
  const tmpCategories = state.categories.categories.filter((category) => {
    return category.category_root_name.includes(
      state.categories.filter.category_name
    );
  });
  return tmpCategories;
};
