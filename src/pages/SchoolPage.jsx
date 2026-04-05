import { useParams, Link } from "react-router-dom";
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
  Grid,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import BusinessIcon from "@mui/icons-material/Business";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const SchoolPage = () => {
  const { id } = useParams();
  const [school, setSchool] = useState({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const fetchSchoolData = useCallback(async () => {
    try {
      const response = await fetch(`https://api.escoala.md/api/schools/${id}`);
      const data = await response.json();
      setSchool(data?.data || {});
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
    console.log("Formular trimis:", form);
    setModalOpen(false);
    setForm({ name: "", phone: "", message: "" });
    alert("Cererea a fost trimisă! Vom lua legătura cu dumneavoastră.");
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

  const serviceAddresses = Array.isArray(school?.service_address)
    ? school.service_address
    : school?.service_address
    ? JSON.parse(school.service_address)
    : [];

  return (
    <Box
      sx={{ background: "linear-gradient(135deg, #EAFBEA, #F0FFF4)", py: 6 }}
    >
      <Fade in timeout={700}>
        <Container
          sx={{
            backgroundColor: "#fff",
            borderRadius: "30px",
            boxShadow: "0 12px 50px rgba(0,0,0,0.12)",
            padding: { xs: 3, md: 6 },
            maxWidth: "1200px",
          }}
        >
          {/* Breadcrumbs */}
          <Breadcrumbs sx={{ mb: 4, fontSize: "16px" }}>
            <Link
              to="/schools"
              style={{
                textDecoration: "none",
                color: "#43A047",
                fontWeight: 600,
              }}
            >
              Toate școlile
            </Link>
            <Typography sx={{ color: "#666" }}>
              {school?.name || "Școală necunoscută"}
            </Typography>
          </Breadcrumbs>

          {/* Карточка с картой и основными данными */}
          <Slide in direction="up" timeout={800}>
            <Card
              sx={{
                borderRadius: "25px",
                mb: 5,
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                "&:hover": { transform: "scale(1.02)" },
                transition: "transform 0.3s ease",
              }}
            >
              <MapContainer
                center={[
                  school?.latitude || 47.060915,
                  school?.longitude || 28.87397,
                ]}
                zoom={15}
                scrollWheelZoom={false}
                style={{ height: "350px", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  position={[
                    school?.latitude || 47.060915,
                    school?.longitude || 28.87397,
                  ]}
                >
                  <Popup>{school?.name || "Școală necunoscută"}</Popup>
                </Marker>
              </MapContainer>

              <CardContent sx={{ textAlign: "center", p: 5 }}>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: "#2E7D32", mb: 2 }}
                >
                  {school?.name || "Nu există date"}
                </Typography>
                {["phone", "email", "website", "status", "profile"].map((f) => (
                  <Typography
                    key={f}
                    variant="h6"
                    sx={{ color: "#555", mb: 1 }}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}:{" "}
                    {school[f] || "Nu este specificat"}
                  </Typography>
                ))}
                <Button
                  onClick={handleModalOpen}
                  sx={{
                    mt: 3,
                    borderRadius: "30px",
                    padding: "12px 40px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#fff",
                    textTransform: "none",
                    background: "linear-gradient(90deg, #43A047, #66BB6A)",
                    boxShadow: "0 8px 25px rgba(67,160,71,0.3)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #388E3C, #4CAF50)",
                    },
                  }}
                >
                  Contactează școala
                </Button>
              </CardContent>
            </Card>
          </Slide>

          {/* Галерея фото */}
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 3, color: "#2E7D32" }}
            >
              Galerie foto
            </Typography>
            {school?.gallery?.length > 0 ? (
              <Grid container spacing={2}>
                {school.gallery.map((img, i) => (
                  <Grid item xs={6} sm={4} md={3} key={i}>
                    <Card
                      sx={{
                        borderRadius: "15px",
                        overflow: "hidden",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                        transition: "transform 0.3s",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={img}
                        sx={{ width: "100%", height: 150, objectFit: "cover" }}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography>Nu există fotografii</Typography>
            )}
          </Box>

          {/* Адреса/Сервисы */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 3, color: "#2E7D32" }}
          >
            Adrese de serviciu
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
                primary="Afișează adresele"
                primaryTypographyProps={{ fontWeight: 600 }}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {serviceAddresses.length > 0 ? (
                  serviceAddresses.map((a, i) => (
                    <ListItemButton
                      key={i}
                      sx={{
                        pl: 6,
                        borderBottom: "1px solid #eee",
                        "&:hover": { backgroundColor: "#FAFAFA" },
                      }}
                    >
                      <ListItemText primary={a} />
                    </ListItemButton>
                  ))
                ) : (
                  <Typography sx={{ pl: 6, py: 1 }}>Nu există date</Typography>
                )}
              </List>
            </Collapse>
          </List>

          {/* Персонал */}
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 3, color: "#2E7D32" }}
            >
              Contact personal
            </Typography>
            <Grid container spacing={2}>
              {school?.staff?.length > 0 ? (
                school.staff.map((p, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Card
                      sx={{
                        p: 2,
                        borderRadius: "15px",
                        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                        "&:hover": { transform: "scale(1.03)" },
                        transition: "transform 0.3s",
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {p.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        Funcție: {p.position || "Nu este specificat"}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        Telefon: {p.phone || "Nu este specificat"}
                      </Typography>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Typography sx={{ marginLeft: 3 }}>
                  Nu există contacte
                </Typography>
              )}
            </Grid>
          </Box>

          {/* Описание */}
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, color: "#2E7D32" }}
            >
              Despre școală
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.6 }}>
              {school?.description || "Nu există descriere."}
            </Typography>
          </Box>

          {/* Модальное окно формы */}
          <Modal
            open={modalOpen}
            onClose={handleModalClose}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
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
                  Contactează școala
                </Typography>
                {["name", "phone", "message"].map((f) => (
                  <TextField
                    key={f}
                    fullWidth
                    label={
                      f === "name"
                        ? "Numele dvs."
                        : f === "phone"
                        ? "Telefon"
                        : "Mesaj"
                    }
                    multiline={f === "message"}
                    rows={f === "message" ? 4 : 1}
                    value={form[f]}
                    onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                    sx={{
                      mb: 3,
                      "& .MuiOutlinedInput-root": { borderRadius: "30px" },
                    }}
                  />
                ))}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    py: 1.5,
                    fontWeight: "bold",
                    fontSize: 16,
                    borderRadius: "30px",
                    textTransform: "none",
                    color: "#fff",
                    background: "linear-gradient(90deg,#43A047,#66BB6A)",
                    "&:hover": {
                      background: "linear-gradient(90deg,#388E3C,#4CAF50)",
                    },
                  }}
                >
                  Trimite
                </Button>
              </Box>
            </Fade>
          </Modal>
        </Container>
      </Fade>
    </Box>
  );
};

export default SchoolPage;
