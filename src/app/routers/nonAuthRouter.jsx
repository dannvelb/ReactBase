import { Switch, BrowserRouter, Route } from "react-router-dom";
import LoginComponent from "../pages/Auth/login/index";
import ForgotPassword from "../pages/Auth/forgot-password";
import ResetPassword from "../pages/Auth/reset-password";

const NonAuthRouter = () => (
  <BrowserRouter>
    <Switch>
      <RouteMiddleware path={"/"} component={LoginComponent} isAuth={false} />
      <RouteMiddleware
        path={"/reset-password"}
        component={ResetPassword}
        isAuth={false}
      />
      <RouteMiddleware
        path={"/forgot-password"}
        component={ForgotPassword}
        isAuth={false}
      />
    </Switch>
  </BrowserRouter>
);

const RouteMiddleware = ({ component: Component }) => (
  <Route render={(props) => <Component {...props} />} />
);

export default NonAuthRouter;
