import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import {
  TextField,
  Button,
  Card,
  CardHeader,
  Typography,
  InputAdornment,
} from '@material-ui/core';

import { useLoginPageStyles } from '../styles';
import SEO from '../components/shared/Seo';
import FacebookIconBlue from '../images/facebook-icon-blue.svg';
import FacebookIconWhite from '../images/facebook-icon-white.png';
import { AuthContext } from '../auth';
import isEmail from 'validator/lib/isEmail';
import { useApolloClient } from '@apollo/react-hooks';
import { GET_USER_EMAIL } from '../graphql/queries';
import { AuthError } from './signup';

export function LoginWithFacebook({ color, iconColor, variant }) {
  const classes = useLoginPageStyles();
  const { logInWithGoogle } = React.useContext(AuthContext);
  const facebookIcon =
    iconColor === 'blue' ? FacebookIconBlue : FacebookIconWhite;

  const [error, setError] = React.useState('');
  const history = useHistory();

  async function handleLogInWithGoogle() {
    try {
      await logInWithGoogle();
      history.push('/');
    } catch (error) {
      console.error('Error logging in with Google', error);
      setError(error.message);
    }
  }

  return (
    <>
      <Button
        onClick={handleLogInWithGoogle}
        fullWidth
        color={color}
        variant={variant}
      >
        <img
          src={facebookIcon}
          alt="facebook icon"
          className={classes.facebookIcon}
        />
        Log In with Facebook
      </Button>
      <AuthError error={error} />
    </>
  );
}

function LoginPage() {
  const classes = useLoginPageStyles();
  const { register, handleSubmit, watch, formState } = useForm({
    mode: 'onBlur',
  });
  const { loginWithEmailAndPassword } = React.useContext(AuthContext);
  const [showPassword, setPasswordVisibility] = React.useState(false);
  const hasPassword = Boolean(watch('password'));
  const history = useHistory();
  const client = useApolloClient();
  const [error, setError] = React.useState('');

  async function onSubmit({ input, password }) {
    try {
      setError('');
      if (!isEmail(input)) {
        input = await getUserEmail(input);
      }

      await loginWithEmailAndPassword(input, password);
      setTimeout(() => history.push('/'), 0);
    } catch (error) {
      console.error('Error logging in ', error);
      handleError(error);
    }
  }

  function handleError(error) {
    if (error.code.includes('auth')) {
      setError(error.message);
    }
  }

  async function getUserEmail(input) {
    const variables = { input };
    const response = await client.query({
      query: GET_USER_EMAIL,
      variables,
    });
    const userEmail = response.data.users[0]?.email || 'no@email.com';
    return userEmail;
  }

  function togglePasswordVisibility() {
    setPasswordVisibility((prev) => !prev);
  }

  return (
    <>
      <SEO title="Loign" />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                name="input"
                inputRef={register({
                  required: true,
                  minLength: 5,
                })}
                fullWidth
                variant="filled"
                label="Username, email, or phone"
                margin="dense"
                className={classes.textField}
                autoComplete="username"
              />
              <TextField
                name="password"
                inputRef={register({
                  required: true,
                  minLength: 5,
                })}
                InputProps={{
                  endAdornment: hasPassword && (
                    <InputAdornment>
                      <Button onClick={togglePasswordVisibility}>
                        {showPassword ? 'Hide' : 'Show'}
                      </Button>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                variant="filled"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                margin="dense"
                className={classes.textField}
                autoComplete="current-password"
              />
              <Button
                disabled={!formState.isValid || formState.isSubmitting}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
              >
                Log In
              </Button>
            </form>
            <div className={classes.orContainer}>
              <div className={classes.orLine} />
              <div>
                <Typography variant="body2" color="textSecondary">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine} />
            </div>
            <LoginWithFacebook color="secondary" iconColor="blue" />
            <AuthError error={error} />
            <Button fullWidth color="secondary">
              <Typography variant="caption">Forgot password?</Typography>
            </Button>
          </Card>
          <Card className={classes.signUpCard}>
            <Typography align="right" variant="body2">
              Don't have an account?
            </Typography>
            <Link to="/accounts/emailsignup">
              <Button color="primary" className={classes.signUpButton}>
                Sign Up
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export default LoginPage;
