import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";

const DESKTOP_LOGO_STYLE = {
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};

const MOBILE_LOGO_STYLE = {
  mr: 2,
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};

type Props = {
  address: string;
};

export function LogoDesktop({ address }: Props) {
  return (
    <>
      <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href={address}
        sx={DESKTOP_LOGO_STYLE}
      >
        LOGO
      </Typography>
    </>
  );
}

export function LogoMobile({ address }: Props) {
  return (
    <>
      <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href={address}
        sx={MOBILE_LOGO_STYLE}
      >
        LOGO
      </Typography>
    </>
  );
}
