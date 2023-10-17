import { Link } from "../../node_modules/@mui/material/index";

function NotFound() {
  return (
    <div>
      <h2>404 - Страница не найдена</h2>
      <p>Извините, запрашиваемая страница не существует.</p>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
}

export default NotFound;
