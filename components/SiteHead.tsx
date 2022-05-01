import React from "react";

import Head from "next/head";

const SITE_TITLE = "Gianluca Costa's Creations";

interface Props {
  pageTitle?: string;
  pagePath: string;
}

export const SiteHead = ({ pageTitle, pagePath }: Props) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{pageTitle ? `${SITE_TITLE} - ${pageTitle}` : SITE_TITLE}</title>
      <meta name="author" content="Gianluca Costa" />
      <link rel="canonical" href={`https://gianlucacosta.info${pagePath}`} />
      <meta name="description" content="Gianluca Costa's personal website" />
      <meta name="keywords" content="Gianluca Costa,science,humanism" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  );
};
