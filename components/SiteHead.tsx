import React from "react";

import Head from "next/head";

import { website } from "../package.json";

interface Props {
  pageTitle?: string;
  pagePath: string;
  description?: string;
  imagePath?: string;
}

export const SiteHead = ({
  pageTitle,
  pagePath,
  description,
  imagePath
}: Props) => {
  const actualPageTitle = pageTitle
    ? `${website.title} - ${pageTitle}`
    : website.title;

  const actualPageDescription = description ?? website.description;

  const pageUrlWithoutProtocol = `//${website.domain}${pagePath}`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{actualPageTitle}</title>
      <meta name="author" content="Gianluca Costa" />
      <link rel="canonical" href={`https:${pageUrlWithoutProtocol}`} />
      <meta name="description" content={actualPageDescription} />
      <meta name="keywords" content="Gianluca Costa,science,humanism" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta property="og:title" content={actualPageTitle} />

      <meta property="og:description" content={actualPageDescription} />

      <meta property="og:url" content={pageUrlWithoutProtocol} />

      {imagePath && (
        <meta property="og:image" content={`//${website.domain}${imagePath}`} />
      )}
    </Head>
  );
};
