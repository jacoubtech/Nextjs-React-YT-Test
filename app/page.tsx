'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Link from "next/link";
import { useState } from "react";


function Home() {
let hidetext = true; 
const [counter, setCounter] = useState(0);

const handleClick = () => {
  setCounter (counter + 1) ;
}
const moinshundleclick = () => {
 
    setCounter(counter - 1); 
 
}
const reset = () => {
  setCounter(0);
} 
  return (
      <><main style={{ color: "teal", backgroundColor: "gold" }}>
      <Header name="Islem Fortas" />
      {hidetext ? <div><Footer footname="Da best" /></div> : null}
      
    </main>
    <h2><Link href="/about">Go to About</Link></h2>
    <div>Counter : {counter} </div>
    <button onClick={handleClick}>add</button> 
    <button onClick={reset}>reset </button>
    {counter == 0 ? setCounter(0) :<button onClick={moinshundleclick}>moins</button>}
    </>
  );
}
export default Home;