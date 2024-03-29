import { useContext, useEffect } from "react";
import { Button, notification } from "antd";
import { StoreContext } from "../store";
import { CART_ADD_ITEM } from "../utils/constants";
import { CartIcon } from "./Icons";
import { addCartItem } from "../actions";

export default function AddToCart({ product, qty }) {
  const {
    state: { cartItems },
    dispatch,
  } = useContext(StoreContext);

  const openNotification = () => {
    notification.open({
      message: "Shopping Notification",
      description: `${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} ${
        qty > 1 ? "have" : "has"
      } been added to your cart.`,
      onClick: () => {
        console.log("Notification Clicked!");
      },
      placement: "bottomRight",
    });
  };

  const addToCart = () => {
    openNotification();
    addCartItem(dispatch, product, qty);
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Button type="primary" className="btn-tocar" onClick={addToCart}>
      <CartIcon size={20} />
      <span style={{ marginLeft: 12 }}>Add To Shopping Bag</span>
    </Button>
  );
}
