import React from 'react';
import Img from 'react-graceful-image';
import { UserContext, PostContext } from '../App';

function Post({ image, content, user, id }) {
  const currentUser = React.useContext(UserContext);
  const { dispatch } = React.useContext(PostContext);
  const isCurrentUser = currentUser === user;

  function handleDeletePost() {
    dispatch({ type: 'DELETE_POST', payload: { id } });
  }

  return (
    <>
      {image && (
        <Img
          style={{ height: 100, width: 200, objectFit: 'cover' }}
          src={URL.createObjectURL(image)}
          alt="Post cover"
        />
      )}
      <p>{content}</p>
      <div style={{ color: isCurrentUser && 'green' }}>{user}</div>
      <div>
        {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
      </div>
    </>
  );
}

export default Post;
