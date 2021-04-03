import { useContext } from "react";
import { StoreContext } from "../store";
import { CartIcon } from "./Icons";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../utils/constants";
import { Select, Button } from "antd";
import CheckBox from "./CheckBox";
import { Row, Col } from "antd";

const { Option } = Select;

export default function CheckOut() {
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
    <div>
      <Row gutter={[32, 32]}>
        <Col lg={{ span: 19, offset: 0.5 }}>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-content">
                  <div className="cart-name">{item.name}</div>
                  <div className="product-qty">
                    Qty: {"   "}
                    <Select
                      defaultValue={item.qty}
                      className="select-style"
                      onChange={(val) => addToCart(item, val)}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <Option key={x + 1} value={x + 1}>
                          {x + 1}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className="cart-item-end">
                  <div className="cart-price">${item.price * item.qty}</div>
                  <div
                    className="cart-item-delete"
                    onClick={() => removeFromCart(item.id)}
                  >
                    x
                  </div>
                </div>
              </li>
            ))
          )}
          <div className="cart-total-price-wrap">
            Total
            <div className="cart-total-price">${getTotalPrice()}</div>
          </div>
        </Col>
        <Col lg={{ span: 4 }}>
          <CheckBox />
        </Col>
      </Row>
      <Button className="cart-modal-btn" type="primary">
        <CartIcon size={20} />
        <span style={{ marginLeft: 12 }}>Start Checkout</span>
      </Button>
    </div>
  );
}
