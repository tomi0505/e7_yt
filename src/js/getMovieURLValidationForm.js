function getMovieURLValidationForm() {
  const setMoviePathInput = document.querySelector('.set-movie-path-form-b__set-movie-path-input');
  const setMoviePathInputValue = setMoviePathInput.value;

  const searchYTIDRegExpPattern = /v=(.{11})/i;

  if(setMoviePathInputValue.trim() !== '' && setMoviePathInputValue.trim().indexOf(' ') === -1) {
    if(setMoviePathInputValue.indexOf('youtube.com/watch') !== -1) {
      // PASTE LINK
      const searchYTIDRegExpPatternResult = setMoviePathInputValue.match(searchYTIDRegExpPattern);
      const movieId = searchYTIDRegExpPatternResult.find(item => item.length === 11);
      return movieId;
    } else if(setMoviePathInputValue.length === 11) {
      // PASTE ID
      const movieId = setMoviePathInputValue;
      return movieId;
    } else {
      alert('Wprowadzono nieprawidłowy link lub id filmu.');
    }
  } else {
    alert('Wprowadzono nieprawidłowy link lub id filmu.');
  }
};

export default getMovieURLValidationForm;