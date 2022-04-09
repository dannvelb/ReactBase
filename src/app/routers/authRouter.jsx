import { Switch, BrowserRouter, Route } from "react-router-dom";
import HomeComponent from "../pages/Home/home";

const AuthRouter = () => (
  <BrowserRouter>
    <Switch>
      <RouteMiddleware path={"/"} component={HomeComponent} isAuth={true} />
    </Switch>
  </BrowserRouter>
);

const RouteMiddleware = ({ component: Component }) => (
  <Route render={(props) => <Component {...props} />} />
);

export default AuthRouter;
