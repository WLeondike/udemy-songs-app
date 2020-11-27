import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    // Top Hip-Hop songs 2020 google search
    { title: 'Laugh Now Cry Later', duration: '5:01' },
    { title: 'WHATS POPPIN', duration: '2:49' },
    { title: 'Lemonade', duration: '3:36' },
    { title: 'Wolves', duration: '3:20' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
