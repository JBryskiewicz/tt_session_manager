import "./styles/main.scss";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { GuestAppBar } from "./components/appBar/_GuestAppBar";
import { UsersAppBar } from "./components/appBar/_UsersAppBar";
import { CustomLoading } from "./components/loaders/CustomLoading";

export function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      {!user ? <GuestAppBar /> : <UsersAppBar />}
      <Box className="dashboard">
        <Container maxWidth="xl">
          {loading ? <CustomLoading /> : <Outlet />}
        </Container>
      </Box>
    </>
  );
}
