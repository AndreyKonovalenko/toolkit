import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
// import axios from '../axios-settings';
import { register } from '../store/actions/authActions'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Register | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
        }}>
        <Container maxWidth='sm'>
          <Formik
            initialValues={{
              email: '',
              name: '',
              password: '',
              policy: false,
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              name: Yup.string()
                .max(255)
                .required('First name is required'),
              password: Yup.string().max(255).required('password is required'),
              policy: Yup.boolean().oneOf([true], 'This field must be checked'),
            })}
            onSubmit = {
             (values) => {
             console.log(values)
              //register is authAction
              dispatch(register(values))
           }}>
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color='textPrimary' variant='h2'>
                    Create new account
                  </Typography>
                  <Typography
                    color='textSecondary'
                    gutterBottom
                    variant='body2'>
                    Use your email to create new account
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label='Name'
                  margin='normal'
                  name='name'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  variant='outlined'
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label='Email Address'
                  margin='normal'
                  name='email'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type='email'
                  value={values.email}
                  variant='outlined'
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label='Password'
                  margin='normal'
                  name='password'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type='password'
                  value={values.password}
                  variant='outlined'
                />
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1,
                  }}>
                  <Checkbox
                    checked={values.policy}
                    name='policy'
                    onChange={handleChange}
                  />
                  <Typography color='textSecondary' variant='body1'>
                    I have read the{' '}
                    <Link
                      color='primary'
                      component={RouterLink}
                      to='#'
                      underline='always'
                      variant='h6'>
                      Terms and Conditions
                    </Link>
                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>{errors.policy}</FormHelperText>
                )}
                <Box sx={{ py: 2 }}>
                  <Button
                    color='primary'
                    disabled={isSubmitting}
                    fullWidth
                    size='large'
                    type='submit'
                    variant='contained'>
                    Sign up now
                  </Button>
                </Box>
                <Typography color='textSecondary' variant='body1'>
                  Have an account?{' '}
                  <Link component={RouterLink} to='/login' variant='h6'>
                    Sign in
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};



export default Register;
