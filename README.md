![React version](https://img.shields.io/github/package-json/dependency-version/MartinP460/onsplash/react)

[![Netlify Status](https://api.netlify.com/api/v1/badges/3586e172-6987-4cc7-a916-a159eaf18221/deploy-status)](https://app.netlify.com/sites/cheery-dasik-b361a9/deploys)

![Logo](/public/images/onsplash-logotype.png)

Onsplash is a clone/recreation of the image-sharing platform _[Unsplash](https://unsplash.com/)_. The goal of Onsplash is to improve my personal skills in developing frontend applications.

Link to app: [onsplash.vercel.app](https://onsplash.vercel.app/)

## Description

Since Onsplash is a clone of _Unsplash_, it has many of the same features. However, the main feature of the application is the ability for users to "upload" (or more accurately, reference, see "disclaimer") images which will be displayed across the application.

In addition, the application has the following features:

- An infinite scroll gallery that displays images with the correct aspect ratio
- Like and download images
- Individual user profiles displaying the users images and likes
- An image modal displaying number of views, downloads and more
- Ability to search for images

and more.

The frontend uses React and [Next.js](https://nextjs.org/). GraphQL, which provides an explicit and developer-friendly way to query data, is also used. [TailwindCSS](https://tailwindcss.com/) is used for styling due to how it speeds up development over using traditional stylesheets (in my opinion😉).
For the backend, [Nhost](https://nhost.io/) is used to manage user authentication and [Hasura](https://hasura.io/) for an instant GraphQL API using PostgreSQL as the database.

One of the challenges in creating Onsplash is getting the app to load at an acceptable speed. In spite of Next.js taking care of some of the image optimization when statically generating pages, metrics such as "largest contentful paint" and "time to interactive" can be difficult to optimize without a proper image API.

#### Disclaimer

Images uploaded by users to Onsplash were originally posted on _Unsplash_. Despite the user uploading the image and the image being connected their profile, the Onsplash user is not the creator/owner of the image. This way, images uploaded to Onsplash are sure to be appropriate since they are filtered through _Unsplash_ first.

## Folder structure

The main contents of the application is within the `src` directory. Each of it's subsequent folders represent different layers of abstraction.

#### `modules`

The `modules` directory groups all files related to the same feature. E.g. the `account` directory within `modules` has functions (mainly components and hooks) related to updating the users' account.

#### `common`

The `common` directory houses everything that cannot be considered an feature. Generic components (or elements) like `Button` and `Input` are examples of components stored in this, as well as types, GraphQL queries and various hooks, utility functions and high order components.

#### `pages`

The `pages` directory is the directory Next.js uses to compile static pages during the build.

This folder structure was heavily inspired by [a blog post by Vadorequest on dev.to](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472).
