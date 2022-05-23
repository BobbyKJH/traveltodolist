import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.box}>
      <Link to="/" className={styles.homeLink}>
        여행
      </Link>
      <div className={styles.menu}>
        {/* 1 */}
        <Link to="/" className={styles.menuLink}>
          계획
        </Link>
        {/* 2 */}
        <Link to="/map" className={styles.menuLink}>
          나라
        </Link>
        {/* 3 */}
        <Link to="/continent" className={styles.menuLink}>
          지도
        </Link>
        {/* 4 */}
        <Link to="/exchange" className={styles.menuLink}>
          환율
        </Link>
        {/* 5 */}
        <Link to="/" className={styles.menuLink}>
          로그인 / 회원가입
        </Link>
      </div>
    </div>
  );
}
