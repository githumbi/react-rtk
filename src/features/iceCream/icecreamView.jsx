import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../iceCream/iceCreamSlice";
// import { useState } from "react";

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Number of Icecream {numOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>oerder Icecream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        REstock Icecream
      </button>
    </div>
  );
};
