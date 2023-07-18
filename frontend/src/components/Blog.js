import { useState } from 'react';
import '../styles/Blog.css';
import heart from '../icons/heart-inactive.png';
import heartActive from '../icons/heart-active.png';

export default function Blog({ title, bodyText, likes, comments }) {
  // create some state here:
  const [liked, setLiked] = useState(false);
  const [clickLike, setClickLike] = useState(likes);
  function handleChange() {
    setLiked((liked) => !liked);

    if (!liked) setClickLike((clickLike) => clickLike + 1);
    else if (liked) setClickLike((clickLike) => clickLike - 1);
  }

  // frontend liking thing working, but we need to tell the backend
  // to do the same!

  return (
    <div className="blog--container">
      <h1 className="blog--title">{title}</h1>
      <a className="blog--preview" href="/">
        {bodyText.split(' ').slice(0, 50).join(' ')}
      </a>
      <div className="grid-container">
        <img
          src={liked ? heartActive : heart}
          width="30px"
          onClick={handleChange}
          alt={liked ? 'You liked this post' : 'Send a like on this post'}
        />
        <span>{clickLike}</span>
      </div>
    </div>
  );
}
