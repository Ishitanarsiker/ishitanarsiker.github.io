/**
 * Particleground demo
 * @author Ishita Narsiker
 */


document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#c770f0',
    lineColor: '#c770f0'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);



