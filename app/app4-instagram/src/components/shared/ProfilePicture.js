import React from 'react';
import { Person } from '@material-ui/icons';
import { useProfilePictureStyles } from '../../styles';

function ProfilePicture({
  size,
  image = 'http://placecorgi.com/150/150',
  isOwner,
}) {
  const classes = useProfilePictureStyles({ size, isOwner });

  return (
    <section className={classes.section}>
      {image ? (
        <div className={classes.wrapper}>
          <img src={image} alt="user profile" className={classes.image} />
        </div>
      ) : (
        <div className={classes.wrapper}>
          <Person className={classes.person} />
        </div>
      )}
    </section>
  );
}

export default ProfilePicture;
