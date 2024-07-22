import React from "react";
import {
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "../../../node_modules/@mui/icons-material/index";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "../../../node_modules/@mui/material/index";
import BusinessIcon from "@mui/icons-material/Business";

const NewSchool = ({ school }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}>
      <img
        style={{ width: "300px", height: "200px", borderRadius: "50px" }}
        src="https://www.ucheba.ru/pix/uz_photo/8504.full.jpeg"
      />
      <Box
        sx={{ marginLeft: { xs: 0, lg: "15px" }, marginTop: { xs: 2, lg: 0 } }}
      >
        <Typography variant="h5" gutterBottom>
          {school.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Sector: {school.sector}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Adresa: {school.schoolAdress}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Telefon: {school.phone}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Service Adress" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {school.serviceAdress.map((adress, index) => {
                return (
                  <ListItemButton sx={{ pl: 4 }} key={index}>
                    <ListItemText primary={adress} sx={{ color: "black" }} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </Typography>
      </Box>
    </Box>
  );
};
export default NewSchool;
