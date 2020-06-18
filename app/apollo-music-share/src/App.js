import React from 'react';
import { Grid, useMediaQuery, Hidden } from '@material-ui/core';

import { songReducer } from './reducer';

import Header from './components/Header';
import AddSong from './components/AddSong';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';

export const SongContext = React.createContext({
  song: {
    id: '0924ab78-97d0-40e7-b393-be86f2b84e9f',
    title: 'Sober Live (Pro Shot) REMASTERED',
    artist: 'Tool',
    thumbnail: 'http://img.youtube.com/vi/u7lweNCCwS0/0.jpg',
    url: 'https://www.youtube.com/watch?v=u7lweNCCwS0',
    duration: 301,
  },
  isPlaying: false,
});

function App() {
  const initialSongState = React.useContext(SongContext);
  const [state, dispatch] = React.useReducer(songReducer, initialSongState);
  const greaterThanSm = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const greaterThanMd = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <SongContext.Provider value={{ state, dispatch }}>
      <Hidden only="xs">
        <Header />
      </Hidden>

      <Grid container spacing={3}>
        <Grid
          style={{
            paddingTop: greaterThanSm ? 80 : 10,
          }}
          item
          xs={12}
          md={7}
        >
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          style={
            greaterThanMd
              ? { position: 'fixed', width: '100%', right: 0, top: 70 }
              : { position: 'fixed', withh: '100%', left: 0, bottom: 0 }
          }
          item
          xs={12}
          md={5}
        >
          <SongPlayer />
        </Grid>
      </Grid>
    </SongContext.Provider>
  );
}

export default App;
