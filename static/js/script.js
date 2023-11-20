(function ($) {
  'use strict';
  new Sakura('.sakura-falling');
})(jQuery);

/**
 *
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal.
 * Choose a heart-touching track! 🎵 ❤️
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */
$(document).on('click', function () {
  document.getElementById('my_audio').play();
  console.log('Shaadi me zaroor aana');
});

// being a bit cool :p
var styles = [
  'background: linear-gradient(#D33106, #571402)',
  'border: 4px solid #3E0E02',
  'color: white',
  'display: block',
  'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)',
  'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
  'line-height: 40px',
  'text-align: center',
  'font-weight: bold',
  'font-size: 32px',
].join(';');

var styles1 = [
  'color: #FF6C37',
  'display: block',
  'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
  'line-height: 40px',
  'font-weight: bold',
  'font-size: 32px',
].join(';');

var styles2 = [
  'color: teal',
  'display: block',
  'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)',
  'line-height: 40px',
  'font-weight: bold',
  'font-size: 32px',
].join(';');

console.log('\n\n%c SAVE THE DATE: 07th Dec, 2023!', styles);

console.log(
  '%cYour presence is requested!%c\n\nRegards: Tushar Gandhi',
  styles1,
  styles2
);

console.log(
  `%cShaadi me zaroor aana!\n\n`,
  'color: yellow; background:tomato; font-size: 24pt; font-weight: bold'
);

document.addEventListener('DOMContentLoaded', () => {
  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = new Date().getTime() / 1000 + 86400 * 2 + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  }, 5000);

  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
});
