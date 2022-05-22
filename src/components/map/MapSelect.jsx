import React, { useState, useEffect } from "react";
import styles from "../../componentsCSS/MapSelect.module.css";

export default function ContinentSelect({ country }) {
  const [continent, setContinent] = useState([]);

  useEffect(() => {
    fetch(country)
      .then((response) => response.json())
      .then((json) => {
        setContinent(json.data);
        console.log(json.data);
      });
  }, []);
  return (
    <div className={styles.box}>
      {continent.map((map) => (
        <div key={map.country_nm} className={styles.continent}>
          <img src={map.download_url} alt="flag" />
          <p>{map.country_nm}</p>
        </div>
      ))}
    </div>
  );
}
