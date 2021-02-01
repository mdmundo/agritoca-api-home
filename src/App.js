import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Logo from './logo';

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Created by '}
      <Link color='inherit' href='https://github.com/mdmundo'>
        Edmundo Paulino
      </Link>
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(3, 2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
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
      <Container component='main' className={classes.main} maxWidth='xs'>
        <Logo
          fontSize='large'
          viewBox='0 0 235.22 235.24898'
          className={classes.avatar}
        />
        <Typography variant='h2' component='h1' gutterBottom>
          Agritoca API
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          API to be consumed by the app frontend.
        </Typography>
        <Typography variant='body1'>
          Access it{' '}
          <Link color='inherit' href='https://agritoca.herokuapp.com'>
            here
          </Link>
          .
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
