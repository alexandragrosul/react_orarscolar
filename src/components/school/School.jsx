import * as React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import RoundButton from "../layout/RoundButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const School = ({ school }) => {
  const [showAll, setShowAll] = useState(false);
  const handleClick = () => {
    if (school.serviceAdress.length > 4) {
      setShowAll(!showAll);
    }
  };
  return (
    <Card
      sx={{
        textAlign: "center",
        borderRadius: "50px",
        border: "solid 1px green",
      }}
    >
      <CardContent>
        <Link to={`/schools/${school.id}`}>
          <img
            src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={{ width: "300px", height: "auto", borderRadius: "50px" }}
          />
          <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: 700,
                color: "primary.main",
                height: "63px",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
              variant="h6"
            >
              {school.name}
            </Typography>
          </Box>

          <Box
            display="flex"
            marginTop={2}
            marginBottom={1}
            sx={{ alignItems: "center" }}
          >
            <Typography>Phone:</Typography>
            <Typography sx={{ paddingLeft: 1 }}>{school.phone}</Typography>
          </Box>
          <Box display="flex" sx={{ alignItems: "center" }}>
            <LocationOnIcon
              sx={{ color: "primary.main", mr: 2, fontSize: "20px" }}
            />
            <Typography sx={{ color: "primary.main" }}>
              {school.schoolAdress}
            </Typography>
          </Box>

          <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
            <RoundButton
              onClick={handleClick}
              name={showAll ? "Hide" : "Show"}
              variant={"contained"}
              style={{ color: "white" }}
            />
          </Box>
        </Link>
      </CardContent>
    </Card>
  );
};

export default School;
