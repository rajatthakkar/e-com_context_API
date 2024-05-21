import React from "react";
import styles from "../styles/Total.module.css";
import { useContext } from "react";
import { iteamContext } from "../iteamContest";
import { totalContext } from "../totalContext";
function Navbar() {
  const {total , setTotal} = useContext(totalContext)
  const value = useContext(iteamContext)
  console.log(value)
  return (
    <div className={total}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {value.item}</h1>
    </div>
  );
}

export default Navbar;
