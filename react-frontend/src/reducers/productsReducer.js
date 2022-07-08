import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_ID,
} from "../actions/type";

const initialState = {
  products: [
    {
      product_SKU: "1",
      category_name: "Chocolate",
      emp_name: "Phuong",
      product_price: "65000",
      product_name: "Cadbury-Flake-(32g)",
      product_detail: "Enjoy both the crunchy and smooth of this delicious chocolate bar! The manufacturing process of Cadbury's Flake chocolate bar is still to be unveiled... and no other chocolate manufacturer has ever managed to recreate it. With its thin layers of chocolate pressed together, Flake is really a one-of-a-kind Cadbury chocolate bar.",
      product_thumbnail_name: "F107543_1_bb05.jpg",
    },
    {
      product_SKU: "2",
      category_name: "Chocolate",
      emp_name: "Phuong",
      product_price: "63000",
      product_name: "Balance-Milk-Chocolate-Bars-35g",
      product_detail: "Balance Belgian Milk Chocolate Bar is a healthier way to indulge your sweet tooth. Made with maltitol and free from sugar, Balance brings you the best bits of milk chocolate without the added sugar.",
      product_thumbnail_name: "F119628_1_4633.jpg",
    },
    {
      product_SKU: "3",
      category_name: "Chocolate",
      emp_name: "Phuong",
      product_price: "195000",
      product_name: "Ritter-Sport-Chocolate-Mini-Collection-(250g)",
      product_detail: "Enjoy both the crunchy and smooth of this delicious chocolate bar! The manufacturing process of Cadbury's Flake chocolate bar is still to be unveiled... and no other chocolate manufacturer has ever managed to recreate it. With its thin layers of chocolate pressed together, Flake is really a one-of-a-kind Cadbury chocolate bar.",
      product_thumbnail_name: "item_F122983_423c.jpg",
    },
    {
      product_SKU: "4",
      category_name: "Chocolate",
      emp_name: "Phuong",
      product_price: "210000",
      product_name: "Snickers-Chocolate-(51g)",
      product_detail: "The candy is covered with chocolate, fatty, greasy but not too sweet. Convenient and delicious when eaten cold",
      product_thumbnail_name: "F104593_1_2746.jpg",
    },
    {
      product_SKU: "5",
      category_name: "Chocolate",
      emp_name: "Phuong",
      product_price: "63000",
      product_name: "Balance-Dark-Chocolate-Bar-35g",
      product_detail: "We have carefully selected the best ingredients to create our Stevia dark chocolate bar. So what you experience is a luxurious, velvety chocolate that has the rich deep taste that comes with dark chocolate.",
      product_thumbnail_name: "F119627_1_c835.jpg",
    },
    {
      product_SKU: "6",
      category_name: "Chocolate",
      emp_name: "Phuong",
      product_price: "199000",
      product_name: "Lindt-Lindor-Assorted-Box-(168g)",
      product_detail: "Finest Cocoa, Unique Roasting & Grinding, The Lindt Invention, Best Ingredients, Finishing With Perfection",
      product_thumbnail_name: "F122061_Lindt_Lindor_Assorted_168g_00b9_b9d5.jpg",
    },
    {
      product_SKU: "7",
      category_name: "FRESH FOOD",
      emp_name: "Phuong",
      product_price: "185000",
      product_name: "Harry's-Dark-Chocolate-DooWap-(320g)",
      product_detail: "Enjoy both the crunchy and smooth of this delicious chocolate bar! The manufacturing process of Cadbury's Flake chocolate bar is still to be unveiled... and no other chocolate manufacturer has ever managed to recreate it. With its thin layers of chocolate pressed together, Flake is really a one-of-a-kind Cadbury chocolate bar.",
      product_thumbnail_name: "F107543_1_bb05.jpg",
    },
    {
      product_SKU: "8",
      category_name: "FRESH FOOD",
      emp_name: "Phuong",
      product_price: "252000",
      product_name: "Harry's-Brioche-Bread-Nature-(500g)",
      product_detail: "Balance Belgian Milk Chocolate Bar is a healthier way to indulge your sweet tooth. Made with maltitol and free from sugar, Balance brings you the best bits of milk chocolate without the added sugar.",
      product_thumbnail_name: "F119628_1_4633.jpg",
    },
    {
      product_SKU: "9",
      category_name: "FRESH FOOD",
      emp_name: "Phuong",
      product_price: "268000",
      product_name: "Harry's-Nature-Brioche-Bread-Slides-(485g)",
      product_detail: "Enjoy both the crunchy and smooth of this delicious chocolate bar! The manufacturing process of Cadbury's Flake chocolate bar is still to be unveiled... and no other chocolate manufacturer has ever managed to recreate it. With its thin layers of chocolate pressed together, Flake is really a one-of-a-kind Cadbury chocolate bar.",
      product_thumbnail_name: "item_F122983_423c.jpg",
    },
    {
      product_SKU: "10",
      category_name: "FRESH FOOD",
      emp_name: "Phuong",
      product_price: "328000",
      product_name: "Harry's-Chocolate-chips-Brioche-Bread-(500g)",
      product_detail: "The candy is covered with chocolate, fatty, greasy but not too sweet. Convenient and delicious when eaten cold",
      product_thumbnail_name: "F104593_1_2746.jpg",
    },
    {
      product_SKU: "11",
      category_name: "FRESH FOOD",
      emp_name: "Phuong",
      product_price: "63000",
      product_name: "Harry's-Chocolate-chips-Brioche-Bread-(500g)",
      product_detail: "We have carefully selected the best ingredients to create our Stevia dark chocolate bar. So what you experience is a luxurious, velvety chocolate that has the rich deep taste that comes with dark chocolate.",
      product_thumbnail_name: "F119627_1_c835.jpg",
    },
    {
      product_SKU: "12",
      category_name: "FRESH FOOD",
      emp_name: "Phuong",
      product_price: "180000",
      product_name: "Harry's-Dark-Chocolate-DooWap-(320g)",
      product_detail: "Finest Cocoa, Unique Roasting & Grinding, The Lindt Invention, Best Ingredients, Finishing With Perfection",
      product_thumbnail_name: "F122061_Lindt_Lindor_Assorted_168g_00b9_b9d5.jpg",
    },
    {
      product_SKU: "13",
      category_name: "DRINKS",
      emp_name: "Phuong",
      product_price: "127000",
      product_name: "Mort-Subite-Cherry-Flavor-Beer-(330ml)",
      product_detail: "Enjoy both the crunchy and smooth of this delicious chocolate bar! The manufacturing process of Cadbury's Flake chocolate bar is still to be unveiled... and no other chocolate manufacturer has ever managed to recreate it. With its thin layers of chocolate pressed together, Flake is really a one-of-a-kind Cadbury chocolate bar.",
      product_thumbnail_name: "F107543_1_bb05.jpg",
    },
    {
      product_SKU: "14",
      category_name: "DRINKS",
      emp_name: "Phuong",
      product_price: "184000",
      product_name: "Val-De-Rance-Cru-Breton-Dry-Cider (750ml)",
      product_detail: "Balance Belgian Milk Chocolate Bar is a healthier way to indulge your sweet tooth. Made with maltitol and free from sugar, Balance brings you the best bits of milk chocolate without the added sugar.",
      product_thumbnail_name: "F119628_1_4633.jpg",
    },
    {
      product_SKU: "15",
      category_name: "DRINKS",
      emp_name: "Phuong",
      product_price: "195000",
      product_name: "Old-Jamaica-Ginger-Beer-Can-(330ml)",
      product_detail: "Enjoy both the crunchy and smooth of this delicious chocolate bar! The manufacturing process of Cadbury's Flake chocolate bar is still to be unveiled... and no other chocolate manufacturer has ever managed to recreate it. With its thin layers of chocolate pressed together, Flake is really a one-of-a-kind Cadbury chocolate bar.",
      product_thumbnail_name: "item_F122983_423c.jpg",
    },
    {
      product_SKU: "16",
      category_name: "DRINKS",
      emp_name: "Phuong",
      product_price: "156000",
      product_name: "BrewDog-Dead-Pony-Ale-Beer-Bottle-(330ml)",
      product_detail: "The candy is covered with chocolate, fatty, greasy but not too sweet. Convenient and delicious when eaten cold",
      product_thumbnail_name: "F104593_1_2746.jpg",
    },
    {
      product_SKU: "17",
      category_name: "DRINKS",
      emp_name: "Phuong",
      product_price: "163000",
      product_name: "Val-De-France-L'Authentique-French-Pear-Cider-(330ml)",
      product_detail: "We have carefully selected the best ingredients to create our Stevia dark chocolate bar. So what you experience is a luxurious, velvety chocolate that has the rich deep taste that comes with dark chocolate.",
      product_thumbnail_name: "F119627_1_c835.jpg",
    },
    {
      product_SKU: "18",
      category_name: "DRINKS",
      emp_name: "Phuong",
      product_price: "199.000",
      product_name: "Val-De-France-L'Authentique-French-Pear-Cider-(330ml)",
      product_detail: "Finest Cocoa, Unique Roasting & Grinding, The Lindt Invention, Best Ingredients, Finishing With Perfection",
      product_thumbnail_name: "F122061_Lindt_Lindor_Assorted_168g_00b9_b9d5.jpg",
    },
  ],
  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        //products: action.payload
      };

    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.category_id === action.payload
        ),
      };

    case GET_PRODUCTS_BY_ID:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.product_SKU === action.payload
        ),
      };

    default:
      return state;
  }
}
