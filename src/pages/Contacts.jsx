import {
  Container,
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "../../node_modules/@mui/material/index";
import { Formik, Form, Field } from "formik";

import AlertDialog from "../components/layout/AlertDialog";

const Contacts = () => {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
    source: "",
  };

  const sources = ["facebook", "google", "prieteni"];

  const sendMessage = async (payload) => {
    const request = await fetch(
      "https://escoala-7b63b-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
  };

  const onSubmit = (values) => {
    console.log(values);
    try {
      sendMessage(values);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, resetForm }) => (
          <Form>
            <Stack
              spacing={3}
              //   minWidth="350px"
              maxWidth={"500px"}
              alignItems={"center"}
            >
              <h1 style={{ fontFamily: "Arial, sans-serif", fontSize: "32px" }}>
                Trimiteti mesaj
              </h1>
              {/* <Typography
                variant="h3"
                component="h1"
                sx={{ fontFamily: "Arial, sans-serif", fontSize: "32px" }}
              >
                Trimiteti mesaj
              </Typography> */}
              <TextField
                name="name"
                label="Name"
                fullWidth
                value={values.name}
                onChange={handleChange}
                required
              />

              <TextField
                name="phone"
                label="Phone"
                fullWidth
                value={values.phone}
                onChange={handleChange}
              />
              <TextField
                name="email"
                label="Email"
                fullWidth
                value={values.email}
                onChange={handleChange}
                required
              />

              <TextField
                name="message"
                label="Mesajul"
                fullWidth
                value={values.message}
                onChange={handleChange}
                required
              />

              <FormControl fullWidth>
                <InputLabel>De unde ati aflat despre noi?</InputLabel>
                <Field as={Select} name="source">
                  {sources.map((source) => (
                    <MenuItem key={source} value={source}>
                      {source}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <Button type="submit" variant="contained" color="primary">
                Trimite mesaj
              </Button>

              <Button onClick={resetForm} variant="outlined" color="primary">
                Reset form
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
      {/* <AlertDialog
        title={"Error"}
        message={
          "Nu s-a primit sa creati repetitor, incercati va rog mai tarziu"
        }
        open={open}
        setOpen={setOpen}
      /> */}
    </Container>
  );
};

export default Contacts;
