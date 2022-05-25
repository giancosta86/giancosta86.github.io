import React from "react";
import Head from "next/head";
import packageInfo from "../package.json";

export const SiteHead = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="version" content={packageInfo.version} />
    <meta name="author" content="Gianluca Costa" />
    <meta
      name="keywords"
      content="Gianluca Costa,software,engineer,science,humanism"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
  </Head>
);
