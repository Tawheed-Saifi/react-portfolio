import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import AppTheme from "@/theme/AppTheme";
import CssBaseline from "@mui/material/CssBaseline";

function Layout() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Header />
      <Container className="app-container" sx={{ mt: 2, mb: 2 }}>
        <Outlet />
      </Container>
      <Footer />
    </AppTheme>
  );
}

export default Layout;
