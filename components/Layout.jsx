import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title> Commerce Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
