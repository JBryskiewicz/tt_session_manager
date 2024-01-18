import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import UserProfileMenu from "./UserProfileMenu";
import { LogoDesktop, LogoMobile } from "./LogoComponents";
import { NavMenuDesktop, NavMenuMobile } from "./NavMenuComponents";
import { useState } from "react";
import { SECONDARY_COLOR } from "../../sx/colors";

const APP_BAR_STYLE = {
  backgroundColor: SECONDARY_COLOR,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  zIndex: (theme: any) => theme.zIndex.drawer + 1,
};

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  return (
    <AppBar position="fixed" sx={APP_BAR_STYLE}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoDesktop />
          <NavMenuMobile
            anchorElNav={anchorElNav}
            setAnchorElNav={setAnchorElNav}
          />
          <LogoMobile />
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
export default ResponsiveAppBar;
