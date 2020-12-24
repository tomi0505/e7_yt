import './scss/style.scss';
import getMovieURLValidationForm from './js/getMovieURLValidationForm';

let firstPlayerInit = true;

function playerInit(currentMovieId) {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: currentMovieId,
    playerVars: {'autoplay': 1},
    events: {
      // 'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
};

document.addEventListener("DOMContentLoaded", function() {
  const getMovieBtn = document.querySelector('.set-movie-path-form-b__get-movie-btn');
  let currentMovieId;

  getMovieBtn.addEventListener('click', () => {
    currentMovieId = getMovieURLValidationForm();

    if(currentMovieId) {
      if(firstPlayerInit) {
        playerInit(currentMovieId);
        firstPlayerInit = false;
      } else {
        currentMovieId && player.loadVideoById(currentMovieId);
      }
    }
  });
});

// TEST YT LINKS
// https://www.youtube.com/watch?v=VWlWOFElMVk
// https://www.youtube.com/watch?v=DL7HTxBZMAU