import { Link } from "../../node_modules/@mui/material/index";

function NotFound() {
  return (
    <div>
      <h2>404 - Page not found</h2>
      <p>Извините, запрашиваемая страница не существует.</p>
      <Link to="/"> to homepage</Link>
    </div>
  );
}

export default NotFound;
