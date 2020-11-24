import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import icon from "./icon";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Created by "}
      <Link color="inherit" href="https://github.com/mdmundo">
        Edmundo Paulino
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(3, 2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  },
  avatar: {
    marginBottom: theme.spacing(1.4),
    width: theme.spacing(6),
    height: theme.spacing(6)
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="xs">
        <Avatar alt="Icon" src={icon} className={classes.avatar} />
        <Typography variant="h2" component="h1" gutterBottom>
          Agritoca API
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          API to be consumed by the app frontend.
        </Typography>
        <Typography variant="body1">
          Access it{" "}
          <Link color="inherit" href="https://agritoca.herokuapp.com">
            here
          </Link>
          .
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="xs">
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
