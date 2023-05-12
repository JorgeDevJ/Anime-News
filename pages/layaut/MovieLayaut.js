import React from "react";
import Head from "next/dist/shared/lib/head";
import Return from "../../components/Return";

const MovieLayaut = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Movie Portal | {title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="a.validate.02" content="OrWRteJuw5-k5xmt0R9kvtAlMGQn7701yNsE" />
          <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <Return/>
      {children}
    </>
  );
};

export default MovieLayaut;
