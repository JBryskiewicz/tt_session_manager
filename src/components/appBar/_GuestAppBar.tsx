import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { LogoDesktop, LogoMobile } from "./LogoComponents";
import { SECONDARY_COLOR } from "../../sx/colors";
import { addressLibrary } from "../../utils/addressLibrary";

const APP_BAR_STYLE = {
  minHeight: "68.5px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: SECONDARY_COLOR,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  zIndex: (theme: any) => theme.zIndex.drawer + 1,
};

const { login } = addressLibrary;

export function GuestAppBar() {
  return (
    <AppBar position="fixed" sx={APP_BAR_STYLE}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoDesktop address={login} />
          <LogoMobile address={login} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
