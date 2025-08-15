import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "./theme/AppTheme";

function App() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </AppTheme>
  );
}

export default App;
