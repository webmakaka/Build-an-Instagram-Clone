import React from 'react';
import {
  Typography,
  Divider,
  Hidden,
  Button,
  TextField,
} from '@material-ui/core';
import UserCard from '../shared/UserCard';
import { usePostStyles } from '../../styles';
import {
  MoreIcon,
  CommentIcon,
  ShareIcon,
  LikeIcon,
  UnlikeIcon,
  SaveIcon,
  RemoveIcon,
} from '../../icons';
import OptionsDialog from '../shared/OptionsDialog';
import { defaultPost } from '../../data';
import { Link } from 'react-router-dom';
import PostSkeleton from './PostSkeleton';

function LikeButton() {
  const classes = usePostStyles();
  const [liked, setLiked] = React.useState(false);
  const Icon = liked ? UnlikeIcon : LikeIcon;
  const className = liked ? classes.liked : classes.like;
  const onClick = liked ? handleUnlike : handleLike;

  function handleLike() {
    console.log('like');
    setLiked(true);
  }

  function handleUnlike() {
    console.log('unlike');
    setLiked(false);
  }

  return <Icon className={className} onClick={onClick} />;
}

function SaveButton() {
  const classes = usePostStyles();
  const [saved, setSaved] = React.useState(false);
  const Icon = saved ? RemoveIcon : SaveIcon;
  const onClick = saved ? handleRemove : handleSave;

  function handleSave() {
    console.log('save');
    setSaved(true);
  }

  function handleRemove() {
    console.log('remove');
    setSaved(false);
  }

  return <Icon className={classes.saveIcon} onClick={onClick} />;
}

function Comment() {
  const classes = usePostStyles();
  const [content, setContent] = React.useState('');

  return (
    <div className={classes.commentContainer}>
      <TextField
        fullWidth
        value={content}
        placeholder="Add a comment..."
        multiline
        rowsMax={2}
        rows={1}
        onChange={(event) => setContent(event.target.value)}
        className={classes.textField}
        InputProps={{
          classes: {
            root: classes.root,
            underline: classes.underline,
          },
        }}
      />
      <Button
        color="primary"
        className={classes.commentButton}
        disabled={!content.trim()}
      >
        Post
      </Button>
    </div>
  );
}

function Post() {
  const classes = usePostStyles();
  const [loading] = React.useState(false);
  const [showOptionsDialog, setOptionsDialog] = React.useState(false);
  const { id, media, likes, user, caption, comments } = defaultPost;

  if (loading) return <PostSkeleton />;

  return (
    <div className={classes.postContainer}>
      <article className={classes.article}>
        <div className={classes.postHeader}>
          <UserCard user={user} avatarSize={32} />
          <MoreIcon
            className={classes.moreIcon}
            onClick={() => setOptionsDialog(true)}
          />
        </div>
        <div className={classes.postImage}>
          <img src={media} alt="Post media" className={classes.image} />
        </div>
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtonsWrapper}>
            <LikeButton />
            <Link to={`/p/${id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            <SaveButton />
          </div>
          <Typography className={classes.likes} variant="subtitle2">
            <span>{likes === 1 ? '1 like' : `${likes} likes`}</span>
          </Typography>
          <div className={classes.postCaptionContainer}>
            <Typography
              variant="body2"
              component="span"
              className={classes.postCaption}
              dangerouslySetInnerHTML={{ __html: caption }}
            />

            {comments.map((comment) => (
              <div key={comment.id}>
                <Link to={`/${comment.user.username}`}>
                  <Typography
                    variant="subtitle2"
                    component="span"
                    className={classes.commentUsername}
                  >
                    {comment.user.username}
                  </Typography>{' '}
                  <Typography variant="body2" componnet="span">
                    {comment.content}
                  </Typography>
                </Link>
              </div>
            ))}
          </div>

          <Typography color="textSecondary" className={classes.datePosted}>
            5 DAYS AGO
          </Typography>

          <Hidden xsDown>
            <div className={classes.comment}>
              <Divider />
              <Comment />
            </div>
          </Hidden>
        </div>
      </article>
      {showOptionsDialog && (
        <OptionsDialog onClose={() => setOptionsDialog(false)} />
      )}
    </div>
  );
}

export default Post;
