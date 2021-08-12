import React from "react";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import Head from "next/Head";

export default function about() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          doloribus ad similique suscipit molestias earum dicta quia eius
          commodi. Officiis adipisci dolorem molestiae quae. Saepe ipsum
          aspernatur cum reprehenderit neque.
        </p>
      </div>
    </>
  );
}
