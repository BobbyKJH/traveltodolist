import React, { useState } from "react";
import styles from "./Continent.module.css";
import ContinentMap from "./ContinentMap";
import north from "../../image/north.gif";

export default function Continent() {
  const [btn, setBtn] = useState("flex");
  const [flag, setFlag] = useState(null);

  const NorthAmerica = () => {
    setFlag(north);
    setBtn("none");
  };
  return (
    <>
      <div className={styles.btnBox}>
        <div
          className={styles.btn}
          style={{ background: "#0055ff", display: btn }}
        >
          <div>유럽</div>
        </div>
        <div
          className={styles.btn}
          style={{ background: "#000", display: btn }}
        >
          <div>아프리카</div>
        </div>
        <div
          className={styles.btn}
          style={{ background: "#ff0000", display: btn }}
          onClick={NorthAmerica}
        >
          <div>아메리카</div>
        </div>
      </div>

      <div className={styles.btnBox}>
        <div
          className={styles.btn}
          style={{ background: "#ffd400", display: btn }}
        >
          <div>아시아</div>
        </div>
        <div
          className={styles.btn}
          style={{ background: "#009900", display: btn }}
        >
          <div>오세아니아</div>
        </div>
      </div>

      <div className={styles.continent}>
        <ContinentMap continent={flag} />
      </div>
    </>
  );
}
