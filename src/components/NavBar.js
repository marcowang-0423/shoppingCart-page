import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <NavItem
        to="/home/tableware"
        className="nav-item"
        activeClassName="nav-item--active"
      >
        Tableware
      </NavItem>
      <NavItem
        to="/home/cookware"
        className="nav-item"
        activeClassName="nav-item--active"
      >
        Cookware
      </NavItem>
      <NavItem
        to="/home/home-accessories"
        className="nav-item"
        activeClassName="nav-item--active"
      >
        Home accessories
      </NavItem>
      <NavItem
        to="/home/lighting"
        className="nav-item"
        activeClassName="nav-item--active"
      >
        Lighting
      </NavItem>
      <NavItem
        to="/home/textile"
        className="nav-item"
        activeClassName="nav-item--active"
      >
        Textile
      </NavItem>
      <NavItem
        to="/home/furniture"
        className="nav-item"
        activeClassName="nav-item--active"
      >
        Furniture
      </NavItem>
    </div>
  );
}
