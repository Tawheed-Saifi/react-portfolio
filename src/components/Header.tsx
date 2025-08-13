import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React, { useRef } from "react";
import profileImage from "@/assets/profile_pic.jpg";

function Header() {
  const isMobile = useRef<boolean>(window.innerWidth < 768);
  return (
    <Container className="app-container" sx={{ px: 3, pt: 2 }}>
      {isMobile.current && (
        <Typography variant={isMobile.current ? "h4" : "h2"} lineHeight={1}>
          Mohammed Tawheed
        </Typography>
      )}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          {!isMobile.current && (
            <Typography variant={isMobile.current ? "h4" : "h2"}>
              Mohammed Tawheed
            </Typography>
          )}
          <Typography sx={{ fontSize: { xs: 18, md: 19 } }}>
            Junior Full Stack Developer
          </Typography>
          <Typography color="gray">
            I build accessible, pixel-perfect digital experiences for the web.
          </Typography>
        </Box>
        <Avatar
          src={profileImage}
          sx={{ width: 75, height: 75, cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://in.linkedin.com/in/mohammed-tawheed-dev",
              "_blank"
            )
          }
        />
      </Box>
    </Container>
  );
}

export default Header;
