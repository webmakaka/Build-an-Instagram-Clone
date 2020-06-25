import React from 'react';
import { usePostSkeletonStyles } from '../../styles';
import { useMediaQuery } from '@material-ui/core';

export function PostSkeleton() {
  const classes = usePostSkeletonStyles();
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <div
      className={classes.container}
      style={{ gridTemplateColumns: matches && '600px 335px' }}
    >
      <div className={classes.mediaSkeleton} />
      <div>
        <div className={classes.headerSkeleton}>
          <div className={classes.avatarSkeleton} />
          <div className={classes.headerTextSkeleton}>
            <div className={classes.primaryTextSkeleton} />
            <div className={classes.secondaryTextSkeleton} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSkeleton;
