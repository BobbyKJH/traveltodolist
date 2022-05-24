import React from "react";
import styles from "./ExchangePage.module.css";
import Exchage from "../components/exchange/Exchage";
import Nav from "../components/Nav";

// 환전 페이지
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
