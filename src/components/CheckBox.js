import { useContext } from "react";
import { StoreContext } from "../store";
import { CartIcon } from "./Icons";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../utils/constants";
import { Select, Button } from "antd";

const { Option } = Select;

export default function CheackBox() {
  const {
    state: { cartItems },
    dispatch,
  } = useContext(StoreContext);
  const addToCart = (product, qty) => {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty,
      },
    });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  };

  const getTotalPrice = () => {
    return cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
      : 0;
  };
  return (
    <div className="checkbox">
      {cartItems.length === 0 ? (
        <div>There is no project.</div>
      ) : (
        cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-content sidetext">
              <div className="cart-name">{item.name}</div>
            </div>
            <div className="cart-item-end">
              <div className="cart-price">${item.price * item.qty}</div>
            </div>
          </li>
        ))
      )}
    </div>
  );
}
