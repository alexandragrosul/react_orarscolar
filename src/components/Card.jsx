import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import { Card, CardContent, Typography, Box } from "@mui/material";
import {
  Link,
  Grid,
  Chip,
  Stack,
} from "../../node_modules/@mui/material/index";
import RoundButton from "./layout/RoundButton";

export const CardComponent = ({ profesor }) => {
  return (
    <>
      <Link to={`/repetitori/${profesor.id}`}>
        <Card
          sx={{
            borderRadius: "50px",
            border: "solid 1px green",
            paddingLeft: "15px",
          }}
          key={profesor.id}
        >
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={2}>
                <Box sx={{ 
                  margin:"0 auto",
                  width:"100%",
                  textAlign:"center",
                 }}>
                <img
                  style={{ borderRadius: "50px" }}
                  src="https://avatars.preply.com/i/logos/i/logos/avatar_y85iu.jpg?d=320x320&f=webp"
                  height="160"
                  weight="160"
                  alt="avatar"
                />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h4"
                  fontWeight="bold"
                >
                  {profesor.name}
                </Typography>
                <Stack spacing={1}>
                  <Box display="flex" sx={{ alignItems: "center" }}>
                    <AutoStoriesIcon
                      sx={{ color: "primary.main", mr: 2, fontSize: "20px" }}
                    />
                    {profesor.material.map((el) => {
                      return (
                        <Chip
                          label={el}
                          key={el}
                          sx={{
                            marginLeft: "5px",
                            background: "#59A96A",
                            color: "white",
                          }}
                        />
                      );
                    })}
                  </Box>
                  <Box
                    display="flex"
                    sx={{
                      alignItems: "center",
                      marginRight: "5px",
                    }}
                  >
                    <LanguageIcon
                      sx={{ color: "primary.main", mr: 2, fontSize: "20px" }}
                    />
                    {profesor.languages.map((language) => (
                      <Chip
                        label={language}
                        key={language}
                        sx={{
                          marginRight: "3px",
                        }}
                      />
                    ))}
                  </Box>
                  <Box
                    display="flex"
                    marginTop={2}
                    sx={{ alignItems: "center" }}
                  >
                    <PhoneInTalkIcon
                      sx={{ color: "primary.main", mr: 2, fontSize: "20px" }}
                    />
                    <Typography textAlign={"left"}>{profesor.phone}</Typography>
                  </Box>
                  {profesor?.description && (
                    <Box
                      display="flex"
                      marginTop={2}
                      sx={{ alignItems: "center" }}
                    >
                      <InfoIcon
                        sx={{ color: "primary.main", mr: 2, fontSize: "20px" }}
                      />
                      <Typography textAlign={"left"}>
                        <strong>Despre mine:</strong>{" "}
                        <em>{profesor?.description}</em>
                      </Typography>
                    </Box>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={4} lg={2}>
                <Stack spacing={2}>
                  <Grid container sx={{ marginTop: 0 }}>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        flexDirection: "row-reverse",
                      }}
                    >
                      <FavoriteBorderIcon sx={{ alignSelf: "end" }} />
                    </Grid>
                    {profesor?.result && (
                      <Grid item xs={6}>
                        <StarIcon sx={{ color: "#fdc425" }} />
                        <Typography variant="h5" component="span">
                          {profesor?.result}
                        </Typography>
                        {/* <Typography sx={{ textAlign:"start" }}>6 recenzii</Typography> */}
                      </Grid>
                    )}
                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                      {profesor?.price && (
                        <Typography variant="h5" component="span">
                          {profesor?.price}$
                        </Typography>
                      )}
                      {profesor?.class_time && (
                        <Typography sx={{ textAlign: "right" }}>
                          {profesor?.class_time} minute
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                  <RoundButton
                    name={"Lectie rezerva"}
                    style={{ color: "white" }}
                  ></RoundButton>
                  <RoundButton
                    name={"Trimite un mesaj"}
                    style={{ color: "white" }}
                  ></RoundButton>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};
