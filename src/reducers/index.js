
import { combineReducers } from 'redux';
const songsReducer = () => {
  return ([
    {title: "No Scrubs", artist: "TLC", duration: '4:05'},
    {title: "Macarena", artist: "I forgot", duration: '2:30'},
    {title: "All Star", artist: "Smashmouth", duration: '3:15'},
    {title: "I Want it that Way", artist: "The Backstreet Boys", duration: "1:45"}
  ]);
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED'){
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});