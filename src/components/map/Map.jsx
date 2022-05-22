import React, { useState } from "react";
import styles from "../../componentsCSS/Map.module.css";
import MapSelect from "./MapSelect";

export default function Map() {
  const [asia, setAsia] = useState(true);
  const [europe, setEurope] = useState(false);
  const Asia = () => {
    setAsia(true);
  };

  const EU = () => {
    setEurope(true);
    setAsia(false);
  };
  return (
    <div>
      <div className={styles.btnSelect}>
        <button className={styles.btn} onClick={Asia}>
          아시아
        </button>
        <button className={styles.btn} onClick={EU}>
          유럽
        </button>
        <button className={styles.btn} onClick={EU}>
          유럽
        </button>
        <button className={styles.btn} onClick={EU}>
          유럽
        </button>
        <button className={styles.btn} onClick={EU}>
          유럽
        </button>
      </div>

      <div className={styles.continent}>
        {asia && (
          <MapSelect country={"https://bobbykjh.github.io/json/asia.json"} />
        )}

        {europe && (
          <MapSelect country={"https://bobbykjh.github.io/json/eu.json"} />
        )}
      </div>
    </div>
  );
}
