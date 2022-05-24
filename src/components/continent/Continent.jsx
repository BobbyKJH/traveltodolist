import React, { useState } from "react";
import styles from "./Continent.module.css";
import ContinentMap from "./ContinentMap";
import north from "../../image/north.gif";

export default function Continent() {
  const [btn, setBtn] = useState("block");
  const [flag, setFlag] = useState(null);

  const NorthAmerica = () => {
    setFlag(north);
    setBtn("none");
  };
  return (
    <div>
      <div className={styles.btnBox} style={{ display: btn }}>
        <div>
          <button className={styles.btn} onClick={NorthAmerica}>
            <span>유럽</span>
          </button>
          <button className={styles.btn} onClick={NorthAmerica}>
            <span>아시아</span>
          </button>
          <button className={styles.btn} onClick={NorthAmerica}>
            <span>아프리카</span>
          </button>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.btn} onClick={NorthAmerica}>
            <span>오세아니아</span>
          </button>
          <button className={styles.btn} onClick={NorthAmerica}>
            <span>아메리카</span>
          </button>
        </div>
      </div>
      <ContinentMap continent={flag} />
    </div>
  );
}
