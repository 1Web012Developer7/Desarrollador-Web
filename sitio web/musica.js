document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audio-player');
    var playButton = document.getElementById('play-button');
    var pauseButton = document.getElementById('pause-button');
  
    playButton.addEventListener('click', function() {
      audioPlayer.play();
    });
  
    pauseButton.addEventListener('click', function() {
      audioPlayer.pause();
    });
  });
  