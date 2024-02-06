import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const savePlaybackTime = throttle(function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', savePlaybackTime);

const resumePlayback = () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime !== null) {
    player.setCurrentTime(savedTime).catch(function (error) {
      console.error('Error occurred when setting playback time: ', error);
    });
  }
};

player
  .ready()
  .then(() => {
    resumePlayback();
  })
  .catch(function (error) {
    console.error('Error when initializing player: ', error);
  });

