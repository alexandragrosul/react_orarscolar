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
import { Button, Container } from "../../node_modules/@mui/material/index";
import axios from "../../node_modules/axios/index";

const SchoolPage = () => {
  const { id } = useParams();
  const [school, setSchool] = useState(null);

  const fetchSchoolData = useCallback(async () => {
    try {
      const response = await axios.get(`/data.json`);
      console.log(response);
      const data = response.data.data.school_sector.schools;
      const school = data.find((item) => item.id === id);
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
      <Box sx={{ pt: "72px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/schools">
            All Schools
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h3" gutterBottom sx={{}}>
          Школа Технологического колледжа № 21
        </Typography>
        <Button variant="contained">Отправить заявку</Button>
      </Box>
      <img
        src="https://static.ucheba.ru/thumbs/809/-/pix/uz_photo/8504.full.webp"
        alt=""
      />
      <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
        Об учебном заведении
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        В состав колледжа № 21 входят одна общеобразовательная школа и две школы
        для детей с ограниченными возможностями здоровья. Здесь созданы условия
        для коррекционного обучения: есть тренажеры, музыкальные инструменты,
        развивающие игры и игровые комплексы для коррекционно-развивающих
        занятий, работают кабинеты логопеда, ЛФК, психолога и дефектолога.
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
        Основная информация
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ mt: 2, fontWeight: 700, textAlign: "start" }}
      >
        Тип
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ mt: 2, textAlign: "start" }}
      >
        Общеобразовательная
      </Typography>
      {/* <Box sx={{ padding: "5px 0" }}>
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
      </Box> */}
    </Container>
  );
};

export default SchoolPage;
