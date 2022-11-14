import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div className="relative w-full">
      <Head>
        <title> Commerce Store</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="font-quicksand">{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
