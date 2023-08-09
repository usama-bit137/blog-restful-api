import axios from 'axios';
// import EasyMDE from 'easymde';

export const newPost = async (title, bodyText) => {
  axios.post('/api/posts', { title, bodyText }).then((res) => alert(res));
  window.location.replace('/posts');
};

// const easyMDE = new EasyMDE({ element: document.getElementById('bodyText') });
// console.log(easyMDE.value('New Input for EasyMDE'));
