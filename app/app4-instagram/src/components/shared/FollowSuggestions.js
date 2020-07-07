import React from 'react';
import { UserContext } from '../../App';
import { useFollowSuggestionsStyles } from '../../styles';
import { Typography, Avatar } from '@material-ui/core';
import Slider from 'react-slick';
import { LoadingLargeIcon } from '../../icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import FollowButton from './FollowButton';
import { useQuery } from '@apollo/react-hooks';
import { SUGGEST_USERS } from '../../graphql/queries';

function FollowSuggestions({ hideHeader }) {
  const classes = useFollowSuggestionsStyles();
  const { followerIds, me } = React.useContext(UserContext);
  const variables = {
    limit: 20,
    followerIds,
    createdAt: me.created_at,
  };
  const { data, loading } = useQuery(SUGGEST_USERS, { variables });

  return (
    <div className={classes.container}>
      {!hideHeader && (
        <Typography
          color="textSecondary"
          variant="subtitle2"
          className={classes.typography}
        >
          Suggestions For You
        </Typography>
      )}
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <Slider
          className={classes.slide}
          dots={false}
          infinite
          speed={1000}
          touchThreshold={1000}
          variableWidth
          swipeToSlide
          arrows
          slidesToScroll={3}
          easing="ease-in-out"
        >
          {data.users.map((user) => (
            <FollowSuggestionsItem key={user.id} user={user} />
          ))}
        </Slider>
      )}
    </div>
  );
}

function FollowSuggestionsItem({ user }) {
  const classes = useFollowSuggestionsStyles();
  const { profile_image, username, name, id } = user;

  return (
    <div>
      <div className={classes.card}>
        <Link to={`/${username}`}>
          <Avatar
            src={profile_image}
            alt={`${username}'s profile`}
            classes={{ root: classes.avatar, img: classes.avatarImg }}
          />
        </Link>
        <Link to={`/${username}`}>
          <Typography
            className={classes.text}
            variant="subtitle2"
            align="center"
          >
            {username}
          </Typography>
        </Link>
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="body2"
          align="center"
        >
          {name}
        </Typography>
        <FollowButton id={id} side={false} />
      </div>
    </div>
  );
}

export default FollowSuggestions;
