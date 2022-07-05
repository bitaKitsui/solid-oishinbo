import type { Component } from 'solid-js';
import { Routes, Route, Link } from "solid-app-router"
import styles from './App.module.css';
import { Counter } from "./components/Counter";
import { Search } from "./components/Search";
import { Confirm } from "./components/Confirm";

const App: Component = () => {
  return (
      <div class={styles.App}>
        <header>
          <h1>Oishinbo App</h1>
          <nav>
            <ul class={styles.navList}>
              <li>
                <Link href={"/"} class={styles.link}>Counter</Link>
              </li>
              <li>
                <Link href={"/search"} class={styles.link}>Search</Link>
              </li>
              <li>
                <Link href={"/confirm"} class={styles.link}>Confirm</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path={"/"} element={<Counter />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/confirm"} element={<Confirm />} />
        </Routes>
      </div>
  );
};

export default App;
