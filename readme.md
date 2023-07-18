# A Blog using RESTful Architecture

## Scheme

This is a blog project that uses RESTful architecture to handle CRUD requests to a MongoDB/Mongoose database. This is mostly an educative exercise for me to check how useful RESTful APIs are for creating blogs. I have a feeling that they would be useful.

My initial idea is to create two resources (with corresponding URLs):

- Blog posts @ `/api/posts`
- Users @ `api/users`

For a personal blog, I believe that it is imperative to create a protective route such that **only** the blog administrator can create new posts. The users would be able to sign-up, log-in, leave comments and like posts. This stops the blog from becoming a Reddit-style board. The first two would be easy enough to implement by using dedicated `/signup` and `/login` routes. Leaving comments would require the ability to push comments into a `comments` array in the `postSchema` and liking posts would require the liker to know the number of likes on a post in order to increment by 1 (to the effect of: `likes ++`) - which is not a stateless 'state of affairs'.

For the frontend, I belive that it is sufficient to use some templating engine such as PUG, or learn how to do so with ReactJS (Not sure how to do the latter yet). Turns out that connecting the database to the Frontend it extremely easy.

## Fetching

Firstly, we initialize an empty blogs state with the `useState` hook:

```js
const [allBlogs, setAllBlogs] = useState({});
```

We then make a `fetch` request to the server on the blogs API:

```js
// App.js React component
async function fetchBlogs() {
  // make a fetch to the API via
  // 'api/posts' route on localhost.
  await fetch('/api/posts')
    .then((res) => res.json())
    .then((res) => setAllBlogs(res));
}
```

This will store the blogs in the `allBlogs` state which can be used further. However, we also require the use of the `useEffect` hook to perform the fetch:

```js
// App.js React component
useEffect(() => {
  fetchBlogs();
}, []);
```

This will store the fetched blogs in the `allBlogs` state. The result is an array of documents from the API such as the following:

```json
{
  "author": "<%AUTHOR%>",
  "likes": 25,
  "images": [],
  "_id": "<%ID%>",
  "creationDate": "2023-06-23T22:19:06.908Z",
  "title": "Come Moon and Star",
  "bodyText": "Come Nerevar, friend or traitor, come. Come and look upon the Heart and Akulakahn, and bring Wraithguard, I have need of it. Come to the Heart chamber, I wait for you there, where we last met, countless ages ago. Come to me through fire and war, I welcome you! Welcome Moon-and-Star, I have prepared a place for you! Come, bring Wraithguard to the Heart chamber, together, let us free the cursed false gods! Welcome Nerevar, together we shall speak for the law and the land and drive the mongrel dogs of the Empire from Morrowind!",
  "comments": [
      {
          "_id": "<%ID%>",
          "username": "bob_dylan123",
          "comment": "This is awesome"
      },
      {
          "_id": "<%ID%>",
          "username": "dagoth_ur",
          "comment": "Stolen quote"
      }
  ],
  "id": "<%ID%>",
},
```

I have yet to figure out a way to correctly add likes and comments to the API from the frontend... but those remain to be further features in the Blog.

## Liking

There is a way for readers to like the blog by clicking on a heart icon. We can use React states to conditionally render an empty heart (not liked) or a filled heart (liked). This occurs in the `Blogs.js` React component.

```js
// Blogs.js component
export default function Blog({ title, bodyText, likes, comments }) {
  const [liked, setLiked] = useState(false);
  const [clickLike, setClickLike] = useState(likes);
  function handleChange() {
    setLiked((liked) => !liked);

    if (!liked) setClickLike((clickLike) => clickLike + 1);
    else if (liked) setClickLike((clickLike) => clickLike - 1);
  }

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
```
