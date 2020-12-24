// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {

}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

// ---
let root = document.documentElement;
let playingInterval;
const beforeTheEndMovieAlertEl = document.querySelector('.player-container-b__before-the-end-movie-alert');

function onPlayerStateChange(e) {
  if(e.data === 1) {
    playingInterval = setInterval(() => {
      let durationTime = Math.floor(player.getDuration());
      let currentElapsedTime = Math.floor(player.getCurrentTime());
      let timeToEnd = durationTime - currentElapsedTime;

      if(timeToEnd <= 10) {
        beforeTheEndMovieAlertEl.classList.add('player-container-b__before-the-end-movie-alert--counter-before-the-end-movie-js');
        beforeTheEndMovieAlertEl.textContent = timeToEnd;
        console.log('Pozostało: ', timeToEnd);

        // THE MOVIE END
        timeToEnd === 0 && clearInterval(playingInterval);
      }
    }, 1000);
  } else if (e.data === 2) {
    clearInterval(playingInterval);
    beforeTheEndMovieAlertEl.classList.remove('player-container-b__before-the-end-movie-alert--counter-before-the-end-movie-js');
  }
};
// --/

function stopVideo() {
  player.stopVideo();
}