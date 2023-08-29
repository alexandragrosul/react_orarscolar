import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
import { red, grey } from "@mui/material/colors";
import { Card, CardContent, Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RoundButton from "./layout/RoundButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const School = ({ school }) => {
  const [showAll, setShowAll] = useState(false);
  const greyLight = grey[400];
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

          {/* <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
            <Typography>Phone:</Typography>
            <Typography sx={{ paddingLeft: 1 }}>{school.phone}</Typography>
          </Box>
          <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
            <LocationOnIcon
              sx={{ color: "primary.main", mr: 2, fontSize: "20px" }}
            />
            <Typography sx={{ color: "primary.main" }}>
              {school.schoolAdress}
            </Typography>
          </Box> */}

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

          {/* <Box
            sx={{
              height: "100px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <ul>
              {showAll
                ? school.serviceAdress.map((adress, index) => (
                    <li className="adressItem" key={index}>
                      {adress}
                    </li>
                  ))
                : school.serviceAdress.slice(0, 4).map((adress, index) => (
                    <li className="adressItem" key={index}>
                      {adress}
                    </li>
                  ))}
            </ul>
          </Box> */}
          <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
            <RoundButton
              onClick={handleClick}
              name={showAll ? "Hide" : "Show"}
              variant={"contained"}
              style={{ color: "white" }}
            />
          </Box>
          {/* <Typography>{school.schoolAdress}</Typography> */}
        </Link>
      </CardContent>
    </Card>
    // <Card sx={{ marginBottom: 3, borderRadius: "75px" }} key={school.id}>
    //   <CardContent>
    //     <Grid container sx={{ alignItems: "center" }} spacing={2}>
    //       <Grid item xs={12} md={6}>
    //         <Link to={`/schools/${school.id}`}>
    //           <img src="https://picsum.photos/300/200" />
    //         </Link>
    //       </Grid>
    //       <Grid item xs={12} md={6}>
    //         <Link to={`/schools/${school.id}`}>
    //           <Typography
    //             sx={{ fontWeight: 700, color: "primary.main" }}
    //             variant="h6"
    //           >
    //             {school.name}
    //           </Typography>
    //         </Link>
    //         <Box>
    //           <Typography>Phone:</Typography>
    //           <Typography>{school.phone}</Typography>
    //         </Box>
    //         <ul>
    //           {showAll
    //             ? school.serviceAdress.map((adress, index) => (
    //                 <li key={index}>{adress}</li>
    //               ))
    //             : school.serviceAdress
    //                 .slice(0, 4)
    //                 .map((adress, index) => <li key={index}>{adress}</li>)}
    //         </ul>

    //         <RoundButton
    //           onClick={handleClick}
    //           name={showAll ? "Hide" : "Show"}
    //           variant={"contained"}
    //         />

    //         <Typography>{school.schoolAdress}</Typography>
    //       </Grid>
    //     </Grid>
    //   </CardContent>
    // </Card>
  );
};

export default School;
