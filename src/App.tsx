import React, { Component } from "react";
import StyleDemo from "./components/StyleDemo";
import SingleSignOn from "./components/SingleSignOn";
import AppMenu from "./components/AppMenu";
import { iAppState, Dispatch } from "./models/Store";
import { connect } from "react-redux";

class App extends Component<Props, {}> {
  render() {
    const { isAuthenticated } = this.props;
    return isAuthenticated ? (
      <div>
        <AppMenu></AppMenu>
        <div style={style.main}>
          <StyleDemo></StyleDemo>
        </div>
      </div>
    ) : (
      <SingleSignOn />
    );
  }
}

const style = {
  main: {
    paddingTop: "124px",
  },
};

type StateProps = {
  isAuthenticated: boolean;
};

type Props = StateProps;

const mapStateToProps = (state: iAppState): StateProps => ({
  isAuthenticated: state.authen.isAuthenticated,
});

export default connect(mapStateToProps, {})(App);
