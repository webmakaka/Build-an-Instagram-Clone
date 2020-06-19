import React from 'react';

function Login({ setUser }) {
  const [username, setUsername] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setUser(username);
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Input username"
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
