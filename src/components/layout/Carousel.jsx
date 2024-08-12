import * as React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
// import Box from "@mui/joy/Box";
// import Typography from "@mui/joy/Typography";
// import Card from "@mui/joy/Card";
import { AspectRatio } from "../../../node_modules/@mui/icons-material/index";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "../../../node_modules/@mui/material/index";

const data = [
  {
    src: "https://images.pexels.com/photos/25748906/pexels-photo-25748906/free-photo-of-oameni-vara-joc-joaca.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
  },
];

export default function Carousel() {
  console.log("Eva");
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     gap: 1,
    //     py: 1,
    //     overflow: "auto",
    //     width: 343,
    //     scrollSnapType: "x mandatory",
    //     "& > *": {
    //       scrollSnapAlign: "center",
    //     },
    //     "::-webkit-scrollbar": { display: "none" },
    //   }}
    // >
    //   {data.map((item) => (
    //     <Card
    //       orientation="horizontal"
    //       size="sm"
    //       key={item.title}
    //       variant="outlined"
    //     >
    //       <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
    //         <img
    //           srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
    //           src={`${item.src}?h=120&fit=crop&auto=format`}
    //           alt={item.title}
    //         />
    //       </AspectRatio>
    //       <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
    //         <Typography level="title-md">{item.title}</Typography>
    //         <Typography level="body-sm">{item.description}</Typography>
    //       </Box>
    //     </Card>
    //   ))}
    // </Box>
    <Box sx={{ padding: 2 }}>
      <Typography variant="h3" gutterBottom>
        Курсы
      </Typography>
      <Typography variant="h6" gutterBottom>
        Популярные курсы
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto", // Enables horizontal scroll on small screens
          padding: 1,
        }}
      >
        {data.map((course, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 150, // Adjust based on design requirements
              flex: "0 0 auto",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={course.src}
              alt={course.title}
            />
            <CardContent>
              <Typography variant="body1" noWrap>
                {course.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {course.views} views
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
