import { useContext } from "react";
import { Link } from "react-router-dom";
import { setPageContent, setActiveNavItem } from "../actions";
import { StoreContext } from "../store";
import NavBar from "./NavBar";
import products from "../json/products.json";
import CartSummary from "./CartSummary";
import { getJSON } from "../api";

export default function Header({ title }) {
  const { dispatch } = useContext(StoreContext);
  const onClickHeader = () => {
    setPageContent(dispatch, "NORDIC NEST Shopping Cart", getJSON("/"));
    setActiveNavItem(dispatch, "/");
  };

  return (
    <header className="header">
      <div className="header-wrap">
        <div className="header-text" onClick={onClickHeader}>
          <Link to="/">
            <h1 className="header-title"> {title} </h1>{" "}
          </Link>{" "}
          <p className="header-slogan">
            An example made by Create - React - App.{" "}
          </p>{" "}
        </div>{" "}
        <CartSummary />
      </div>

      <hr className="hr-header-line" />
      <NavBar />
    </header>
  );
}
