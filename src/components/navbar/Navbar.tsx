import type { Component, Setter } from "solid-js";
import "./Navbar.scss";

interface NavBarProps {
  routes: string[];
  selectedRoute: Setter<string>
}

export const NavBar: Component<NavBarProps> = ({ routes, selectedRoute }) => {
  const handleSelectedRoute = (route: string) => {
    selectedRoute(route);
  };
  return (
    <div class="navbar">
      <p class="font">DAVID TAYLOR</p>
      <div class="spacer" />
      {routes.map((route) => (
        <Route route={route} onClick={handleSelectedRoute} />
      ))}
    </div>
  );
};

interface RouteProps {
  route: string;
  onClick: (route: string) => void;
}

const Route: Component<RouteProps> = ({ route, onClick }) => {
  const handleSelectedRoute = () => {
    onClick(route);
  };
  return (
    <div onClick={handleSelectedRoute}>
      <p class="navigation-button">{route}</p>
    </div>
  );
};
