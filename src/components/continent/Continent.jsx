import React, { useState } from "react";
import styles from "./Continent.module.css";
import ContinentMap from "./ContinentMap";
import { useDispatch, useSelector } from "react-redux";
import north from "../../image/north.gif";
import south from "../../image/south.gif";
import { show, selected } from "../../store/counterReducer";

export default function Continent() {
  const { box, back } = useSelector((state) => ({
    box: state.counter.dis,
    back: state.counter.select,
  }));

  const dispatch = useDispatch();
  const [btn, setBtn] = useState("flex");
  const [flag, setFlag] = useState(null);

  const NorthAmerica = () => {
    setFlag(north);
    dispatch(show());
    dispatch(selected());
  };

  return (
    <>
      <div className={styles.btnBox}>
        <div
          className={styles.btn}
          style={{ background: "#0055ff", display: box }}
        >
          <div>유럽</div>
        </div>
        <div
          className={styles.btn}
          style={{ background: "#000", display: box }}
        >
          <div>아프리카</div>
        </div>
        <div
          className={styles.btn}
          style={{ background: "#ff0000", display: box }}
          onClick={NorthAmerica}
        >
          <div>아메리카</div>
        </div>
      </div>

      <div className={styles.btnBox}>
        <div
          className={styles.btn}
          style={{ background: "#ffd400", display: box }}
        >
          <div>아시아</div>
        </div>
        <div
          className={styles.btn}
          style={{ background: "#009900", display: box }}
        >
          <div>오세아니아</div>
        </div>
      </div>

      <button className={styles.select} style={{ display: back }}>
        대륙 선택
      </button>

      <div className={styles.continent}>
        <ContinentMap continent={flag} />
      </div>
    </>
  );
}
