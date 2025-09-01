import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Breadcrumbs,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Fade,
  Slide,
  Modal,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import BusinessIcon from "@mui/icons-material/Business";
import React from "react";

const SchoolPage = () => {
  const { id } = useParams();
  const [school, setSchool] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const fetchSchoolData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.escoala.md/api/schools/${id}`
      );
      setSchool(response.data?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchSchoolData();
  }, [fetchSchoolData]);

  const handleClick = () => setOpen(!open);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена:", form);
    setModalOpen(false);
    setForm({ name: "", phone: "", message: "" });
    alert("Заявка отправлена! Мы свяжемся с вами.");
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #EAFBEA, #C8E6C9)",
        }}
      >
        <CircularProgress size={70} thickness={4} color="success" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #EAFBEA, #F0FFF4)",
        minHeight: "100vh",
        py: 6,
      }}
    >
      <Fade in timeout={700}>
        <Container
          sx={{
            backgroundColor: "#fff",
            borderRadius: "30px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            padding: "50px",
            maxWidth: "1100px",
          }}
        >
          {/* Хлебные крошки */}
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4, fontSize: "16px" }}>
            <Link
              to="/schools"
              style={{
                textDecoration: "none",
                color: "#4CAF50",
                fontWeight: 600,
              }}
            >
              Все школы
            </Link>
            <Typography sx={{ color: "#666" }}>{school?.name}</Typography>
          </Breadcrumbs>

          {/* Главная карточка */}
          <Slide in direction="up" timeout={800}>
            <Card
              sx={{
                borderRadius: "30px",
                overflow: "hidden",
                mb: 5,
                boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                transition: "transform 0.4s ease",
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              <CardMedia
                component="img"
                height="400"
                image={
                  school?.image ||
                  "https://static.ucheba.ru/thumbs/809/-/pix/uz_photo/8504.full.webp"
                }
                alt={school?.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ textAlign: "center", p: 5 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "bold",
                    color: "#2E7D32",
                    mb: 2,
                  }}
                >
                  {school?.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#666", mb: 4, fontSize: "18px" }}
                >
                  Телефон: {school?.phone || "Не указан"}
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleModalOpen}
                  sx={{
                    textTransform: "none",
                    borderRadius: "30px",
                    padding: "12px 40px",
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "18px",
                    background: "linear-gradient(90deg, #43A047, #66BB6A)",
                    boxShadow: "0 6px 20px rgba(67,160,71,0.4)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #388E3C, #4CAF50)",
                    },
                  }}
                >
                  Связаться со школой
                </Button>
              </CardContent>
            </Card>
          </Slide>

          {/* Адрес */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "#2E7D32",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Адреса обслуживания
          </Typography>
          <List>
            <ListItemButton
              onClick={handleClick}
              sx={{
                borderRadius: "15px",
                backgroundColor: "#F1F8E9",
                mb: 2,
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                "&:hover": { backgroundColor: "#E8F5E9" },
              }}
            >
              <ListItemIcon>
                <BusinessIcon color="success" />
              </ListItemIcon>
              <ListItemText
                primary="Показать адреса"
                primaryTypographyProps={{ fontWeight: 600 }}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Fade in={open} timeout={600}>
                <List component="div" disablePadding>
                  {school?.service_address
                    ? JSON.parse(school.service_address).map(
                        (address, index) => (
                          <ListItemButton
                            key={index}
                            sx={{
                              pl: 6,
                              borderBottom: "1px solid #eee",
                              "&:hover": { backgroundColor: "#FAFAFA" },
                            }}
                          >
                            <ListItemText primary={address} />
                          </ListItemButton>
                        )
                      )
                    : "Нет данных"}
                </List>
              </Fade>
            </Collapse>
          </List>
        </Container>
      </Fade>

      {/* Модальное окно */}
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Fade in={modalOpen}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
              p: 5,
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mb: 3,
                textAlign: "center",
                color: "#2E7D32",
              }}
            >
              Связаться со школой
            </Typography>

            <TextField
              fullWidth
              label="Ваше имя"
              variant="outlined"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                },
              }}
            />
            <TextField
              fullWidth
              label="Телефон"
              variant="outlined"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                },
              }}
            />
            <TextField
              fullWidth
              label="Сообщение"
              multiline
              rows={4}
              variant="outlined"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                background: "linear-gradient(90deg, #43A047, #66BB6A)",
                borderRadius: "30px",
                fontWeight: "bold",
                fontSize: "16px",
                textTransform: "none",
                py: 1.5,
                color: "#fff",
                "&:hover": {
                  background: "linear-gradient(90deg, #388E3C, #4CAF50)",
                },
              }}
            >
              Отправить
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default SchoolPage;
