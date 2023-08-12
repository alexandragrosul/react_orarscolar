import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Box,
  Grid,
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";
import { schoolsData } from "../utils/schoolsData";

const SchoolPage = () => {
  const { id } = useParams();
  const [school, setSchool] = useState(null);
  useEffect(() => {
    const item = schoolsData.find((el) => el.id == id);
    setSchool(item);
  }, []);
  return (
    <Box sx={{ padding: "5px 0" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/schools">
          Schools
        </Link>
        <Typography color="text.primary">{school?.name}</Typography>
      </Breadcrumbs>
      <Card sx={{ marginBottom: 3, marginTop: 3 }}>
        <CardContent>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={12} md={4}>
              <img src="https://picsum.photos/300/200" />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography sx={{ fontWeight: 700 }} variant="h6">
                {school?.name}
              </Typography>

              <Box>
                <Typography>Phone:</Typography>
                <Typography>{school?.phone}</Typography>
              </Box>
              <ul>
                {school?.serviceAdress.map((adress) => (
                  <li key={adress}>{adress}</li>
                ))}
              </ul>
              <Typography>{school?.schoolAdress}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SchoolPage;
