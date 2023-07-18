import { useEffect, useState } from 'react';
import Header from './components/Header';
import Blog from './components/Blog';

import './styles/Footer.css';
export default function App() {
  const [allBlogs, setAllBlogs] = useState([]);
  async function fetchBlogs() {
    await fetch('api/posts')
      .then((res) => res.json())
      .then((res) => setAllBlogs(res.posts.posts));
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(allBlogs);

  function BlogsFurnish() {
    return allBlogs.map((item) => (
      <Blog
        title={item.title}
        bodyText={item.bodyText}
        likes={item.likes}
        key={item._id}
      />
    ));
  }

  return (
    <div className="App">
      <Header />
      {BlogsFurnish()}
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>
        <span>
          If you like what you see here feel free to check out the code on{' '}
        </span>

        <a
          href="https://github.com/usama-bit137/blog-restful-api"
          className="github--link"
        >
          GitHub
        </a>
      </small>
    </footer>
  );
}
