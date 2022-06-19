// import Image from 'next/image'
import Head from "next/head";

import About from "../components/about";
import Heading from "../components/home/heading";
import Menu from "../components/menu";
import Reserve from "../components/reserve";

// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <Heading />
      <Reserve />
      <About />
    </main>
  );
}
