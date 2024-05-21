import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../iteamContest";

function Navbar() {
  const {resetValue} = useValue()
  const value = useValue();
  console.log(resetValue)
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: {value.item}</h1>
      <button onClick={()=>resetValue()}>Reset</button>
    </div>
  );
}

export default Navbar;
