import "./styles/main.scss";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./components/appBar/ResponsiveAppBar";
import { Container } from "@mui/material";

export function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Box className="dashboard">
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </>
  );
}
