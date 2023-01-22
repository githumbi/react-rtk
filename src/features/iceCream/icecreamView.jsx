import React from "react";
import { useSelector } from "react-redux";

export const IcecreamView = () => {
    const numOfIcecreams = useSelector(
      (state) => state.icecream.numOfIcecreams
    );
  return (
    <div>
      <h2>Number of Icecream {numOfIcecreams}</h2>
      <button>oerder Icecream</button>
      <button>REstock Icecream</button>
    </div>
  );
};
