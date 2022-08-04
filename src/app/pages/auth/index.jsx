import React, { Component } from "react";
import { TextTranslation } from "../../helpers/textTranslation";
import { AuthProvider } from "../../store/providers/auth.provider";
import { AuthFormClient } from "./FormClient";
import { connect } from "react-redux";
import {
  SESSION_CLOSE_CLIENT_ACTION,
  SESSION_SET_CLIENT_ACTION,
  SESSION_SET_USER_ACTION,
} from "../../store/reducers/session.reducer";
import { AuthFormLogin } from "./FormLogin";
import { withParams } from "../../helpers/params.router";
import { InjectProviders } from "../../helpers/injectProviders";
class AuthenticationPageClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      loading: false,
    };
  }
  componentDidMount = () => {
    console.log(this.props);
    this.getClientCode("TEST");
  };

  getClientCode = async () => {
    if (this.state.code) {
      this.setState({ loading: true });
      const response = await this.authProvider.authGetClientExist(
        this.state.code
      );
      this.setState({ loading: false });
      if (response) {
        this.props.setClient(response);
      }
    }
  };

  loginAction = async ({ usuario, pass }) => {
    const { authProvider } = this.props;
    this.setState({ loading: true });
    const response = await authProvider.authLogin({
      username: `${usuario}%${this.props.client.id}`,
      password: pass,
    });
    this.setState({ loading: false });
    if (response) {
      this.props.setUser(response.user, response.token);
      localStorage.setItem("token", response.token);
    }
  };

  render = () => (
    <div className="d-flex w-100 h-100 justify-content-center align-items-center ">
      <div className="">
        <div className="text-center">
          {this.props.client ? (
            <div className="pb-2">
              <div className="text-light h1 my-0 py-0">
                {this.props.client.name}
              </div>
              <a
                onClick={this.props.closeSessionClient}
                className="small text-light  my-0 py-0 pointer"
              >
                Esta no es mi escuela
              </a>
            </div>
          ) : (
            <div className="text-light h3">
              <TextTranslation name={"welcome.title"}></TextTranslation>
            </div>
          )}

          <div>
            {this.state.loading ? (
              "Loading"
            ) : !this.props.client ? (
              <>
                <AuthFormClient
                  searchClientCode={this.getClientCode}
                  value={this.state.code}
                  onChangeValue={(code) => this.setState({ code })}
                />
              </>
            ) : (
              <>
                <AuthFormLogin loginAction={this.loginAction} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    client: state.session.client,
    user: state.session.user,
  }),
  {
    setClient: SESSION_SET_CLIENT_ACTION,
    setUser: SESSION_SET_USER_ACTION,
    closeSessionClient: SESSION_CLOSE_CLIENT_ACTION,
  }
)(
  withParams(
    InjectProviders(AuthenticationPageClass, {
      authProvider: new AuthProvider(),
    })
  )
);
