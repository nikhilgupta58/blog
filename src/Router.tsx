import { Redirect, Route, Switch } from "react-router-dom";
import { blogEntryRoute, homeRoute, newFormRoute } from "./constants/route";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NewForm from "./pages/NewForm";

export default function Router() {
  return (
    <Switch>
      <Route path={homeRoute} component={Home} />
      <Route path={newFormRoute} component={NewForm} />
      <Route path={blogEntryRoute} component={Blog} />
      <Route path={"*"}>
        <Redirect to={homeRoute} />
      </Route>
    </Switch>
  );
}
