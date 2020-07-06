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

  const likesCount = post.likes_aggregate.aggregate.count;
  const commentsCount = post.comments_aggregate.aggregate.count;

  return (
    <div className={classes.gridPostContainer} onClick={handleOpenPostModal}>
      <div className={classes.gridPostOverlay}>
        <div className={classes.gridPostInfo}>
          <span className={classes.likes} />
          <Typography>{likesCount}</Typography>
        </div>
        <div className={classes.gridPostInfo}>
          <span className={classes.comments} />
          <Typography>{commentsCount}</Typography>
        </div>
      </div>
      <img src={post.media} alt="Post cover" className={classes.image} />
    </div>
  );
}

export default GridPost;
