import products from "../json/products.json";
import textile from "../json/textile.json";
import cookware from "../json/cookware.json";
import furniture from "../json/furniture.json";
import homeAccessories from "../json/home-accessories";
import lighting from "../json/lighting.json";
import tableware from "../json/tableware.json";

export const getJSON = (url) => {
  switch (url) {
    case "/":
      return products;
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
