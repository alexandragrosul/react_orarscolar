import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  MenuItem,
  IconButton,
} from "@mui/material";
import lightLogo from "../../assets/logo_light.png";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import RoundButton from "./RoundButton";
import { useTranslation } from "react-i18next";

function TopBar({ position, handleClose }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { i18n, t } = useTranslation();

  const pages = [
    { label: t("topBar.home"), link: "/" },
    { label: t("topBar.schools"), link: "/schools" },
    { label: t("topBar.finPlus"), link: "/finplus" },
    // { label: t("topBar.tutors"), link: "/repetitori" },
    // { label: t("topBar.answers"), link: "/answers" },
    // { label: t("topBar.events"), link: "/events" },
    { label: t("topBar.contacts"), link: "/contacts" },
    // { label: t("topBar.courses"), link: "/courses" },
  ];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  return (
    <AppBar
      position={position}
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        pb: 1,
      }}
    >
      <Container maxWidth="xl" sx={{ px: position === "fixed" ? 2 : 0 }}>
        <Toolbar disableGutters>
          <Link to="/">
            <img src={lightLogo} alt="logo" className="img-logo" />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary.main"
              sx={{
                color: "primary.main",
                "&:hover": { color: "secondary.main" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link to={page.link}>
                    <Typography sx={{ textAlign: "center" }}>
                      {page.label}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              marginLeft: 4,
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.label}
                to={page.link}
                onClick={handleCloseNavMenu}
                style={{
                  marginRight: "5px",
                  color: "black",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                <RoundButton
                  variant="outlined"
                  name={page.label}
                  startIcon={
                    page.label === "Scoli" ? (
                      <SchoolIcon />
                    ) : page.label === "Repetitori" ? (
                      <PersonSearchIcon />
                    ) : null
                  }
                />
              </Link>
            ))}
          </Box>
          <Box>
            <IconButton
              size="small"
              color="primary"
              onClick={() => changeLanguage("ro")}
            >
              Ro
            </IconButton>

            <IconButton
              size="small"
              color="primary"
              onClick={() => changeLanguage("ru")}
            >
              Ru
            </IconButton>

            <IconButton
              size="small"
              color="primary"
              onClick={() => changeLanguage("en")}
            >
              En
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;
