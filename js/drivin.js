document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
      audio.play();
      document.getElementById('playButton').innerText = 'Pausar Áudio';
    } else {
      audio.pause();
      document.getElementById('playButton').innerText = 'Reproduzir Áudio';
    }
  });