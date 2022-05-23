import React, { useState, useEffect, useRef } from "react";
import styles from "./Exchange.module.css";

export default function Exchage() {
  const [exchangeList, setExchangeList] = useState([]);
  const [select, setSelect] = useState("");
  const [num, setNum] = useState(1);
  const selectRef = useRef(null);

  useEffect(() => {
    selectRef.current.focus();
  }, [select]);

  useEffect(() => {
    fetch("https://bobbykjh.github.io/exchange.json")
      .then((response) => response.json())
      .then((json) => {
        setExchangeList(json.list);
        console.log(json.list);
      });
  }, []);

  const onSelect = (e) => {
    setSelect(e.target.value);
  };

  const onChangeNum = (e) => {
    setNum(e.target.value);
    if (select === "") {
      alert("금액 종류를 선택해주세요.");
      setNum(1);
    }
    if (num <= "0") {
      alert("금액이 1이하로 내려갈수 없습니다");
      setNum(1);
    }
  };

  // 계산된 금액 천의 자리수 "," 찍어주는 함수
  function numberWithCommas(num) {
    return num
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={styles.box}>
      <h2>환율 계산기</h2>
      <select className={styles.select} value={select} onChange={onSelect}>
        {/* 금액선택 */}
        {exchangeList.map((exchange) => (
          <option
            key={exchange.id}
            className={styles.option}
            value={exchange.매매기준율}
          >
            {exchange.통화명}
            {exchange.sign}
          </option>
        ))}
      </select>
      {/* 계산한 금액 */}
      <p>
        {numberWithCommas(select * num)}
        <span>원</span>
      </p>

      {/* 금액 계산 (원) */}
      <input type="number" value={num} onChange={onChangeNum} ref={selectRef} />
    </div>
  );
}
