import React from 'react';
import { UserContext } from '../App';

function Post({ image, content, user }) {
  return (
    <UserContext.Consumer>
      {(currentUser) => {
        const isCurrentUser = currentUser === user;

        return (
          <>
            {image && (
              <img
                style={{ height: 100, width: 200, objectFit: 'cover' }}
                src={URL.createObjectURL(image)}
                alt="Post cover"
              />
            )}
            <p>{content}</p>
            <div style={{ color: isCurrentUser && 'green' }}>{user}</div>
          </>
        );
      }}
    </UserContext.Consumer>
  );
}

export default Post;
