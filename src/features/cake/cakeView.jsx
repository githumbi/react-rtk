import React from "react";
import { useSelector , useDispatch } from "react-redux";
import {ordered, restocked} from '../cake/cakeSlice'

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes {numOfCakes}</h2>
      <button onClick={()=> dispatch(ordered())}>oerder cake</button>
      <button onClick={()=> dispatch(restocked(3))}>REstock cake</button>
    </div>
  );
};
