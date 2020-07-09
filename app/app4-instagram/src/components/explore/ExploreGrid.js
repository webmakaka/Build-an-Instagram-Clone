import React from 'react';
import { Typography } from '@material-ui/core';
import { LoadingLargeIcon } from '../../icons';
import GridPost from '../shared/GridPost';
import { useQuery } from '@apollo/react-hooks';
import { EXPLORE_POSTS } from '../../graphql/queries';
import { UserContext } from '../../App';
import { useExploreGridStyles } from '../../styles';

function ExploreGrid() {
  const classes = useExploreGridStyles();
  const { feedIds } = React.useContext(UserContext);
  const variables = { feedIds };
  const { data, loading } = useQuery(EXPLORE_POSTS, { variables });

  return (
    <>
      <Typography
        color="textSecondary"
        variant="subtitle2"
        component="h2"
        gutterBottom
        className={classes.typography}
      >
        Explore
      </Typography>
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <article className={classes.article}>
          <div className={classes.postContainer}>
            {data.posts.map((post) => (
              <GridPost key={post.id} post={post} />
            ))}
          </div>
        </article>
      )}
    </>
  );
}

export default ExploreGrid;
