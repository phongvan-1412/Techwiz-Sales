export const productSelector = (state) => {
  const tmpCategories = state.categories.categories.filter((category) => {
    return category.category_root_name.includes(
      state.categories.filter.category_name
    );
  });
  let products = [];
  if (tmpCategories.length > 0) {
    tmpCategories.forEach(category=>{
      state.product.products.forEach((product) => {
        if(product.category_id == category.category_id)
        {
          products = [product,...products];
        }
      });
    })
  } else {
    products = state.product.products.filter((product) => {
      return product.category_name.includes(state.product.filter.category_name);
    });
  }
  console.log(products);
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

// SLIDE1
// export const slideCategorySelector1 = (state) => {
//   const slideCates = state.categories.categories.filter((category) => {
//     return category.category_root_name.includes("Sweet Grocery")
//   });
//   return slideCates;
// }

export const productSlideCategorySelector1 = (state) => {
  const productSlideCates = state.product.products.filter((products) => {
    return products.category_name.includes(state.product.filter1.category_name);
  });
  return productSlideCates;
};

export const productSlideCategorySelector2 = (state) => {
  const productSlideCates = state.product.products.filter((products) => {
    return products.category_name.includes(state.product.filter2.category_name);
  });
  return productSlideCates;
};

export const productSlideCategorySelector3 = (state) => {
  const productSlideCates = state.product.products.filter((products) => {
    return products.category_name.includes(state.product.filter3.category_name);
  });
  return productSlideCates;
};
