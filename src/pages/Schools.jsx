import { schoolsData } from "../utils/schoolsData";
import School from "../components/School";
import { Container } from "@mui/system";
const Schools = () => {
  console.log(schoolsData);
  return (
    <Container
      sx={{
        padding: "20px 0",
      }}
    >
      <h1>Scoli</h1>
      {schoolsData
        ? schoolsData.map((school) => (
            <School school={school} key={school.id} />
          ))
        : "Nu sunt scoli!"}
    </Container>
  );
};

export default Schools;
