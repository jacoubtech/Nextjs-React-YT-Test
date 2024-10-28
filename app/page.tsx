import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function Home() {
let hidetext = true; 

  return (
      <main>
        <Header name="Islem Fortas" />
        {hidetext ? <div><Footer footname="Da best"/></div> : null}
        {/* <Footer footname="hi" />   */}
      </main>
  );
}
export default Home;