import React, { useContext } from 'react';
import { useOptionsDialogStyles } from '../../styles';
import { Dialog, Zoom, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { useMutation } from '@apollo/react-hooks';
import { UNFOLLOW_USER, DELETE_POST } from '../../graphql/mutations';

function OptionsDialog({ onClose, authorId, postId }) {
  const classes = useOptionsDialogStyles();
  const { currentUserId, followingIds } = React.useContext(UserContext);
  const isOwner = authorId === currentUserId;
  const buttonText = isOwner ? 'Delete' : 'Unfollow';
  const onClick = isOwner ? handleDeletePost : handleUnfollowUser;
  const isFollowing = followingIds.some((id) => id === authorId);
  const isUnrelatedUser = !isOwner && !isFollowing;
  const [unfollowUser] = useMutation(UNFOLLOW_USER);
  const [deletePost] = useMutation(DELETE_POST);
  const history = useHistory();

  async function handleDeletePost() {
    const variables = {
      postId,
      userId: currentUserId,
    };

    await deletePost({ variables });
    onClose();
    history.push('/');
    window.location.reload();
  }

  function handleUnfollowUser() {
    const variables = {
      userIdToFollow: authorId,
      currentUserId,
    };
    unfollowUser({ variables });
    onClose();
  }

  return (
    <Dialog
      open
      classes={{
        scrollPaper: classes.dialogScrollPaper,
      }}
      onClose={onClose}
      TransitionComponent={Zoom}
    >
      {!isUnrelatedUser && (
        <Button className={classes.redButton} onClick={onClick}>
          {buttonText}
        </Button>
      )}
      <Divider />
      <Button>
        <Link to={`/p/${postId}`}>Go to post</Link>
      </Button>
      <Divider />
      <Button>Share</Button>
      <Divider />
      <Button>Copy Link</Button>
      <Divider />
      <Button onClick={onClose}>Cancel</Button>
    </Dialog>
  );
}

export default OptionsDialog;
