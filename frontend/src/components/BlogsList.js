import { useEffect, useState } from 'react';
import Blog from './Blog';

export default function BlogsList() {
  const [allBlogs, setAllBlogs] = useState([]);
  async function fetchBlogs() {
    await fetch('api/posts')
      .then((res) => res.json())
      .then((res) => setAllBlogs(res.posts.posts));
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return allBlogs.map((item) => <Blog blog={item} />);
}
