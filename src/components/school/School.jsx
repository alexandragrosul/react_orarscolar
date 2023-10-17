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
    if (school?.serviceAdress?.length > 4) {
      setShowAll(!showAll);
    }
  };

  return (
    <Card
      sx={{
        textAlign: "center",
        borderRadius: "5px",
        border: "solid 1px green",
        margin:"0 auto",
        maxWidth:{
          xs:"350px",
          md:"none"
        }
      }}
    >
      <CardContent>
        <Link to={`/schools/${school.id}`}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection:{
                xs:"column",
                lg:"row"
              }
            }}
          >
            <img
              src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              style={{
                width: "300px",
                height: "200px",
                borderRadius: "5px",
                objectFit: "cover",
              }}
              alt={school?.name}
            />
            <Box
              sx={{
                marginLeft: {
                  sm:0,
                  lg:"15px"
                },
              }}
            >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                  variant="h6"
                  align="left"
                >
                  {school.title.rendered}
                </Typography>
                <Typography align="left" className="school_description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestiae omnis quisquam incidunt consequuntur quae.
                </Typography>

              <Box
                display="flex"
                marginTop={2}
                marginBottom={1}
                sx={{ alignItems: "center" }}
              >
                <Typography>Phone:</Typography>
                <Typography sx={{ paddingLeft: 1 }}>{school?.phone}</Typography>
              </Box>
              <Box display="flex" sx={{ alignItems: "center" }}>
                <LocationOnIcon
                  sx={{ color: "primary.main", mr: 2, fontSize: "20px" }}
                />
                <Typography sx={{ color: "primary.main" }}>
                  {school?.schoolAdress} Address test
                </Typography>
              </Box>

              <Box display="flex" sx={{ alignItems: "center", marginTop:"10px" }}>
                <RoundButton
                  onClick={handleClick}
                  name={showAll ? "Hide" : "Show"}
                  variant={"contained"}
                  style={{ color: "white" }}
                />
              </Box>
            </Box>
          </Box>
        </Link>
      </CardContent>
    </Card>
  );
};

export default School;
