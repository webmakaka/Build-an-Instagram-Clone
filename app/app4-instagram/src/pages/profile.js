import React from 'react';
import Layout from '../components/shared/Layout';
import { useProfilePageStyles } from '../styles';
import {
  Hidden,
  Card,
  CardContent,
  Button,
  Typography,
  Dialog,
  Zoom,
  Divider,
  DialogTitle,
  Avatar,
} from '@material-ui/core';
import ProfilePicture from '../components/shared/ProfilePicture';
import { Link, useHistory, useParams } from 'react-router-dom';
import { GearIcon } from '../icons';
import ProfileTabs from '../components/profile/ProfileTabs';
import { AuthContext } from '../auth';
import { GET_USER_PROFILE } from '../graphql/queries';
import LoadingScreen from '../components/shared/LoadingScreen';
import { UserContext } from '../App';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FOLLOW_USER, UNFOLLOW_USER } from '../graphql/mutations';

function ProfilePage() {
  const classes = useProfilePageStyles();
  const { username } = useParams();
  const { currentUserId } = React.useContext(UserContext);
  const [showOptionsMenu, setOptionsMenu] = React.useState(false);

  const variables = {
    username,
  };
  const { data, loading } = useQuery(GET_USER_PROFILE, { variables });

  if (loading) return <LoadingScreen />;
  const [user] = data.users;
  const isOwner = user.id === currentUserId;

  function handleOptionsMenuClick() {
    setOptionsMenu(true);
  }

  function handleCloseMenu() {
    setOptionsMenu(false);
  }

  return (
    <Layout title={`${user.name} (@${user.username})`}>
      <div className={classes.container}>
        <Hidden xsDown>
          <Card className={classes.cardLarge}>
            <ProfilePicture isOwner={isOwner} image={user.profile_image} />
            <CardContent className={classes.CardContnetLarge}>
              <ProfileNameSection
                user={user}
                isOwner={isOwner}
                handleOptionsMenuClick={handleOptionsMenuClick}
              />
              <PostCountSection user={user} />
              <NameBioSection user={user} />
            </CardContent>
          </Card>
        </Hidden>
        <Hidden smUp>
          <Card classNam={classes.cardSmall}>
            <CardContent>
              <section size={77} className={classes.sectionSmall}>
                <ProfilePicture isOwner={isOwner} image={user.profile_image} />
                <ProfileNameSection
                  user={user}
                  isOwner={isOwner}
                  handleOptionsMenuClick={handleOptionsMenuClick}
                />
              </section>
              <NameBioSection user={user} />
            </CardContent>
            <PostCountSection user={user} />
          </Card>
        </Hidden>
        {showOptionsMenu && <OptionsMenu handleCloseMenu={handleCloseMenu} />}
        <ProfileTabs user={user} isOwner={isOwner} />
      </div>
    </Layout>
  );
}

function ProfileNameSection({ user, isOwner, handleOptionsMenuClick }) {
  const classes = useProfilePageStyles();
  const [showUnfollowDialog, setUnfollowDialog] = React.useState(false);
  const { currentUserId, followingIds, followerIds } = React.useContext(
    UserContext
  );

  const isAlreadyFollowing = followingIds.some((id) => id === user.id);
  const [isFollowing, setFollowing] = React.useState(isAlreadyFollowing);

  const isFollower = !isFollowing && followerIds.some((id) => id === user.id);

  const variables = {
    userIdToFollow: user.id,
    currentUserId,
  };

  const [followUser] = useMutation(FOLLOW_USER);

  function handleFollowUser() {
    setFollowing(true);
    followUser({ variables });
  }

  const onUnfollowUser = React.useCallback(() => {
    setUnfollowDialog(false);
    setFollowing(false);
  }, []);

  let followButton;

  if (isFollowing) {
    followButton = (
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => setUnfollowDialog(true)}
      >
        Following
      </Button>
    );
  } else if (isFollower) {
    followButton = (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleFollowUser}
      >
        Follow Back
      </Button>
    );
  } else {
    followButton = (
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleFollowUser}
      >
        Follow
      </Button>
    );
  }

  return (
    <>
      <Hidden xsDown>
        <section className={classes.usernameSection}>
          <Typography className={classes.username}>{user.username}</Typography>
          {isOwner ? (
            <>
              <Link to="/accounts/edit">
                <Button variant="outlined">Edit Profile</Button>
              </Link>
              <div
                className={classes.settingsWrapper}
                onClick={handleOptionsMenuClick}
              >
                <GearIcon className={classes.settings} />
              </div>
            </>
          ) : (
            <>{followButton}</>
          )}
        </section>
      </Hidden>
      <Hidden smUp>
        <section>
          <div className={classes.usernameDivSmall}>
            <Typography className={classes.username}>
              {user.username}
            </Typography>
            {isOwner && (
              <div
                className={classes.settingsWrapper}
                onClick={handleOptionsMenuClick}
              >
                <GearIcon className={classes.settings} />
              </div>
            )}
          </div>
          {isOwner ? (
            <Link to="/accounts/edit">
              <Button variant="outlined" style={{ width: '100%' }}>
                Edit Profile
              </Button>
            </Link>
          ) : (
            followButton
          )}
        </section>
      </Hidden>
      {showUnfollowDialog && (
        <UnfollowDialog
          user={user}
          onClose={() => setUnfollowDialog(false)}
          onUnfollowUser={onUnfollowUser}
        />
      )}
    </>
  );
}

function UnfollowDialog({ onClose, user, onUnfollowUser }) {
  const classes = useProfilePageStyles();
  const { currentUserId } = React.useContext(UserContext);
  const [unfollowUser] = useMutation(UNFOLLOW_USER);

  function handleUnfollowUser() {
    const variables = {
      userIdToFollow: user.id,
      currentUserId,
    };

    unfollowUser({ variables });
    onUnfollowUser();
  }
  return (
    <Dialog
      open
      classes={{
        scrollPaper: classes.unfollowDialogScrollPaper,
      }}
      onClose={onClose}
      TransitionComponent={Zoom}
    >
      <div className={classes.wrapper}>
        <Avatar
          src={user.profile_image}
          alt={`${user.username}'s avatar`}
          className={classes.avatar}
        />
      </div>
      <Typography
        className={classes.unfollowDialogText}
        align="center"
        variant="body2"
      >
        Unfollow @{user.username}?
      </Typography>
      <Divider />
      <Button className={classes.unfollowButton} onClick={handleUnfollowUser}>
        Unfollow
      </Button>
      <Divider />
      <Button className={classes.cancelButton} onClick={onClose}>
        Cancel
      </Button>
    </Dialog>
  );
}

function PostCountSection({ user }) {
  const classes = useProfilePageStyles();
  const options = ['posts', 'followers', 'following'];
  return (
    <>
      <Hidden smUp>
        <Divider />
      </Hidden>
      <section className={classes.followingSection}>
        {options.map((option) => (
          <div className={classes.followingText} key={option}>
            <Typography className={classes.followingCount}>
              {user[`${option}_aggregate`].aggregate.count}
            </Typography>
            <Hidden xsDown>
              <Typography>{option}</Typography>
            </Hidden>
            <Hidden smUp>
              <Typography color="textSecondary">{option}</Typography>
            </Hidden>
          </div>
        ))}
      </section>
      <Hidden smUp>
        <Divider />
      </Hidden>
    </>
  );
}

function NameBioSection({ user }) {
  const classes = useProfilePageStyles();

  return (
    <section className={classes.section}>
      <Typography className={classes.typography}>{user.name}</Typography>
      <Typography>{user.bio}</Typography>
      <a href={user.website} target="_blank" rel="noopener noreferrer">
        <Typography className={classes.typography} color="secondary">
          {user.website}
        </Typography>
      </a>
    </section>
  );
}

function OptionsMenu({ handleCloseMenu }) {
  const classes = useProfilePageStyles();
  const { signOut } = React.useContext(AuthContext);
  const [showLogOUtMessage, setLogOUtMessage] = React.useState(false);
  const history = useHistory();

  function handleLogOutClick() {
    setLogOUtMessage(true);
    setTimeout(() => {
      signOut();
      history.push('/accounts/login');
    }, 2000);
  }

  return (
    <Dialog
      open
      classes={{
        scrollPaper: classes.dialogScrollPaper,
        paper: classes.dialogPaper,
      }}
      TransitionComponent={Zoom}
    >
      {showLogOUtMessage ? (
        <DialogTitle className={classes.dialogTitle}>
          Logging Out
          <Typography color="textSecondary">
            You need to log back in to continue using Instagram.
          </Typography>
        </DialogTitle>
      ) : (
        <>
          <OptionsItem text="Change Password" />
          <OptionsItem text="Nametag" />
          <OptionsItem text="Authorized Apps" />
          <OptionsItem text="Notifications" />
          <OptionsItem text="Privacy and Security" />
          <OptionsItem text="Log Out" onClick={handleLogOutClick} />
          <OptionsItem text="Cancel" onClick={handleCloseMenu} />
        </>
      )}
    </Dialog>
  );
}

function OptionsItem({ text, onClick }) {
  return (
    <>
      <Button style={{ padding: '12px 8px' }} onClick={onClick}>
        {text}
      </Button>
      <Divider />
    </>
  );
}

export default ProfilePage;
