import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import UserProfileMenu from "./UserProfileMenu";
import { LogoDesktop, LogoMobile } from "./LogoComponents";
import { NavMenuDesktop, NavMenuMobile } from "./NavMenuComponents";
import { useEffect, useState } from "react";
import { SECONDARY_COLOR } from "../../sx/colors";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { addressLibrary } from "../../utils/addressLibrary";

const APP_BAR_STYLE = {
  minHeight: "68.5px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: SECONDARY_COLOR,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  zIndex: (theme: any) => theme.zIndex.drawer + 1,
};

const { login, dashboard } = addressLibrary;

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [address, setAddress] = useState<string>(login);
  const [user] = useAuthState(auth);

  useEffect(() => {
    setAddress(user !== null ? dashboard : login);
  }, [user]);

  return (
    <AppBar position="fixed" sx={APP_BAR_STYLE}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoDesktop address={address} />
          {user !== null ? (
            <NavMenuMobile
              anchorElNav={anchorElNav}
              setAnchorElNav={setAnchorElNav}
            />
          ) : null}
          <LogoMobile address={address} />
          {user !== null ? (
            <NavMenuDesktop
              anchorElNav={anchorElNav}
              setAnchorElNav={setAnchorElNav}
            />
          ) : null}
          {user !== null ? <UserProfileMenu /> : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
