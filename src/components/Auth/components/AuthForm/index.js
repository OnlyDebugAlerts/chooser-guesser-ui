import React from 'react';
import {Link as RouteLink} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useForm } from "react-hook-form";

import useStyles from './styles';

export default function AuthForm({type, onSubmit}) {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">{type}</Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {
              type === 'Sign Up' &&
              <>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="fname"
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Username"
                    autoFocus
                    inputRef={register({ required: true })}
                  />
                </Grid>
              </>
            }
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                error={!!errors.email}
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={register({ required: true })}
              />
              <p>{errors.email && "Invalid email address"}</p>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={register({ required: true })}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {type}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              {
                type === 'Sign Up' ?
                  <RouteLink to="/sign-in" variant="body2">
                    Already have an account? Sign in
                  </RouteLink> :
                  <RouteLink to="/sign-up" variant="body2">
                    Doesn't have an account? Sign up
                  </RouteLink>
              }

            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
