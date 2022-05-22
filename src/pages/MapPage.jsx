import React from "react";
import styles from "../pageCSS/MapPage.module.css";
import Nav from "../components/Nav";
import Map from "../components/map/Map";

export default function MapPage() {
  return (
    <>
      <Nav />
      <div className={styles.map}>
        <Map />
      </div>
    </>
  );
}
