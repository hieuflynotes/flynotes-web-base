import { createModel } from "@rematch/core";
import { UserWithPracticeAndEmail } from "src/submodules/flynotes-base/model/user/User";
import { userController, appClient } from "src/controllers";
import LocalStorage from "src/helpers/localStorage";
import { history } from "src/routes";
import config from "src/constants/Config";

export type AuthenModel = {
  user?: UserWithPracticeAndEmail;
  isAuthenticated?: boolean;
  jwt?: any;
};

const initState = {
  isAuthenticated: false,
};

export const authen = createModel<AuthenModel>({
  state: initState,
  reducers: {
    fetchData(state: AuthenModel, data: any = {}) {
      state = {
        ...state,
        ...data,
      };
      return state;
    },
  },
  effects: (dispatch: any) => ({
    loginSuccess(jwt: string, state) {
      console.log(`[SSO] success with jwt is ${jwt}`);
      appClient.defaults.headers.common["Authorization"] = `JWT ${jwt}`;
      userController.getMe().then((user) => {
        const authen: AuthenModel = {
          user: user,
          isAuthenticated: true,
          jwt: jwt,
        };
        dispatch.authen.fetchData(authen);
      });
    },
    logout(redirect = true) {
      const authen: AuthenModel = {
        user: undefined,
        isAuthenticated: false,
        jwt: "",
      };
      dispatch.authen.fetchData(authen);
      LocalStorage.removeToken();
      appClient.defaults.headers.common["Authorization"] = null;
      redirect && history.push(config.logoutUrl);
    },
  }),
});
