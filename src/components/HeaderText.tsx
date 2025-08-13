import { grey, blueGrey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { ReactNode, useRef } from "react";

interface HeaderTextProps {
  darkMode: boolean;
  children: ReactNode;
}

const HeaderText = ({ darkMode, children }: HeaderTextProps) => {
  const isMobile = useRef<boolean>(window.innerWidth < 768);

  return (
    <Typography
      variant={isMobile ? "h5" : "h4"}
      marginLeft={1}
      marginBottom={1}
      color={darkMode ? grey[50] : blueGrey[900]}
    >
      {children}
    </Typography>
  );
};

export default HeaderText;
