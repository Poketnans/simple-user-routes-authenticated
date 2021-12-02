import { Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Route from "./routes";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route isPrivate path="/dashboard" exact component={Dashboard} />
  </Switch>
);

export default Routes;
