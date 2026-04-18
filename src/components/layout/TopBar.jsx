import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  MenuItem,
  IconButton,
  Stack,
} from "@mui/material";
import lightLogo from "../../assets/logo_light.png";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import RoundButton from "./RoundButton";
import { useTranslation } from "react-i18next";

function TopBar({ position }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { i18n, t } = useTranslation();
  const location = useLocation();

  const pages = [
    { label: t("topBar.home"), link: "/" },
    { label: t("topBar.schools"), link: "/schools" },
    { label: t("topBar.finPlus"), link: "/finplus" },
    { label: t("topBar.tutors"), link: "/repetitori" },
    { label: t("topBar.contacts"), link: "/contacts" },
  ];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar
      position={position}
      elevation={0}
      sx={{
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: "72px" }}>
          {/* LOGO */}
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={lightLogo}
              alt="logo"
              style={{
                height: 40,
                transition: "0.3s",
              }}
            />
          </Link>

          {/* MOBILE MENU */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link to={page.link} style={{ textDecoration: "none" }}>
                    <Typography>{page.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* DESKTOP MENU */}
          <Box
            sx={{
              ml: 6,
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: 1,
            }}
          >
            {pages.map((page) => {
              const isActive = location.pathname === page.link;

              return (
                <Link
                  key={page.label}
                  to={page.link}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      color: isActive ? "primary.main" : "#555",
                      fontWeight: 600,
                      transition: "0.25s",
                      background: isActive
                        ? "rgba(108,99,255,0.08)"
                        : "transparent",

                      "&:hover": {
                        background: "rgba(108,99,255,0.12)",
                        color: "primary.main",
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    {page.label === t("topBar.schools") && (
                      <SchoolIcon sx={{ fontSize: 18 }} />
                    )}
                    {page.label === t("topBar.tutors") && (
                      <PersonSearchIcon sx={{ fontSize: 18 }} />
                    )}

                    {page.label}
                  </Box>
                </Link>
              );
            })}
          </Box>

          {/* LANGUAGE SWITCH */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              background: "rgba(0,0,0,0.04)",
              borderRadius: "12px",
              p: "4px",
            }}
          >
            {["ro", "ru", "en"].map((lng) => {
              const isActive = i18n.language === lng;

              return (
                <Box
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    color: isActive ? "white" : "#555",
                    background: isActive ? "#6C63FF" : "transparent",
                    transition: "0.25s",

                    "&:hover": {
                      background: isActive ? "#5a52e0" : "rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  {lng.toUpperCase()}
                </Box>
              );
            })}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;
