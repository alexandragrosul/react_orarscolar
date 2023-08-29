import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Button, TextField, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "../../node_modules/@mui/material/index";
import {
  VisibilityOff,
  Visibility,
} from "../../node_modules/@mui/icons-material/index";
import RoundButton from "../components/layout/RoundButton";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = (values) => {
    console.log(values); // Обработка полученных значений
  };

  const roundedInputStyle = {
    borderRadius: "50px", // Измените значение радиуса по вашему выбору
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
                  Login
                </Typography>
                <TextField
                  name="email"
                  label="Email Address"
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
                  label="Password"
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

                <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                  {/* <InputLabel htmlFor="filled-adornment-password">
                    Password
                  </InputLabel> */}
                  {/* <FilledInput
                    name="password"
                    label="Password"
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
                  /> */}

                  {/* <OutlinedInput
                    name="password"
                    label="Password"
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
                  /> */}
                </FormControl>

                {/* <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{
                    borderRadius: "100px",
                    backgroundColor: "green",
                  }}
                >
                  Login
                </Button> */}

                <RoundButton
                  name={"Login"}
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
