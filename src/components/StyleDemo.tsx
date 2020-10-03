import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import  Button from "@material-ui/core/Button";
import  Typography from "@material-ui/core/Typography";
import  Box from "@material-ui/core/Box";
import  TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import SaveIcon from "@material-ui/icons/Save";
import i18n from "../helpers/i18n";

class StyleDemo extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={10}>
          <Box p={5}>
            {this.renderButton()}
            <Box m={6} />
            {this.renderTitle()}
            <Box m={6} />
            {this.renderInput()}
            <Box m={6} />
          </Box>
        </Grid>
      </Grid>
    );
  }

  renderButton = () => {
    return (
      <Grid container spacing={3}>
        <Typography variant="h3">{i18n.t("services.theme.button.title")}</Typography>
        <Grid item container direction="row">
          <Button
            style={{ marginRight: "1rem" }}
            color="primary"
            variant="contained"
            size="small"
            startIcon={<SaveIcon />}
          >
            Small
          </Button>
          <Button
            style={{ marginRight: "1rem" }}
            color="primary"
            variant="contained"
            size="medium"
            startIcon={<KeyboardVoiceIcon />}
          >
            Medium
          </Button>
          <Button
            style={{ marginRight: "1rem" }}
            color="primary"
            variant="contained"
            size="large"
            startIcon={<CloudUploadIcon />}
          >
            Large
          </Button>
        </Grid>
        <Grid item container direction="row">
          <Button
            style={{ marginRight: "1rem" }}
            color="primary"
            variant="contained"
            size="medium"
            startIcon={<DeleteIcon />}
          >
            Contained
          </Button>
          <Button
            style={{ marginRight: "1rem" }}
            color="primary"
            variant="outlined"
            size="medium"
            startIcon={<DeleteIcon />}
          >
            Outline
          </Button>

          <Button
            style={{ marginRight: "1rem" }}
            color="primary"
            variant="contained"
            size="medium"
            disabled
            startIcon={<DeleteIcon />}
          >
            Diable
          </Button>
        </Grid>
        <Grid item container direction="row">
          <Button
            style={{ marginRight: "1rem" }}
            color="primary"
            variant="contained"
            size="medium"
          >
            Primary contained
          </Button>

          <Button
            style={{ marginRight: "1rem" }}
            color="secondary"
            variant="contained"
            size="medium"
          >
            Secondary contained
          </Button>

          <Button
            style={{ marginRight: "1rem" }}
            color="primary"
            variant="outlined"
            size="medium"
          >
            Primary outline
          </Button>

          <Button
            style={{ marginRight: "1rem" }}
            color="secondary"
            variant="outlined"
            size="medium"
          >
            Secondary outline
          </Button>
        </Grid>
        <Grid item container direction="row">
          <Button
            style={{ marginRight: "1rem" }}
            variant="contained"
            size="medium"
          >
            Default contained
          </Button>

          <Button
            style={{ marginRight: "1rem" }}
            variant="outlined"
            size="medium"
          >
            Default outline
          </Button>
        </Grid>
      </Grid>
    );
  };

  renderTitle = () => {
    return (
      <Grid>
        <Typography variant="h3">2. Title & paragraph</Typography>
        <Box m={3} />
        <Typography variant="h6">Small Title</Typography>
        <Box m={3} />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam
          debitis minus consequatur suscipit illum nihil, doloribus voluptate
          dolorum sed autem reiciendis consectetur. Hic praesentium sed enim
          libero deserunt? Eum.
        </Typography>

        <Box m={3} />
        <Typography variant="h5">Medium Title </Typography>
        <Box m={3} />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam
          debitis minus consequatur suscipit illum nihil, doloribus voluptate
          dolorum sed autem reiciendis consectetur. Hic praesentium sed enim
          libero deserunt? Eum.
        </Typography>

        <Box m={3} />
        <Typography variant="h4">Large Title </Typography>
        <Box m={3} />

        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam
          debitis minus consequatur suscipit illum nihil, doloribus voluptate
          dolorum sed autem reiciendis consectetur. Hic praesentium sed enim
          libero deserunt? Eum.
        </Typography>

        <Box m={3} />
        <Typography variant="h3">Big Title </Typography>
        <Box m={3} />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquam
          debitis minus consequatur suscipit illum nihil, doloribus voluptate
          dolorum sed autem reiciendis consectetur. Hic praesentium sed enim
          libero deserunt? Eum.
        </Typography>
      </Grid>
    );
  };

  renderInput = () => {
    return (
      <Grid container spacing={3}>
        <Grid item>
          <Typography variant="h3">3. Input</Typography>
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth variant="outlined" label="Display name" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth variant="outlined" label="Email address" />
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              variant="outlined"
              // size="small"
              label="Province"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              variant="outlined"
              // size="small"
              label="Postcode"
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              style={{ marginRight: "1rem" }}
              color="secondary"
              variant="contained"
              size="medium"
              startIcon={<DeleteIcon />}
            >
              Secondary outline
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  };
}

export default StyleDemo;
