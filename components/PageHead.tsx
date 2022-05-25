import React from "react";
import Head from "next/head";
import packageInfo from "../package.json";

const { website } = packageInfo;

export interface Props {
  pagePath: string;
  pageTitle?: string;
  description?: string;
  imagePath?: string;
}

export const PageHead = ({
  pagePath,
  pageTitle,
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
      <title>{actualPageTitle}</title>

      <link rel="canonical" href={`https:${pageUrlWithoutProtocol}`} />

      <meta name="description" content={actualPageDescription} />

      <meta property="og:title" content={actualPageTitle} />

      <meta property="og:url" content={pageUrlWithoutProtocol} />

      <meta property="og:description" content={actualPageDescription} />

      {imagePath && (
        <meta property="og:image" content={`//${website.domain}${imagePath}`} />
      )}
    </Head>
  );
};
