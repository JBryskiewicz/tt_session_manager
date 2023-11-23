import "./styles/main.scss";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./components/appBar/ResponsiveAppBar";

export function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Box className="dashboard">
        <Outlet />
      </Box>
    </>
  );
}
