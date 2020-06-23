import React from 'react';
import useOutsideclic from '@rooks/use-outside-click';
import { defaultNotifications } from '../../data';
import { useNotificationListStyles } from '../../styles';
import { Grid, Avatar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FollowButton from '../shared/FollowButton';

function NotificationList({ handleHideList }) {
  const listContainerRef = React.useRef();
  const classes = useNotificationListStyles();
  useOutsideclic(listContainerRef, handleHideList);

  return (
    <Grid ref={listContainerRef} className={classes.listContainer} container>
      {defaultNotifications.map((notification) => {
        const isLike = notification.type === 'like';
        const isFollow = notification.type === 'follow';

        return (
          <Grid key={notification.id} item className={classes.listItem}>
            <div className={classes.listItemWrapper}>
              <div className={classes.avatarWrapper}>
                <Avatar
                  src={notification.user.profile_imae}
                  alt="User avatar"
                />
              </div>
              <div className={classes.nameWrapper}>
                <Link to={`/${notification.user.username}`}>
                  <Typography variant="body1">
                    {notification.user.username}
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  {isLike && `likes your photo. 4d`}
                  {isFollow && `started following you. 5d`}
                </Typography>
              </div>
            </div>
            <div>
              {isLike && (
                <Link to={`/p/${notification.post.id}`}>
                  <Avatar src={notification.post.media} alt="post cover" />
                </Link>
              )}
              {isFollow && <FollowButton />}
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default NotificationList;
