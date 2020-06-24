import React from 'react';
import { useOptionsDialogStyles } from '../../styles';
import { Dialog, Zoom, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { defaultPost } from '../../data';

function OptionsDialog({ onClose }) {
  const classes = useOptionsDialogStyles();

  return (
    <Dialog
      open
      classes={{
        scrollPaper: classes.dialogScrollPaper,
      }}
      onClose={onClose}
      TransitionComponent={Zoom}
    >
      <Button className={classes.redButton}>Unfollow</Button>
      <Divider />
      <Button>
        <Link to={`/p/${defaultPost.id}`}>Go to post</Link>
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
