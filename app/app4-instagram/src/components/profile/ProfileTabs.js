import React from 'react';
import GridPost from '../shared/GridPost';
import { Tab, Tabs, Hidden, Divider, Typography } from '@material-ui/core';
import { GridIcon, SaveIcon } from '../../icons';
import { useProfileTabsStyles } from '../../styles';

function ProfilePosts({ user, isOwner }) {
  const classes = useProfileTabsStyles();

  if (user.posts.length === 0) {
    return (
      <section className={classes.profilePostsSection}>
        <div className={classes.noContent}>
          <div className={classes.uploadPhotoIcon} />
          <Typography variant="h4">
            {isOwner ? 'Upload a Photo' : 'No Photos'}
          </Typography>
        </div>
      </section>
    );
  }

  return (
    <article className={classes.article}>
      <div className={classes.postContainer}>
        {user.posts.map((post) => (
          <GridPost key={post.id} post={post} />
        ))}
      </div>
    </article>
  );
}

function SavedPosts() {
  const classes = useProfileTabsStyles();

  return (
    <section className={classes.savedPostsSection}>
      <div className={classes.noContent}>
        <div className={classes.savedPhotoIcon} />
        <Typography variant="h4">Save</Typography>
        <Typography align="center">
          Save photos and videos that you want to see again. No one is notified,
          and only you can see what you've saved.
        </Typography>
      </div>
    </section>
  );
}

function ProfileTabs({ user, isOwner }) {
  const classes = useProfileTabsStyles();
  const [value, setValue] = React.useState(0);

  return (
    <>
      <section className={classes.section}>
        <Hidden xsDown>
          <Divider />
        </Hidden>
        <Hidden xsDown>
          <Tabs
            value={value}
            onChange={(_, value) => setValue(value)}
            centered
            classes={{ indicator: classes.tabsIndicator }}
          >
            <Tab
              icon={<span className={classes.postsIconLarge} />}
              label="POSTS"
              classes={{
                root: classes.tabRoot,
                labelIcon: classes.tabLabelIcon,
                wrapper: classes.tabWrapper,
              }}
            />
            {isOwner && (
              <Tab
                icon={<span className={classes.savedIconLarge} />}
                label="SAVED"
                classes={{
                  root: classes.tabRoot,
                  labelIcon: classes.tabLabelIcon,
                  wrapper: classes.tabWrapper,
                }}
              />
            )}
          </Tabs>
        </Hidden>
        <Hidden smUp>
          <Tabs
            value={value}
            onChange={(_, value) => setValue(value)}
            centered
            className={classes.tabs}
            classes={{ indicator: classes.tabsIndicator }}
          >
            <Tab
              icon={<GridIcon fill={value === 0 ? '#3897f0' : 'undefined'} />}
              classes={{ root: classes.tabRoot }}
            />

            {isOwner && (
              <Tab
                icon={<SaveIcon fill={value === 1 ? '#3897f0' : 'undefined'} />}
                classes={{ root: classes.tabRoot }}
              />
            )}
          </Tabs>
        </Hidden>
        <Hidden smUp>{user.posts.length === 0 && <Divider />}</Hidden>
        {value === 0 && <ProfilePosts user={user} isOwner={isOwner} />}
        {value === 1 && <SavedPosts />}
      </section>
    </>
  );
}

export default ProfileTabs;
