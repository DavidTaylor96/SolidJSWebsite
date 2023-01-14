import { Component, createEffect, createSignal } from "solid-js";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { NavBar } from "./components/navbar/navbar";
import type { Accessor } from "solid-js";

const App: Component = () => {
  const [theme, setTheme] = createSignal("light" as string);
  const [selectedRoute, setSelectedRoute] = createSignal("HOME" as string);
  const Routes = ["HOME", "ABOUT", "WORK", "CONTACT"];


  createEffect(() => {
    // TODO: Find out if the broswer is in dark mode and set the theme accordingly
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      const newColorScheme = event.matches ? "dark" : "light";
      setTheme(newColorScheme);
  });
  });

  return (
    <div class={styles.App}>
      <NavBar routes={Routes} selectedRoute={setSelectedRoute} />
    </div>
  );
};

export default App;
