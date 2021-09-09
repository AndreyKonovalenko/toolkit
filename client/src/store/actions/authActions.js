import axios from '../../axios-settings';
import {REGISTER_SUCCESS, REGISTER_FAIL} from './types';
import { setAlert } from './alertActions';


// Register User

export const register = (values) => async dispatch => {
  console.log('register works!!!')
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify(values);
  console.log(values)
  try {
    const res = await axios.post('/api/users', body, config);
    console.log(res.data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.error;
    console.log(errors);

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};