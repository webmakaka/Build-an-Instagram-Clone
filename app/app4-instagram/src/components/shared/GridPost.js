import React from 'react';
import { useGridPostStyles } from '../../styles';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function GridPost({ post }) {
  const history = useHistory();
  const classes = useGridPostStyles();

  function handleOpenPostModal() {
    history.push({
      pathname: `/p/${post.id}`,
      state: { modal: true },
    });
  }

  return (
    <div className={classes.gridPostContainer} onClick={handleOpenPostModal}>
      <div className={classes.gridPostOverlay}>
        <div className={classes.gridPostInfo}>
          <span className={classes.likes} />
          <Typography>{post.likes}</Typography>
        </div>
        <div className={classes.gridPostInfo}>
          <span className={classes.comments} />
          <Typography>{post.comments.length}</Typography>
        </div>
      </div>
      <img src={post.media} alt="Post cover" className={classes.image} />
    </div>
  );
}

export default GridPost;
