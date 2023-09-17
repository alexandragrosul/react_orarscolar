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
import { Container } from "../../node_modules/@mui/material/index";

const SchoolPage = () => {
  const { id } = useParams();
  const [school, setSchool] = useState(null);

  useEffect(() => {
    console.log({ id });
    const item = schoolsData.find((el) => el.id === id * 1);
    setSchool(item);
  }, []);

  console.log(schoolsData);

  return (
    <Container>
      <Box sx={{ padding: "5px 0" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="primary.main" href="/schools">
            Schools
          </Link>
          <Typography color="text.primary">{school?.name}</Typography>
        </Breadcrumbs>
        <Card sx={{ marginBottom: 3, marginTop: 3, borderRadius: "50px" }}>
          <CardContent>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={12} md={4}>
                <img
                  src="https://picsum.photos/300/200"
                  style={{ borderRadius: "50px" }}
                  alt={school?.name}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography
                  align="center"
                  variant="h5"
                  sx={{ fontWeight: 700, m: 3, color: "primary.main" }}
                >
                  {school?.name}
                </Typography>
                <Typography>Phone:</Typography>
                <Typography sx={{ paddingLeft: 1 }}>{school?.phone}</Typography>
                <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
                  <ul>
                    {school?.serviceAdress.map((adress) => (
                      <li key={adress}>{adress}</li>
                    ))}
                  </ul>
                </Box>

                <Typography>{school?.schoolAdress}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default SchoolPage;
