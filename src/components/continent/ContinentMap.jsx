import React from "react";

export default function ContinentMap({ continent, name }) {
  return (
    <>
      <img src={continent} alt={name} />
    </>
  );
}
