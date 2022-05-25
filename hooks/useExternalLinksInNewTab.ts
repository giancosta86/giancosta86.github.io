import { useEffect } from "react";
import packageInfo from "../package.json";

const { website } = packageInfo;

function isExternalUrl(url: string) {
  return (
    !url.startsWith("/") &&
    !url.startsWith(`https://${website.domain}/`) &&
    !url.startsWith(`http://localhost`)
  );
}

function isDocumentUrl(url: string) {
  return url.endsWith(".pdf");
}

function clickCapturingHandler(event: MouseEvent) {
  const target = event.target;

  if (target instanceof HTMLAnchorElement) {
    const url = target.href;

    if (isExternalUrl(url) || isDocumentUrl(url)) {
      event.preventDefault();
      window.open(target.href, "_blank");
    }
  }
}

export function useExternalLinksInNewTab() {
  useEffect(() => {
    window.addEventListener("click", clickCapturingHandler, true);

    return () => {
      window.removeEventListener("click", clickCapturingHandler);
    };
  }, []);
}
