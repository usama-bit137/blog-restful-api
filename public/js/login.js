/* eslint-disable no-restricted-globals */
import axios from 'axios';
import showAlert from './alert';

export const login = async (email, password) => {
  try {
    const res = await axios.post('/api/users/login', {
      email,
      password,
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    axios.get('/api/users/logout').then((res) => {
      if (res.data.message === 'success') {
        location.reload(true);
      }
    });
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out. Try again!');
  }
};
