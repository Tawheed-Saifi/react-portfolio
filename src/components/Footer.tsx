import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/X";

export default function Footer() {
  const handleMailtoClick = (event: any) => {
    event.preventDefault(); // Prevent default link behavior
    window.open(
      "mailto:atawheed.md@gmail.com",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 4, sm: 5 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // pt: { xs: 4, sm: 8 },
            width: "100%",
            // borderTop: "1px solid",
            // borderColor: "divider",
          }}
        >
          <div>
            {/* <Link color="text.secondary" variant="body2" href="#">
              ERP System
            </Link>
            <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" variant="body2" href="#">
              Event Management
            </Link>
           */}
            <Typography sx={{ opacity: 0.5 }}>Contact</Typography>
            <Link
              color="text.secondary"
              // href="mailto:atawheed.md@gmail.com"
              // target="_blank"
              // rel="noopener noreferrer"
              onClick={handleMailtoClick}
            >
              atawheed.md@gmail.com
            </Link>
          </div>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: "left", color: "text.secondary" }}
          >
            <IconButton
              color="inherit"
              size="small"
              href="https://github.com/Tawheed-Saifi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{ alignSelf: "center" }}
            >
              <GitHubIcon />
              {/* <img
                src={"src/assets/gitlab.png"}
                style={{
                  width: "1rem",
                  height: "1rem",
                  objectFit: "scale-down",
                }}
              /> */}
            </IconButton>
            {/* <IconButton
              color="inherit"
              size="small"
              href="https://x.com/MaterialUI"
              aria-label="X"
              sx={{ alignSelf: "center" }}
            >
              <TwitterIcon />
            </IconButton> */}
            <IconButton
              color="inherit"
              size="small"
              href="https://in.linkedin.com/in/mohammed-tawheed-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
