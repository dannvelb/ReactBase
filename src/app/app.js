import "./app.scss";
import "./assets/themes/dark/bootstrap.scss";
import "./assets/themes/ligth/bootstrap.scss";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./components/Layout/layout";
import NOT_FOUND from "./pages/NOTFOUND/index";

import NonAuthRouter from "./routers/nonAuthRouter";
import AuthRouter from "./routers/authRouter";

const App = ({ session: { IS_USER_AUTH, USER_TYPE } }) => {
  return (
    <div className="ligth-theme">
      <BrowserRouter>
        <Layout isAuth={IS_USER_AUTH}>
          <Switch>
            {IS_USER_AUTH ? <AuthRouter /> : <NonAuthRouter />}
            <RouteMiddleware
              path={null}
              component={NOT_FOUND}
              isAuth={IS_USER_AUTH}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

const RouteMiddleware = ({ component: Component }) => (
  <Route render={(props) => <Component {...props} />} />
);
export default connect((state) => state, {})(App);
