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


const Login = () => {
  const {t} = useTranslation();
  const initialValues = {
    email: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (values) => {
    console.log(values); // Обработка полученных значений
  };

  const roundedInputStyle = {
    borderRadius: "50px",
  };

  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
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
                {t('login.loginTitle')}
                </Typography>
                <TextField
                  name="email"
                  label={t('login.passwordLabel')}
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
                  label={t('login.passwordLabel')}
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

                <RoundButton
                  name={t('login.loginButton')}
                  variant={"contained"}
                  type={"submit"}
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
