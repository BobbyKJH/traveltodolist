import React from "react";
import styles from "./ContinentPage.module.css";
import Continent from "../components/continent/Continent";
import Nav from "../components/Nav";

// 나라 리스트
export default function ContinentPage() {
  return (
    <div>
      <Nav />
      <div className={styles.continent}>
        <Continent />
      </div>
    </div>
  );
}
