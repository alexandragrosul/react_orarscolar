import { Grid } from "../../node_modules/@mui/material/index";

const SchoolAdd = () => {
  return (
    <Grid>
      <Grid
        item
        xs={12}
        sx={{ background: "white", display: "flex", justifyContent: "center" }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdOWZv0koeXfpNk6SxnXRN7QDjhEPPHLEwiKqldcxuBN-xKbg/viewform?embedded=true"
          width="640"
          height="1209"
          frameBorder="0"
          marginHeight="0"
          marginwidth="0"
          title="Adauga scoala"
        >
          Загрузка…
        </iframe>
      </Grid>
    </Grid>
  );
};

export default SchoolAdd;
