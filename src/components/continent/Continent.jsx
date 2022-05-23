import React, { useState } from "react";
import ContinentMap from "./ContinentMap";
import north from "../../image/north.gif";

export default function Continent() {
  const [flag, setFlag] = useState(null);

  const NorthAmerica = () => {
    setFlag(north);
  };
  return (
    <div>
      <button onClick={NorthAmerica}>아메리카</button>
      <ContinentMap continent={flag} />
    </div>
  );
}
