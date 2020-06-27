import React from 'react';
import { useSignUpPageStyles } from '../styles';
import SEO from '../components/shared/Seo';
import { Typography, Card, TextField, Button } from '@material-ui/core';
import { LoginWithFacebook } from './login';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../auth';

function SignUpPage() {
  const classes = useSignUpPageStyles();
  const { signUpWithEmailAndPassword } = React.useContext(AuthContext);
  const [values, setValues] = React.useState({
    email: '',
    name: '',
    username: '',
    password: '',
  });
  const history = useHistory();

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await signUpWithEmailAndPassword(values);
    history.push('/');
  }

  return (
    <>
      <SEO title="Sign Up" />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <div className={classes.cardHeader} />
            <Typography className={classes.cardHeaderSubHeader}>
              Sign up to see photos and videos from your friends.
            </Typography>
            <LoginWithFacebook
              color="primary"
              iconColor="white"
              variant="contained"
            />
            <div className={classes.orContainer}>
              <div className={classes.orLine} />
              <div>
                <Typography variant="body2" color="textSecondary">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine} />
            </div>
            <form onSubmit={handleSubmit}>
              <TextField
                name="email"
                onChange={handleChange}
                fullWidth
                variant="filled"
                label="Email"
                type="email"
                margin="dense"
                className={classes.textField}
              />
              <TextField
                name="name"
                onChange={handleChange}
                fullWidth
                variant="filled"
                label="Full Name"
                margin="dense"
                className={classes.textField}
              />
              <TextField
                name="username"
                onChange={handleChange}
                fullWidth
                variant="filled"
                label="Username"
                margin="dense"
                className={classes.textField}
                autoComplete="username"
              />
              <TextField
                name="password"
                onChange={handleChange}
                fullWidth
                variant="filled"
                label="Password"
                type="password"
                margin="dense"
                className={classes.textField}
                autoComplete="new-password"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
              >
                Sign Up
              </Button>
            </form>
          </Card>
          <Card className={classes.loginCard}>
            <Typography align="right" variant="body2">
              Have an account?
            </Typography>
            <Link to="/accounts/login">
              <Button color="primary" className={classes.login}>
                Log In
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export default SignUpPage;
