import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardContent,
  Box,
  Grid,
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";
import { Container } from "../../node_modules/@mui/material/index";
import axios from "../../node_modules/axios/index";
import { parseStringToJson } from "../utils/utils.js";

const SchoolPage = () => {
  const { id } = useParams();
  const [school, setSchool] = useState(null);

  // async function fetchSchoolData() {
  //   try {
  //     const response = await axios.get(
  //       `http://escoala.md/admin/wp-json/wp/v2/posts/${id}?_fields=id,slug,content,title`
  //     ); // Замените URL на адрес вашего сервера
  //     const data = response.data;
  //     const parsedObject = parseStringToJson(data.content.rendered);
  //     setSchool({ data, ...parsedObject });
  //     // Обработка полученных данных
  //     console.log("data");
  //   } catch (error) {
  //     // Обработка ошибки
  //     console.error(error);
  //   }
  // }

  const fetchSchoolData = useCallback(async () => {
    try {
      const response = await axios.get(`/data.json`);
      console.log(response);
      const data = response.data.data.school_sector.schools;
      const school = data.find((item) => item.id == id);
      setSchool(school);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchSchoolData();
  }, [fetchSchoolData]);

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
                <Typography>Phone1:</Typography>
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
