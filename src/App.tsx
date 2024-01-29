import "./styles/main.scss";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { GuestAppBar } from "./components/appBar/_GuestAppBar";
import { UsersAppBar } from "./components/appBar/_UsersAppBar";

export function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      {user === null ? <GuestAppBar /> : <UsersAppBar />}
      <Box className="dashboard">
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </>
  );
}
