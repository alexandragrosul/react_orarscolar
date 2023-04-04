import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import lightLogo from "../assets/logo_light.png";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Scoli", "Extrascolare", "Repetitori"];
const settings = ["Profile", "Account", "Class", "Logout"];

function TopBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [selectSchool, setSelectSchool] = useState([
    { value: "Ion Creanga", label: "Ion Creanga" },
  ]);
  const [selectClass, setSelectClass] = useState([
    { value: "I A", label: "I A" },
  ]);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleSelectSchool = (event) =>
    setSelectSchool([{ value: event.target.value, label: event.target.value }]);

  const handleSelectClass = (event) =>
    setSelectClass([{ value: event.target.value, label: event.target.value }]);

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={lightLogo} alt="logo" />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Scoli</InputLabel>
              {/* <Box>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectSchool[0].value}
                  label="Scoli"
                  onChange={handleSelectSchool}
                >
                  {selectSchool.map((school) => (
                    <MenuItem value={school.value}>{school.label}</MenuItem>
                  ))}
                </Select>

                <Select
                  sx={{ ml: 2 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectClass[0].value}
                  label="Clasa"
                  onChange={handleSelectClass}
                >
                  {selectClass.map((clas) => (
                    <MenuItem value={clas.value}>{clas.label}</MenuItem>
                  ))}
                </Select>
              </Box> */}
            </FormControl>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopBar;
