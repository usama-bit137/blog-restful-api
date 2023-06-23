# A Blog using RESTful Architecture

## Introduction

This is a blog project that uses RESTful architecture to handle CRUD requests to a MongoDB/Mongoose database. This is mostly an educative exercise for me to check how useful RESTful APIs are for creating blogs. I have a feeling that they would be useful.

My initial idea is to create two resources (with corresponding URLs):

- Blog posts ('/api/v1/posts')
- Users ('api/v1/users')

For a personal blog, I believe that it is imperative to create a protective route such that **only** the blog administrator can create new posts. The users would be able to sign-up, log-in, leave comments and like posts. This stops the blog from becoming a Reddit-style board. The first two would be easy enough to implement. Leaving comments would require the ability to push comments into a `comments` array in the `postSchema`.

For the frontend, I belive that it is sufficient to use some templating engine such as PUG, or learn how to do so with ReactJS (Not sure how to do the latter yet).
