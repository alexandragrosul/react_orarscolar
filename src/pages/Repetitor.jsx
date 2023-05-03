import { useParams } from "react-router-dom";
function Repetitor() {
  const route = useParams();
  return <p>Repetitor{route.id}</p>;
}

export default Repetitor;
