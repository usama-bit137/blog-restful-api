# A Blog using RESTful Architecture

## Scheme

This is a blog project that uses RESTful architecture to handle CRUD requests to a MongoDB/Mongoose database. This is mostly an educative exercise for me to check how useful RESTful APIs are for creating blogs. I have a feeling that they would be useful.

My initial idea is to create two resources (with corresponding URLs):

- Blog posts @ `/api/v1/posts`
- Users @ `api/v1/users`

For a personal blog, I believe that it is imperative to create a protective route such that **only** the blog administrator can create new posts. The users would be able to sign-up, log-in, leave comments and like posts. This stops the blog from becoming a Reddit-style board. The first two would be easy enough to implement by using dedicated `/signup` and `/login` routes. Leaving comments would require the ability to push comments into a `comments` array in the `postSchema` and liking posts would require the liker to know the number of likes on a post in order to increment by 1 (to the effect of: `likes ++`) - which is not a stateless 'state of affairs'.

For the frontend, I belive that it is sufficient to use some templating engine such as PUG, or learn how to do so with ReactJS (Not sure how to do the latter yet).
