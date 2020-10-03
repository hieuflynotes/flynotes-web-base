export interface IConfig {
  applicationUrl: string;
  apiGatewayUrl: string;
  ssoUrl: string;
  logoutUrl: string;
  practiceUrl: string;
  apps: {
    flynotes: string;
    flySend: string;
    flymed: string;
    flyCommand: string;
    flyAccount: string;
    fallowTimeCalculator: string;
  };
}

const localAppUrl = "http://localhost:3000";
const devAppUrl = "http://localhost:3000";
const stagingAppUrl = "http://localhost:3000";
const prodAppUrl = "http://localhost:3000";

const localConfig: IConfig = {
  applicationUrl: localAppUrl,
  apiGatewayUrl: "https://apidev.comdetect.com",
  ssoUrl: `https://account.dev.myflynotes.com/sso.html?callbackDomain=${localAppUrl}`,
  logoutUrl: `https://account.dev.myflynotes.com/logout/login/${localAppUrl}`,
  apps: {
    flynotes: "https://flynotes.dev.myflynotes.com",
    flySend: "https://apidev.comdetect.com",
    flymed: "https://flymed.dev.myflynotes.com",
    flyCommand: "https://flymed.dev.myflynotes.com",
    flyAccount: "https://accountflynotes.afivn.com",
    fallowTimeCalculator: "http://localhost:3000",
  },
  practiceUrl: "https://flynotes.dev.myflynotes.com/#/?token={jwt}",
};

const developmentConfig: IConfig = {
  applicationUrl: devAppUrl,
  apiGatewayUrl: "https://apidev.comdetect.com",
  ssoUrl: `https://account.dev.myflynotes.com/sso.html?callbackDomain=${devAppUrl}`,
  logoutUrl: `https://account.dev.myflynotes.com/logout/login/${devAppUrl}`,
  practiceUrl: "https://flynotes.dev.myflynotes.com/#/?token={jwt}",
  apps: {
    flynotes: "https://flynotes.dev.myflynotes.com",
    flySend: "https://apidev.comdetect.com",
    flymed: "https://flymed.dev.myflynotes.com",
    flyCommand: "https://flymed.dev.myflynotes.com",
    flyAccount: "https://accountflynotes.afivn.com",
    fallowTimeCalculator: "http://ftc.dev.myflynotes.com",
  },
};

const stagingConfig: IConfig = {
  applicationUrl: prodAppUrl,
  apiGatewayUrl: "https://apidev.comdetect.com",
  ssoUrl: `https://account.dev.myflynotes.com/sso.html?callbackDomain=${prodAppUrl}`,
  logoutUrl: `https://account.dev.myflynotes.com/logout/login/${prodAppUrl}`,
  practiceUrl: "https://flynotes.dev.myflynotes.com/#/?token={jwt}",
  apps: {
    flynotes: "https://flynotes.dev.myflynotes.com",
    flySend: "https://apidev.comdetect.com",
    flymed: "https://flymed.dev.myflynotes.com",
    flyCommand: "https://flymed.dev.myflynotes.com",
    flyAccount: "https://accountflynotes.afivn.com",
    fallowTimeCalculator: "http://localhost:3000",
  },
};

const productionConfig: IConfig = {
  applicationUrl: stagingAppUrl,
  apiGatewayUrl: "https://apidev.comdetect.com",
  ssoUrl: `https://account.dev.myflynotes.com/sso.html?callbackDomain=${stagingAppUrl}`,
  logoutUrl: `https://account.dev.myflynotes.com/logout/login/${stagingAppUrl}`,
  practiceUrl: "https://flynotes.dev.myflynotes.com/#/?token={jwt}",
  apps: {
    flynotes: "https://flynotes.dev.myflynotes.com",
    flySend: "https://apidev.comdetect.com",
    flymed: "https://flymed.dev.myflynotes.com",
    flyCommand: "https://flymed.dev.myflynotes.com",
    flyAccount: "https://accountflynotes.afivn.com",
    fallowTimeCalculator: "http://localhost:3000",
  },
};

const config =
  process.env.REACT_APP_ENV === "production"
    ? productionConfig
    : process.env.REACT_APP_ENV === "staging"
    ? stagingConfig
    : process.env.REACT_APP_ENV === "development"
    ? developmentConfig
    : localConfig;

export default config;
