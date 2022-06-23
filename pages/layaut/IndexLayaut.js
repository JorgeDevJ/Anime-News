import React from "react";
import Head from "next/dist/shared/lib/head";
import Categories from "../../components/Categories";
import Return from "../../components/Return";
import NavStart from "../../components/Nav/NavStart";
import Footer from "../../components/Footer";

const IndexLayaut = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Movie Portal | {title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <NavStart/>
      {children}
      <Footer/>
    </>
  );
};

export default IndexLayaut;
