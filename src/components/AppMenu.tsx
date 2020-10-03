import React, { Component } from "react";
import FlynotesMenu from "flynotes-menu/src/components/FlynotesMenu";
import { appClient } from "../controllers";
import { UserWithPracticeAndEmail } from "../submodules/flynotes-base/model/user/User";
import config from "src/constants/Config";
import { connect} from "react-redux";

class AppMenu extends Component<Props, {}> {
  render() {
    const { jwt, user } = this.props;
    return user ? (
      <FlynotesMenu
        homepageUrl={config.applicationUrl}
        serviceUrls={{
          FLYNOTES_URL: config.apps.flynotes,
          FLYSEND_URL: config.apps.flySend,
          FLYCOMMAND_URL: config.apps.flyCommand,
          FLYMED_URL: config.apps.flymed,
          FLYACCOUNT_URL: config.apps.flyAccount,
          practiceId: user.practiceId,
        }}
        baseUrl={config.applicationUrl}
        logout={() => {
          window.location.href = config.logoutUrl;
        }}
        jwt={jwt}
        user={user}
        client={appClient}
      />
    ) : (
      <div></div>
    );
  }
}

type StateProps = {
  jwt: string;
  user: UserWithPracticeAndEmail;
};

type DispatchProps = {};

type Props = StateProps & DispatchProps;

const mapStateToProps = (state: any): StateProps => {
  return {
    jwt: state.authen.jwt,
    user: state.authen.user,
  };
};

export default connect(mapStateToProps, {})(AppMenu);
