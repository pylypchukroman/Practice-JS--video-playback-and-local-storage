import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const VIDEO_STORAGE_KEY = 'videoplayer-current-time';


player.on('timeupdate', throttle(throttled, 1000));

function throttled(data) {
      console.log('Percentage watched: ' + data.seconds);
    localStorage.setItem('VIDEO_STORAGE_KEY', data.seconds);
}
player.setCurrentTime(localStorage.getItem("VIDEO_STORAGE_KEY")).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
