import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fukurou Travel - Japan</title>
        <meta
          name="description"
          content="Fukurou Travel helps you find truly unique places to eat, sleep, and explore in Japan."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>fukurou</h1>
      </main>
    </div>
  );
};

export default Home;
