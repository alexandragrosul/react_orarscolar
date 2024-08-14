import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import RoundButton from "../components/layout/RoundButton";
import * as yup from "yup";

const Registration = () => {
  const initialValues = {
    // firstName: "",
    // lastName: "",
    name: "",
    email: "",
    password: "",
    // accountType: "",
    // termsAndConditions: false,
    // profilePicture: null,
    // age: "",
    // referrer: "",
    // bio: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const onSubmit = (values) => {
    console.log(values);
    fetch("https://api.escoala.md/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          // Если статус ответа не 2xx, выбрасываем ошибку
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });

    // const response = await fetch(url, {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, *cors, same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   redirect: "follow", // manual, *follow, error
    //   referrerPolicy: "no-referrer", // no-referrer, *client
    //   body: JSON.stringify(data), // body data type must match "Content-Type" header
    // });
  };

  return (
    <>
      <h1>Registration Form</h1>
      <p>Please fill out this form with the required information</p>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          {/* <fieldset> */}
          <label htmlFor="name">Enter Your Name: </label>
          <Field id="name" name="name" type="text" required />
          <ErrorMessage name="name" component="div" />

          {/* <label htmlFor="lastName">Enter Your Last Name: </label>
            <Field id="lastName" name="lastName" type="text" required />
            <ErrorMessage name="lastName" component="div" /> */}

          <label htmlFor="email">Enter Your Email: </label>
          <Field id="email" name="email" type="email" required />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Create Password: </label>
          <Field
            id="password"
            name="password"
            type="password"
            // pattern="[a-z0-5]{8,}"
            required
          />
          <ErrorMessage name="password" component="div" />
          {/* </fieldset> */}
          {/* <fieldset> */}
          {/* <label>
              <Field
                type="radio"
                name="accountType"
                value="personal"
                className="inline"
              />
              Personal Account
            </label> */}
          {/* <label>
              <Field
                type="radio"
                name="accountType"
                value="business"
                className="inline"
              />
              Business Account
            </label> */}
          <ErrorMessage name="accountType" component="div" />

          {/* <label>
              <Field
                type="checkbox"
                name="termsAndConditions"
                className="inline"
              />
              I accept the{" "}
              <a href="https://www.freecodecamp.org/news/terms-of-service/">
                terms and conditions
              </a>
            </label> */}
          <ErrorMessage name="termsAndConditions" component="div" />
          {/* </fieldset> */}
          <fieldset>
            {/* <label htmlFor="profilePicture">Upload a profile picture: </label>
            <Field id="profilePicture" type="file" name="profilePicture" />
            <ErrorMessage name="profilePicture" component="div" /> */}

            {/* <label htmlFor="age">Input your age (years): </label>
            <Field id="age" type="number" name="age" min="13" max="120" />
            <ErrorMessage name="age" component="div" />

            <label htmlFor="referrer">How did you hear about us?</label>
            <Field id="referrer" name="referrer" as="select">
              <option value="">(select one)</option>
              <option value="1">freeCodeCamp News</option>
              <option value="2">freeCodeCamp YouTube Channel</option>
              <option value="3">freeCodeCamp Forum</option>
              <option value="4">Other</option>
            </Field>
            <ErrorMessage name="referrer" component="div" />

            <label htmlFor="bio">Provide a bio:</label>
            <Field
              id="bio"
              name="bio"
              as="textarea"
              rows="3"
              cols="30"
              placeholder="I like coding on the beach..."
            />
            <ErrorMessage name="bio" component="div" /> */}
          </fieldset>
          <RoundButton name="Submit" type={"submit"} />
        </Form>
      </Formik>
    </>
  );
};

export default Registration;
