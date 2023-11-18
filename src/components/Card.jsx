import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import { Card, CardContent, Typography, Box } from "@mui/material";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";
import Rating from "@mui/material/Rating";
import {
  Link,
  Grid,
  Chip,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "../../node_modules/@mui/material/index";
import RoundButton from "./layout/RoundButton";
import { Formik, Form } from "formik";

export const CardComponent = ({ profesor }) => {
  const [openOneToOne, setOpenOneToOne] = React.useState(false);
  const [openInGroup, setOpenInGroup] = React.useState(false);
  const handleCloseOneToOne = () => {
    setOpenOneToOne(false);
  };

  const handleCloseGroup = () => {
    setOpenInGroup(false);
  };
  const handleClickBookLesson = () => {
    setOpenOneToOne(true);
  };

  const handleClickBookLessonInGroup = () => {
    setOpenInGroup(true);
  };
  const initialValues = {
    repetitor: profesor.id,
    name: "",
    phone: "",
    email: "",
    time: "",
    age: "",
  };
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    time: "",
    age: "",
  });
  const bookLesson = async (payload) => {
    const request = await fetch(
      "https://escoala-7b63b-default-rtdb.europe-west1.firebasedatabase.app/lessonRequests.json",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    if (request.ok === false) {
      setOpenOneToOne(false);
    }
  };
  const onSubmit = (values) => {
    try {
      bookLesson(values);
      setOpenOneToOne(false);
    } catch (error) {
      console.log(error.message);
    }
  };
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
              <Grid
                item
                xs={12}
                lg={2}
                sx={{ display: "flex" }}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    margin: "0 auto",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {!profesor.image ? (
                    <img
                      style={{ borderRadius: "50px" }}
                      src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      height="160"
                      weight="160"
                      alt="avatar"
                    />
                  ) : (
                    <NoPhotographyIcon sx={{ fontSize: 40 }} />
                  )}
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
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h4"
                      fontWeight="bold"
                    >
                      {profesor.name}
                    </Typography>
                  </Box>
                  <Box>
                    <Rating
                      name="read-only"
                      value={Math.floor(Math.random() * 5) + 1}
                      readOnly
                    />
                  </Box>
                </Stack>
                <Stack spacing={1}>
                  <Box display="flex" sx={{ alignItems: "center" }}>
                    <AutoStoriesIcon
                      sx={{ color: "primary.main", mr: 2, fontSize: "20px" }}
                    />
                    {profesor?.material?.map((el) => {
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
                    {profesor?.languages?.map((language) => (
                      <Chip
                        label={language}
                        key={language}
                        sx={{
                          marginRight: "3px",
                        }}
                      />
                    ))}
                  </Box>
                  {/* <Box
                    display="flex"
                    marginTop={2}
                    sx={{ alignItems: "center" }}
                  >
                    <PhoneInTalkIcon
                      sx={{ color: "primary.main", mr: 2, fontSize: "20px" }}
                    />
                    <Typography textAlign={"left"}>{profesor.phone}</Typography>
                  </Box> */}
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
                        <strong>Despre profesor:</strong>{" "}
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
                          {profesor?.price}
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
                    name={"Rezerva lectie"}
                    style={{ color: "white" }}
                    onClick={handleClickBookLesson}
                  ></RoundButton>

                  <RoundButton
                    name={"Lectie in grup"}
                    variant="outlined"
                    onClick={handleClickBookLessonInGroup}
                  ></RoundButton>
                  {/* Dialog 1 to 1 */}
                  <Dialog open={openOneToOne} onClose={handleCloseOneToOne}>
                    <DialogTitle>Aplicare la o lecție </DialogTitle>
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                      {({ values, handleChange, resetForm }) => (
                        <>
                          <Form>
                            <DialogContent>
                              <DialogContentText>
                                LECTIE ONLINE
                              </DialogContentText>

                              <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Nume"
                                type="text"
                                fullWidth
                                variant="standard"
                                // value={formData.name}
                                // onChange={(event) => {
                                //   const name = event.target.value;
                                //   setFormData((formData) => ({
                                //     ...name,
                                //   }));
                                // }}
                                value={values.name}
                                onChange={handleChange}
                              />
                              <TextField
                                autoFocus
                                margin="dense"
                                id="phone"
                                label="Telefon"
                                type="text"
                                fullWidth
                                variant="standard"
                                // value={formData.phone}
                                // onChange={(event) => {
                                //   const phone = event.target.value;
                                //   setFormData((formData) => ({
                                //     ...phone,
                                //   }));
                                // }}
                                value={values.phone}
                                onChange={handleChange}
                              />
                              <TextField
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Email"
                                type="text"
                                fullWidth
                                variant="standard"
                                // value={formData.email}
                                // onChange={(event) => {
                                //   const email = event.target.value;
                                //   setFormData((formData) => ({
                                //     ...email,
                                //   }));
                                // }}
                                value={values.email}
                                onChange={handleChange}
                              />
                              <TextField
                                autoFocus
                                margin="dense"
                                id="time"
                                label="Timp"
                                type="text"
                                fullWidth
                                variant="standard"
                                // value={formData.time}
                                // onChange={(event) => {
                                //   const time = event.target.value;
                                //   setFormData((formData) => ({
                                //     ...time,
                                //   }));
                                // }}
                                value={values.time}
                                onChange={handleChange}
                              />
                              <TextField
                                autoFocus
                                margin="dense"
                                id="age"
                                label="Varsta"
                                type="text"
                                fullWidth
                                variant="standard"
                                // value={formData.age}
                                // onChange={(event) => {
                                //   const age = event.target.value;
                                //   setFormData((formData) => ({
                                //     ...age,
                                //   }));
                                // }}
                                value={values.age}
                                onChange={handleChange}
                              />
                            </DialogContent>
                            <DialogActions>
                              {/* <Button onClick={}>Rezerveaza</Button>
                      <Button onClick={handleClose}>Cancel</Button> */}
                              <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                              >
                                Rezerva lectie
                              </Button>

                              <Button
                                onClick={() => {
                                  resetForm();
                                  handleCloseOneToOne();
                                }}
                                variant="outlined"
                                color="primary"
                              >
                                Inchide
                              </Button>
                            </DialogActions>
                          </Form>
                        </>
                      )}
                    </Formik>
                  </Dialog>
                  {/* Dialog group */}
                  <Dialog open={openInGroup} onClose={handleCloseGroup}>
                    <DialogTitle>Aplicare la o lecție de grup </DialogTitle>
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                      {({ values, handleChange, resetForm }) => (
                        <>
                          <Form>
                            <DialogContent>
                              <DialogContentText>
                                LECTIE DE GRUP
                              </DialogContentText>

                              <TextField
                                autoFocus
                                margin="dense"
                                id="material"
                                label="Material"
                                type="text"
                                fullWidth
                                variant="standard"
                                // value={formData.age}
                                // onChange={(event) => {
                                //   const age = event.target.value;
                                //   setFormData((formData) => ({
                                //     ...age,
                                //   }));
                                // }}
                                value={values.age}
                                onChange={handleChange}
                              />

                              <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Nume"
                                type="text"
                                fullWidth
                                variant="standard"
                                // value={formData.name}
                                // onChange={(event) => {
                                //   const name = event.target.value;
                                //   setFormData((formData) => ({
                                //     ...name,
                                //   }));
                                // }}
                                value={values.name}
                                onChange={handleChange}
                              />
                              <TextField
                                autoFocus
                                margin="dense"
                                id="phone"
                                label="Telefon"
                                type="text"
                                fullWidth
                                variant="standard"
                                // value={formData.phone}
                                // onChange={(event) => {
                                //   const phone = event.target.value;
                                //   setFormData((formData) => ({
                                //     ...phone,
                                //   }));
                                // }}
                                value={values.phone}
                                onChange={handleChange}
                              />
                              <TextField
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Email"
                                type="text"
                                fullWidth
                                variant="standard"
                                // value={formData.email}
                                // onChange={(event) => {
                                //   const email = event.target.value;
                                //   setFormData((formData) => ({
                                //     ...email,
                                //   }));
                                // }}
                                value={values.email}
                                onChange={handleChange}
                              />
                              <TextField
                                autoFocus
                                margin="dense"
                                id="time"
                                label="Timp"
                                type="text"
                                fullWidth
                                variant="standard"
                                // value={formData.time}
                                // onChange={(event) => {
                                //   const time = event.target.value;
                                //   setFormData((formData) => ({
                                //     ...time,
                                //   }));
                                // }}
                                value={values.time}
                                onChange={handleChange}
                              />
                              <TextField
                                autoFocus
                                margin="dense"
                                id="age"
                                label="Varsta"
                                type="text"
                                fullWidth
                                variant="standard"
                                // value={formData.age}
                                // onChange={(event) => {
                                //   const age = event.target.value;
                                //   setFormData((formData) => ({
                                //     ...age,
                                //   }));
                                // }}
                                value={values.age}
                                onChange={handleChange}
                              />
                            </DialogContent>
                            <DialogActions>
                              {/* <Button onClick={}>Rezerveaza</Button>
                      <Button onClick={handleClose}>Cancel</Button> */}
                              <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                              >
                                Rezerva lectie
                              </Button>

                              <Button
                                onClick={() => {
                                  resetForm();
                                  handleCloseGroup();
                                }}
                                variant="outlined"
                                color="primary"
                              >
                                Inchide
                              </Button>
                            </DialogActions>
                          </Form>
                        </>
                      )}
                    </Formik>
                  </Dialog>
                  {/* <RoundButton
                    name={"Trimite un mesaj"}
                    style={{ color: "white" }}
                  ></RoundButton> */}
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};
