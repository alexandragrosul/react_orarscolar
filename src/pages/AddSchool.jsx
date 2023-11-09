import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Box } from "../../node_modules/@mui/material/index";

const initialValues = {
  title: "",
  description: "",
  address: "",
  phone: "",
  region: "",
};

const regions = ["Region 1", "Region 2", "Region 3"];

const validateForm = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Title is required";
  }

  if (!values.description) {
    errors.description = "Description is required";
  }

  if (!values.address) {
    errors.address = "Address is required";
  }

  if (!values.phone) {
    errors.phone = "Phone is required";
  }

  if (!values.region) {
    errors.region = "Region is required";
  }

  return errors;
};

const AddSchool = () => {
  const handleSubmit = async (values) => {
    // Handle form submission here
    console.log(values);
    const request = await fetch(
      "https://escoala-7b63b-default-rtdb.europe-west1.firebasedatabase.app/coaches.json",
      {
        method: "POST",
        body: JSON.stringify(values),
      }
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Box sx={{ mt: "40px" }}>
        <h1 style={{ fontFamily: "Arial, sans-serif", fontSize: "32px" }}>
          Adauga Scoala
        </h1>
        <Form>
          <div style={{ marginBottom: "15px" }}>
            <Field
              sx={{ width: "100%" }}
              as={TextField}
              name="title"
              label="Title"
            />
            <ErrorMessage name="title" component="div" />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <Field
              sx={{ width: "100%" }}
              as={TextField}
              name="description"
              label="Description"
            />
            <ErrorMessage name="description" component="div" />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <Field
              sx={{ width: "100%" }}
              as={TextField}
              name="address"
              label="Address"
            />
            <ErrorMessage name="address" component="div" />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <Field
              sx={{ width: "100%" }}
              as={TextField}
              name="phone"
              label="Phone"
            />
            <ErrorMessage name="phone" component="div" />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="region-label">Region</InputLabel>
              <Field
                sx={{ width: "100%" }}
                as={Select}
                name="region"
                labelId="region-label"
              >
                {regions.map((region) => (
                  <MenuItem key={region} value={region}>
                    {region}
                  </MenuItem>
                ))}
              </Field>
            </FormControl>
            <ErrorMessage name="region" component="div" />
          </div>

          <Button
            sx={{ width: "100%" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Form>
      </Box>
    </Formik>
  );
};

export default AddSchool;
