import '@babel/polyfill';
import { login, logout } from './login';
import { sendComment } from './comment';
import { newPost } from './newPost';

const loginForm = document.querySelector('.login--form');
const logoutBtn = document.getElementById('logout');
const newPostSubmit = document.querySelector('.new-post--form');
const comment = document.getElementById('send-comment');

if (logoutBtn) {
  logoutBtn.addEventListener('click', logout);
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    login(email, password);
  });
}

if (newPostSubmit) {
  newPostSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const bodyText = document.getElementById('bodyText').value;
    newPost(title, bodyText);
  });
}

if (comment) {
  comment.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = document.getElementById('comment-text').value;
    const author = document.getElementById('');

    sendComment(text, author);
  });
}
