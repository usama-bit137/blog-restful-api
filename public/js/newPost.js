import axios from 'axios';

export const newPost = async (title, bodyText) => {
  axios.post('/api/posts', { title, bodyText }).then((res) => alert(res));
};
