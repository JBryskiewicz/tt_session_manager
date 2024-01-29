import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import UserProfileMenu from "./UserProfileMenu";
import { LogoDesktop } from "./LogoComponents";
import { NavMenuDesktop, NavMenuMobile } from "./NavMenuComponents";
import { useState } from "react";
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

const { dashboard } = addressLibrary;

export function UsersAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  return (
    <AppBar position="fixed" sx={APP_BAR_STYLE}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoDesktop address={dashboard} />
          <NavMenuMobile
            anchorElNav={anchorElNav}
            setAnchorElNav={setAnchorElNav}
          />
          <NavMenuDesktop
            anchorElNav={anchorElNav}
            setAnchorElNav={setAnchorElNav}
          />
          <UserProfileMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
