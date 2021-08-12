import React from "react";
import Head from "next/Head";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          commodi itaque eius voluptatibus, possimus, debitis autem animi
          consectetur voluptatem, in alias modi? Sequi possimus quo blanditiis
          ab aspernatur rerum ut!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          commodi itaque eius voluptatibus, possimus, debitis autem animi
          consectetur voluptatem, in alias modi? Sequi possimus quo blanditiis
          ab aspernatur rerum ut!{" "}
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
