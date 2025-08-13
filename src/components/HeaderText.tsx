import { grey, blueGrey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

interface HeaderTextProps {
  darkMode: boolean;
  children: ReactNode;
}

const HeaderText = ({ darkMode, children }: HeaderTextProps) => {
  return (
    <Typography
      variant="h4"
      marginLeft={1}
      marginBottom={1}
      color={darkMode ? grey[50] : blueGrey[900]}
    >
      {children}
    </Typography>
  );
};

export default HeaderText;
