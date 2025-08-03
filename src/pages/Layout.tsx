import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
        <Outlet />
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
