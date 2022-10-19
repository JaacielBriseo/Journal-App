import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkingAuth,
  startGoogleSignIn,
  startLoginWithEmail,
} from '../../store/auth';
import { useMemo } from 'react';

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  });

  const isAuthenticated = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(startLoginWithEmail({ email, password }));
  };

  const onGoogleSignIn = () => {
    console.log('On Google submit');
    dispatch(startGoogleSignIn());
  };

  return (
    <>
      <AuthLayout title="Login">
        <form onSubmit={onSubmit} 
      className='animate__animated animate__fadeIn animate__faster'
      >
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                name="email"
                value={email}
                placeholder="correo@google.com"
                fullWidth
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange}
                placeholder="Contraseña"
                fullWidth
              />
            </Grid>
            <Grid container display={!!errorMessage ? '' : 'none'}>
              <Grid item xs={12} sx={{ mt: 1 }}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isAuthenticated}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={onGoogleSignIn}
                  variant="contained"
                  fullWidth
                  disabled={isAuthenticated}
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
