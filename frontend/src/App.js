import { useEffect, useState } from 'react';
import Header from './components/Header';
import Blog from './components/Blog';

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

  function BlogsFurnish() {
    return allBlogs.map((item) => (
      <Blog title={item.title} bodyText={item.bodyText} />
    ));
  }

  return (
    <div className="App">
      <Header />
      {BlogsFurnish()}
    </div>
  );
}
