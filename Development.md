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

![Application](/img/pic-02-03.png?raw=true)

<br/>

<br/>

### 04 - Creating our App UI

<br/>

![Application](/img/pic-02-04.png?raw=true)

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

![Application](/img/pic-02-05.png?raw=true)

<br/>

3 - Playing Songs / Finishing the App

<br/>

## Polishing our Final Instagram App

1 - Breaking Down the Instagram UI
2 - Building Accounts Pages
3 - Making Feed Page
4 - Improving Navbar
5 - Explore and Post Pages
6 - Loading Skeletons and Profile Page
7 - Edit Profile Page and Deployment

<br/>

---

<br/>

**Marley**

Any questions on eng: https://jsdev.org/chat/  
Любые вопросы на русском: https://jsdev.ru/chat/
