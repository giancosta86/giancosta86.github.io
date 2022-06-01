import "../styles/reset.css";
import "../styles/fonts.css";
import "../styles/main/main.scss";
import "../node_modules/@giancosta86/omnicourse/dist/OmniCourse.css";
import "../styles/learning.scss";

import type { AppProps } from "next/app";
import { useExternalLinksInNewTab } from "../hooks/useExternalLinksInNewTab";
import { SiteHead } from "../components/SiteHead";

function MyApp({ Component, pageProps }: AppProps) {
  useExternalLinksInNewTab();

  return (
    <>
      <SiteHead />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
