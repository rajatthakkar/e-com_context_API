import React from "react";
import styles from "../styles/Total.module.css";
import { useContext } from "react";
import { iteamContext } from "../iteamContest";
function Navbar() {
  const value = useContext(iteamContext)
  console.log(value)
  return (
    <div className={value.total}>
      <h1>Total : &#x20B9; 0</h1>
      <h1>Items: 0</h1>
    </div>
  );
}

export default Navbar;
