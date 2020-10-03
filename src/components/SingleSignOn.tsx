import React, { Component } from "react";
import StyleDemo from "./StyleDemo";
import config from "../constants/Config";
import { connect } from "react-redux";

class SingleSignOn extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
    window.addEventListener("message", this.ssoListener);
  }

  render() {
    return (
      <div style={{ display: "none" }}>
        <iframe src={config.ssoUrl} title="sso" />
        <StyleDemo></StyleDemo>
      </div>
    );
  }

  ssoListener = (event: MessageEvent) => {
    const self = this;
    if (event.data.jwt) {
      self.props.loginSuccess(event.data.jwt);
      window.removeEventListener("message", this.ssoListener);
    } else if (event.data.loginUrl) {
      window.location.href = event.data.loginUrl;
    }
  };
}

type DispatchProps = {
  loginSuccess: (jwt: string) => void;
};

type OwnProps = {};

type StateProps = {
  isAuthen: boolean;
};

type Props = OwnProps & DispatchProps & StateProps;

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return { loginSuccess: (jwt: string) => dispatch.authen.loginSuccess(jwt) };
};

const mapStateToProps = (state: any): StateProps => {
  return {
    isAuthen: state.authen.isAuthenticated,
  };
};

// export default SingleSignOn;
export default connect(mapStateToProps, mapDispatchToProps)(SingleSignOn);
