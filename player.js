// Custom track-list player. One shared <audio> element per page controls
// playback; each .track-row's play button starts/pauses its own track and
// pauses any other that's currently playing. A thin progress bar at the
// bottom of the active row fills as the track plays.
document.addEventListener('DOMContentLoaded', function () {
  var audio = document.getElementById('albumAudio');
  var rows = document.querySelectorAll('.track-row');
  if (!audio || !rows.length) return;

  var activeRow = null;

  function clearActive() {
    if (!activeRow) return;
    activeRow.classList.remove('is-playing');
    var bar = activeRow.querySelector('.track-progress');
    if (bar) bar.style.width = '0%';
    activeRow = null;
  }

  rows.forEach(function (row) {
    var btn = row.querySelector('.track-play');
    var src = row.getAttribute('data-src');

    btn.addEventListener('click', function () {
      var isThisRowPlaying = row === activeRow && !audio.paused;

      if (isThisRowPlaying) {
        audio.pause();
        return;
      }

      if (row !== activeRow) {
        clearActive();
        audio.src = src;
        activeRow = row;
        row.classList.add('is-playing');
      }

      audio.play();
    });
  });

  audio.addEventListener('pause', function () {
    if (activeRow) activeRow.classList.remove('is-playing');
  });

  audio.addEventListener('play', function () {
    if (activeRow) activeRow.classList.add('is-playing');
  });

  audio.addEventListener('timeupdate', function () {
    if (!activeRow || !audio.duration) return;
    var pct = (audio.currentTime / audio.duration) * 100;
    var bar = activeRow.querySelector('.track-progress');
    if (bar) bar.style.width = pct + '%';
  });

  audio.addEventListener('ended', function () {
    clearActive();
  });
});
