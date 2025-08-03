import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const { mode, systemMode, setMode } = useColorScheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (mode == "dark") setIsDarkMode(true);
    else if (mode == "light") setIsDarkMode(false);
    else if (mode == "system" && (!systemMode || systemMode == "light"))
      setIsDarkMode(false);
  }, [mode]);

  return isDarkMode;
}

export default useDarkMode;
