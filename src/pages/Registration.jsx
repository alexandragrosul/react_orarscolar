import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import RoundButton from "../components/layout/RoundButton";

const Registration = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    newPassword: "",
    accountType: "",
    termsAndConditions: false,
    profilePicture: null,
    age: "",
    referrer: "",
    bio: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <h1>Registration Form</h1>
      <p>Please fill out this form with the required information</p>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <fieldset>
            <label htmlFor="firstName">Enter Your First Name: </label>
            <Field id="firstName" name="firstName" type="text" required />
            <ErrorMessage name="firstName" component="div" />

            <label htmlFor="lastName">Enter Your Last Name: </label>
            <Field id="lastName" name="lastName" type="text" required />
            <ErrorMessage name="lastName" component="div" />

            <label htmlFor="email">Enter Your Email: </label>
            <Field id="email" name="email" type="email" required />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="newPassword">Create a New Password: </label>
            <Field
              id="newPassword"
              name="newPassword"
              type="password"
              pattern="[a-z0-5]{8,}"
              required
            />
            <ErrorMessage name="newPassword" component="div" />
          </fieldset>
          <fieldset>
            <label>
              <Field
                type="radio"
                name="accountType"
                value="personal"
                className="inline"
              />
              Personal Account
            </label>
            <label>
              <Field
                type="radio"
                name="accountType"
                value="business"
                className="inline"
              />
              Business Account
            </label>
            <ErrorMessage name="accountType" component="div" />

            <label>
              <Field
                type="checkbox"
                name="termsAndConditions"
                className="inline"
              />
              I accept the{" "}
              <a href="https://www.freecodecamp.org/news/terms-of-service/">
                terms and conditions
              </a>
            </label>
            <ErrorMessage name="termsAndConditions" component="div" />
          </fieldset>
          <fieldset>
            <label htmlFor="profilePicture">Upload a profile picture: </label>
            <Field id="profilePicture" type="file" name="profilePicture" />
            <ErrorMessage name="profilePicture" component="div" />

            <label htmlFor="age">Input your age (years): </label>
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
            <ErrorMessage name="bio" component="div" />
          </fieldset>
          <RoundButton name="Submit" type={"submit"} />
        </Form>
      </Formik>
    </>
  );
};

export default Registration;
