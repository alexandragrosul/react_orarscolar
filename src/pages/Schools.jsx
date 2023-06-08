import { schoolsData } from "../utils/schoolsData";
import School from "../components/School";
const Schools = () => {
  console.log(schoolsData);
  return (
    <>
      <h1>Scoli</h1>
      {schoolsData
        ? schoolsData.map((school) => (
            <School school={school} key={school.id} />
          ))
        : "Nu sunt scoli"}
    </>
  );
};

export default Schools;
