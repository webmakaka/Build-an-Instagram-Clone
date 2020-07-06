# [Reed Barger] Build an Instagram Clone with React [ENG, 2020]

<br/>

# Development step by step

<br/>

## 01 React Crash Course

### 01 - React Core Concepts

    $ cd client
    $ npx create-react-app .

    $ npm run start

<br/>

### 02 - React Hooks Deep Dive

<br/>

### 03 - Building our Social Media App

<br/>

### 04 - Advanced React Hooks (useContext, useReducer)

<br/>

## 02 Mastering GraphQL and Material UI

<br/>

### 01 - GraphQL Core Concepts (with Hasura)

https://hasura.io/

https://build-an-instagram-clone.herokuapp.com/

Data --> Add a new table

<br/>

![Application](/img/pic-02-01.png?raw=true)

<br/>

### 02 - Building a CRUD App with Apollo React Hooks

https://www.apollographql.com/docs/react/get-started/

    $ cd graphql
    $ npx create-react-app .
    $ npm install apollo-boost @apollo/react-hooks graphql

<br/>

http://tachyons.io/

<br/>

![Application](/img/pic-02-02.png?raw=true)

<br/>

### 03 - Material UI Crash Course

<br/>

https://material-ui.com/

<br/>

    $ cd apollo-music-share
    $ npx create-react-app .

<br/>

    $ npm install @material-ui/core @material-ui/icons

<br/>

![Application](/img/pic-03-01.png?raw=true)

<br/>

<br/>

### 04 - Creating our App UI

<br/>

![Application](/img/pic-03-02.png?raw=true)

<br/>

## 03 Building our App Interface

<br/>

### 01 - Integrating GraphQL with Subscriptions

    $ npm install apollo-boost @apollo/react-hooks graphql
    $ npm install react-player
    $ npm install apollo-link-ws subscriptions-transport-ws apollo-cache-inmemory apollo-client

```
mutation addSong {
  insert_songs(objects: {thumbnail: "http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg", title: "Space", artist: "Enjoykin", duration: 1.5, url: "https://www.youtube.com/watch?v=n-AdoTkXwbc"}) {
    returning {
      id
      duration
      created_at
      artist
      title
      url
      thumbnail
    }
  }
}
```

```
query MyQuery {
  songs {
    id
    artist
    duration
    thumbnail
    title
    url
  }
}
```

<br/>

### 02 - Managing State with React and Apollo

<br/>

![Application](/img/pic-03-03.png?raw=true)

<br/>

### 03 - Playing Songs / Finishing the App

<br/>

![Application](/img/pic-03-04.png?raw=true)

<br/>

## 04 Polishing our Final Instagram App

<br/>

### 01 - Breaking Down the Instagram UI

starting point

https://github.com/codeartistryio/instagram-react12

    $ npm install

<br/>

### 02 - Building Accounts Pages

<br/>

![Application](/img/pic-04-01.png?raw=true)

http://localhost:3000/accounts/login

<br/>

![Application](/img/pic-04-02.png?raw=true)

http://localhost:3000/accounts/emailsignup

<br/>

![Application](/img/pic-04-03.png?raw=true)

<br/>

### 03 - Making Feed Page

http://localhost:3000/

<br/>

![Application](/img/pic-04-04.png?raw=true)

<br/>

### 04 - Improving Navbar

<br/>

![Application](/img/pic-04-05.png?raw=true)

<br/>

### 05 - Explore and Post Pages

<br/>

![Application](/img/pic-04-06.png?raw=true)

<br/>

![Application](/img/pic-04-07.png?raw=true)

<br/>

![Application](/img/pic-04-08.png?raw=true)

<br/>

### 06 - Loading Skeletons and Profile Page

<br/>

![Application](/img/pic-04-09.png?raw=true)

<br/>

### 07 - Edit Profile Page and Deployment

<br/>

![Application](/img/pic-04-10.png?raw=true)

Deploy to now.sh (not interesting for me)

<br/>

### 05 - Instagram App + Backend

<br/>

### 01 - Setup Auth, Create Users

https://hasura.io/blog/authentication-and-authorization-using-hasura-and-firebase/

_HASURA_GRAPHQL_ADMIN_SECRET_

![Application](/img/pic-04-11.png?raw=true)

<br/>

http://firebase.google.com/

Create Project "build-an-instagram-clone"

Authentication -> Set up sign-in method

Email/Password -> Enabled

<br/>

Databases -> Rules

read, write -> true

```
{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

<br/>

    $ cd "project_root"
    $ npm install -g firebase-tools
    $ firebase login
    // $ firebase login --reauth
    $ firebase init

1. Functions: Configure and deploy Cloud Functions

2. JavaScript

3. Do you want to use ESLint. No

4. Do you want to install dependencies with npm now? Yes


    $ firebase deploy --only functions

// without debug i had an error

    $ // firebase deploy --only functions --debug

<br/>

![Application](/img/pic-04-12.png?raw=true)

<br/>

// Try to signup  
http://localhost:3000/accounts/emailsignup

<br/>

![Application](/img/pic-04-13.png?raw=true)

<br/>

### 02 - Signup Form Validation and Error Handling

https://react-hook-form.com/

    $ npm install react-hook-form validator

<br/>

![Application](/img/pic-04-14.png?raw=true)

<br/>

### 03 - Email Login and Third Party Auth

Authentication -> Set up sign-in method

Google -> Enabled

Add Project support email.

<br/>

![Application](/img/pic-04-15.png?raw=true)

<br/>

### 04 - Me Subscription and Editing User Data

<br/>

![Application](/img/pic-04-16.png?raw=true)

<br/>

### 05 - Uploading Avatars and Adding User Search

cloudinary.com

cloudinary.com -> Settings -> Upload -> Add upload preset

<br/>

```
Name: Instagram-clone
Signing Mode: unsigned
```

<br/>

![Application](/img/pic-04-17.png?raw=true)

<br/>

### 06 - Adding New Posts and Uploading Media

<br/>

![Application](/img/pic-04-18.png?raw=true)

<br/>

![Application](/img/pic-04-19.png?raw=true)

<br/>

![Application](/img/pic-04-20.png?raw=true)

<br/>

https://docs.slatejs.org/

<br/>

    $ npm install slate slate-react slate-history
    $ npm install escape-html

<br/>

cloudinary.com -> Settings -> Upload -> Instagram-clone -> Upload Manipulations -> Incoming Transformation

```
Width: 500
Height: 500
```

<br/>

### 07 - Liking, Saving, and Commenting on Posts

<br/>

![Application](/img/pic-04-21.png?raw=true)

<br/>

![Application](/img/pic-04-22.png?raw=true)

<br/>

![Application](/img/pic-04-23.png?raw=true)

<br/>

![Application](/img/pic-04-24.png?raw=true)

<br/>

![Application](/img/pic-04-25.png?raw=true)

<br/>

![Application](/img/pic-04-26.png?raw=true)

<br/>

![Application](/img/pic-04-27.png?raw=true)

<br/>

![Application](/img/pic-04-28.png?raw=true)

<br/>

![Application](/img/pic-04-29.png?raw=true)

<br/>

![Application](/img/pic-04-30.png?raw=true)

<br/>

![Application](/img/pic-04-31.png?raw=true)

<br/>

![Application](/img/pic-04-32.png?raw=true)

<br/>

![Application](/img/pic-04-33.png?raw=true)

<br/>

http://localhost:3000/p/dfbbf276-c000-4baf-b0fc-4769f4f55f8a

<br/>

![Application](/img/pic-04-34.png?raw=true)

<br/>

### 08 - Creating and Displaying Notifications

http://date-fns.org/

<br/>

![Application](/img/pic-04-35.png?raw=true)

<br/>

![Application](/img/pic-04-36.png?raw=true)

<br/>

![Application](/img/pic-04-37.png?raw=true)

<br/>

![Application](/img/pic-04-38.png?raw=true)

<br/>

![Application](/img/pic-04-39.png?raw=true)

<br/>

![Application](/img/pic-04-40.png?raw=true)

<br/>

### 09 - Profile Page, plus Following and Unfollowing Users

<br/>

![Application](/img/pic-04-41.png?raw=true)

<br/>

![Application](/img/pic-04-42.png?raw=true)

<br/>

![Application](/img/pic-04-43.png?raw=true)

<br/>

![Application](/img/pic-04-44.png?raw=true)

<br/>

![Application](/img/pic-04-45.png?raw=true)

<br/>

![Application](/img/pic-04-46.png?raw=true)

<br/>

![Application](/img/pic-04-47.png?raw=true)

<br/>

![Application](/img/pic-04-48.png?raw=true)

<br/>

![Application](/img/pic-04-49.png?raw=true)

<!--

10 - Finishing Explore Page
11 - Adding User Feed with Infinite Scroll
12 - Finishing App

-->

<br/>

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
