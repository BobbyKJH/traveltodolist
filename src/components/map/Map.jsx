import React, { useState, useEffect } from "react";
import styles from "./Map.module.css";
import MapSelect from "./MapSelect";

export default function Map() {
  const [asia, setAsia] = useState("https://bobbykjh.github.io/json/eu.json");

  const Asia = () => {
    setAsia("https://bobbykjh.github.io/json/asia.json");
  };

  const EU = () => {
    setAsia("https://bobbykjh.github.io/json/eu.json");
  };

  const Africa = () => {
    setAsia("https://bobbykjh.github.io/json/africa.json");
  };

  const Oceania = () => {
    setAsia("https://bobbykjh.github.io/json/oceania.json");
  };

  const America = () => {
    setAsia("https://bobbykjh.github.io/json/america.json");
  };
  return (
    <div>
      <div className={styles.btnSelect}>
        <button className={styles.btn} onClick={EU}>
          유럽
        </button>
        <button className={styles.btn} onClick={Asia}>
          아시아
        </button>
        <button className={styles.btn} onClick={Africa}>
          아프리카
        </button>
        <button className={styles.btn} onClick={Oceania}>
          오세아니아
        </button>
        <button className={styles.btn} onClick={America}>
          아메리카
        </button>
      </div>

      <div className={styles.continent}>
        {asia && <MapSelect country={asia} />}
      </div>
    </div>
  );
}
