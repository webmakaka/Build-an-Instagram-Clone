export function songReducer(state, action) {
  switch (action.type) {
    case 'PLAY_SONG': {
      return {
        ...state,
        isPlaying: true,
      };
    }
    case 'PAUSE_SONG': {
      return {
        ...state,
        isPlaying: false,
      };
    }
    case 'SET_SONG': {
      return {
        ...state,
        song: action.payload.song,
      };
    }
    default:
      return state;
  }
}
