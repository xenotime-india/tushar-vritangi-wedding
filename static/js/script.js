(function ($) {
  setTimeout(() => {
    $('.sakura-falling').sakura();
  }, 2000);
})(jQuery);
document.addEventListener(
  'click',
  function (event) {
    document.getElementById('my_audio').play();
    console.log('Shaadi me zaroor aana');
  },
  false
);

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
