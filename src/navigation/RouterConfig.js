import { Route } from "../../node_modules/@mui/icons-material/index";
import { Switch } from "../../node_modules/@mui/material/index";
import Repetitor from "../components/Repetitor";
import AnonymousMessage from "../pages/AnonymousMessage";
import Home from "../pages/Home";

export const RouterConfig = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/repetitori" component={Home} />
      <Route exact path="/repetitori/:id" component={Repetitor} />
      <Route exact path="/anonymous-message" component={AnonymousMessage} />
    </Switch>
  );
};

export default RouterConfig;
