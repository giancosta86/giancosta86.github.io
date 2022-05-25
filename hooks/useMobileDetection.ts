import { useCallback, useEffect, useState } from "react";
import { isOnMobile } from "../components/utils";

export function useMobileDetection(): boolean {
  const [onMobile, setOnMobile] = useState(false);

  const onResizing = useCallback(() => {
    setOnMobile(isOnMobile());
  }, []);

  useEffect(() => {
    setOnMobile(isOnMobile());
    window.addEventListener("resize", onResizing);

    return () => {
      window.removeEventListener("resize", onResizing);
    };
  }, [onResizing]);

  return onMobile;
}
