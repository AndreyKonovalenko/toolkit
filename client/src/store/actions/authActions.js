import axios from '../../axios-settings';
import {REGISTER_SUCCESS, REGISTER_FAIL} from './types';


// Register User

export const register = ({values}) => async dispatch => {
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
    dispatch({
      type: REGISTER_FAIL
    });
    console.log(err);
  }
};