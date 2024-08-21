import React, { useState } from "react";
import { Formik, Form } from "formik";
import { TextField, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import {
  FormControl,
  IconButton,
  InputAdornment,
} from "../../node_modules/@mui/material/index";
import {
  VisibilityOff,
  Visibility,
} from "../../node_modules/@mui/icons-material/index";
import RoundButton from "../components/layout/RoundButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (values) => {
    console.log(values); // Обработка полученных значений
    fetch("https://api.escoala.md/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          // Если статус ответа не 2xx, выбрасываем ошибку
          console.log(response);
          throw new Error("Network response was not ok");
        }
        // navigate("/");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const roundedInputStyle = {
    borderRadius: "50px",
  };

  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleChange, resetForm }) => (
            <Form>
              <Stack
                spacing={3}
                minWidth="350px"
                maxWidth={"500px"}
                alignItems={"center"}
              >
                <Typography variant="h3" component="h1">
                  {t("login.loginTitle")}
                </Typography>
                <TextField
                  name="email"
                  label={t("login.emailLabel")}
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputProps={{
                    style: roundedInputStyle,
                  }}
                />
                <TextField
                  name="password"
                  label={t("login.passwordLabel")}
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  InputProps={{
                    style: roundedInputStyle,
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />

                <FormControl
                  sx={{ m: 1, width: "25ch" }}
                  variant="filled"
                ></FormControl>

                {error && <div>{JSON.stringify(error)}</div>}

                <RoundButton
                  name={t("login.loginButton")}
                  variant={"contained"}
                  type={"submit"}
                  style={{ color: "white" }}
                />

                <div></div>
              </Stack>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default Login;
