import React from "react";
import { withTranslation } from "react-i18next";
import { withStyles, createStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const styles = createStyles({
  container: {
    maxWidth: 800,
    margin: "auto",
  },
  message: {
    margin: "auto",
    maxWidth: 600,
  },
});

class Page404 extends React.Component<any, any> {
  render() {
    const { t, classes, status, message } = this.props;
    return (
      <Alert
        className={classes.container}
        severity="warning"
        variant="outlined"
      >
        <AlertTitle>
          {status} - {t("errors.default.title")}
        </AlertTitle>
        <div className={classes.message}>{message}</div>
      </Alert>
    );
  }
}

export default withStyles(styles)(withTranslation()(Page404));
