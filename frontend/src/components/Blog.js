import { useState } from 'react';
import '../styles/Blog.css';
import heart from '../icons/heart-inactive.png';
import heartActive from '../icons/heart-active.png';
import comment from '../icons/comment.png';

export default function Blog({ blog }) {
  const { title, bodyText, likes, comments } = blog;
  const [liked, setLiked] = useState(false);
  const [clickLike, setClickLike] = useState(likes);

  function handleChangeLike() {
    setLiked((liked) => !liked);

    if (!liked) setClickLike((clickLike) => clickLike + 1);
    else if (liked) setClickLike((clickLike) => clickLike - 1);
  }

  return (
    <div className="blog--container">
      <h1 className="blog--title">{title}</h1>
      <a className="blog--preview" href="/">
        {bodyText.split(' ').slice(0, 75).join(' ')}...
      </a>

      <div className="grid-container">
        <div className="likes">
          <img
            src={liked ? heartActive : heart}
            width="30px"
            onClick={handleChangeLike}
            alt={liked ? 'You liked this post' : 'Send a like on this post'}
            className="heart"
          />
          {clickLike}
        </div>
        <div>
          <img
            src={comment}
            width="30px"
            alt={liked ? 'You liked this post' : 'Send a like on this post'}
            className="heart"
          />
          {comments.length}
        </div>
      </div>
    </div>
  );
}
