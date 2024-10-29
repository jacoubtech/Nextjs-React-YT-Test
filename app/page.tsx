import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Link from "next/link";


function Home() {
let hidetext = true; 

  return (
      <><main style={{ color: "teal", backgroundColor: "gold" }}>
      <Header name="Islem Fortas" />
      {hidetext ? <div><Footer footname="Da best" /></div> : null}
      {/* <Footer footname="hi" />   */}
    </main>
    <h2><Link href="/about">Go to About</Link></h2></>
  );
}
export default Home;