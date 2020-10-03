import React from "react";
import {withTranslation} from "react-i18next";
import { withStyles, createStyles } from '@material-ui/core/styles';

import { Alert, AlertTitle } from '@material-ui/lab';
const styles = createStyles({
    container:{
        maxWidth: 800,
        margin: "auto"
    }
});

class Page404 extends React.Component<any, any>{
    render() {
        const {t,classes} = this.props;
        return <Alert className={classes.container} severity="warning" variant="outlined">
            <AlertTitle>{t("error.404.title")}</AlertTitle>
            {t("error.404.desc")}
    </Alert>;
    }
}

export default withStyles(styles)(withTranslation()(Page404));
