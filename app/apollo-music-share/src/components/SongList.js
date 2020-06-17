import React from 'react';
import {
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { Save, PlayArrow } from '@material-ui/icons';
import { useSubscription } from '@apollo/react-hooks';
import { GET_SONGS } from '../graphql/subscriptions';

function SongList() {
  const { data, loading, error } = useSubscription(GET_SONGS);

  // const song = {
  //   title: 'Space',
  //   artist: 'Enjoykin',
  //   thumbnail: 'http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg',
  // };

  const useStyles = makeStyles((theme) => ({
    container: {
      margin: theme.spacing(3),
    },
    songInfoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    songInfo: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    thumbnail: {
      objectFit: 'cover',
      weidth: 140,
      height: 140,
    },
  }));

  function Song({ song }) {
    const classes = useStyles();
    const { title, artist, thumbnail } = song;

    return (
      <Card className={classes.container}>
        <div className={classes.songInfoContainer}>
          <CardMedia image={thumbnail} className={classes.thumbnail} />
          <div className={classes.songInfo}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body1" component="p" color="textSecondary">
                {artist}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton size="small" color="primary">
                <PlayArrow />
              </IconButton>
              <IconButton size="small" color="secondary">
                <Save />
              </IconButton>
            </CardActions>
          </div>
        </div>
      </Card>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 50,
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (error) return <div>Error fetching songs</div>;

  return (
    <div>
      {data.songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
}

export default SongList;
