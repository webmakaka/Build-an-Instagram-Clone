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

7 - Edit Profile Page and Deployment

<br/>

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
