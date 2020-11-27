// This file is labeled as index.js because webpack will automatically
// assign this file when importing the folder to another file.

// Action creator
export const selectSong = (song) => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
