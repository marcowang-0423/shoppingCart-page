import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  PAGE_TITLE_SET,
  PAGE_CONTENT_SET,
  NAVBAR_ITEM_SET,
} from "../utils/constants";
import { StoreContext } from "../store";

import products from "../json/products.json";
import textile from "../json/textile.json";
import cookware from "../json/cookware.json";
import furniture from "../json/furniture.json";
import homeAccessories from "../json/home-accessories";
import lighting from "../json/lighting.json";
import tableware from "../json/tableware.json";

export default function NavItem(props) {
  const { children, to, className, activeClassName } = props;
  const { state, dispatch } = useContext(StoreContext);
  const getJSON = (url) => {
    switch (url) {
      case "/home/textile":
        return textile;
      case "/home/tableware":
        return tableware;
      case "/home/lighting":
        return lighting;
      case "/home/cookware":
        return cookware;
      case "/home/furniture":
        return furniture;
      case "/home/home-accessories":
        return homeAccessories;
      default:
        return products;
    }
  };

  const onClick = () => {
    console.log(children);
    dispatch({
      type: PAGE_TITLE_SET,
      payload: children,
    });
    dispatch({
      type: PAGE_CONTENT_SET,
      payload: getJSON(to),
    });
    dispatch({
      type: NAVBAR_ITEM_SET,
      payload: to,
    });
  };
  return (
    <Link to={to}>
      <div
        onClick={onClick}
        className={`
            ${className} 
            ${state.navBar.activeItem === to ? activeClassName : ""}`}
      >
        {children}
      </div>
    </Link>
  );
}
