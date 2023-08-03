import axios from 'axios';

const login = async (email, password) => {
  try {
    const res = await axios.post('http://127.0.0.1:3001/api/users/login', {
      email,
      password,
    });
    console.log({ email, password });
  } catch (err) {
    console.log(err.response.data);
  }
};

export default login;
