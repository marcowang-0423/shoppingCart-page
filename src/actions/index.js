import {
  PAGE_CONTENT_SET,
  NAVBAR_ITEM_SET,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} from "../utils/constants";

export const addCartItem = (dispatch, product, qty) => {
  const item = {
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    countInStock: product.countInStock,
    qty,
  };
  dispatch({
    type: CART_ADD_ITEM,
    payload: item,
  });
};

export const removeCartItem = (dispatch, productId) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: productId,
  });
};

export const setPageContent = (dispatch, title, products) => {
  dispatch({
    type: PAGE_CONTENT_SET,
    payload: { title, products },
  });
};

export const setActiveNavItem = (dispatch, activeNavItem) => {
  dispatch({
    type: NAVBAR_ITEM_SET,
    payload: activeNavItem,
  });
};
