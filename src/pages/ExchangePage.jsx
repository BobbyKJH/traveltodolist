import React from "react";
import styles from "../pageCSS/ExchangePage.module.css";
import Exchage from "../components/exchange/Exchage";
import Nav from "../components/Nav";

export default function ExchangePage() {
  return (
    <div>
      <Nav />
      <div className={styles.exchange}>
        <Exchage />
      </div>
    </div>
  );
}
