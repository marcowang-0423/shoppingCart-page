import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";

import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />{" "}
          <Route path="/home/:pageName" component={Home} />{" "}
          <Route path="/product/:productId" component={Product} />{" "}
          <Route path="/ShoppingCart" component={ShoppingCart} />{" "}
        </Switch>{" "}
      </BrowserRouter>{" "}
    </StoreProvider>
  );
}

export default App;
