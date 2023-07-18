import { useState } from 'react';
import '../styles/Blog.css';
import heart from '../icons/heart-inactive.png';
import heartActive from '../icons/heart-active.png';

export default function Blog({ title, bodyText }) {
  // create some state here:
  const [liked, setLiked] = useState(false);

  function handleChange() {
    setLiked((liked) => !liked);
  }

  return (
    <div className="blog--container">
      <h1 className="blog--title">{title}</h1>
      <a className="blog--preview" href="/">
        {bodyText}
      </a>
      <div className="grid-container">
        <img
          src={liked ? heartActive : heart}
          width="30px"
          onClick={handleChange}
          alt={liked ? 'You liked this post' : 'Send a like on this post'}
        />
      </div>
    </div>
  );
}
