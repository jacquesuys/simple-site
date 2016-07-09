<!-- 
// https://github.com/GoogleChrome/ui-element-samples/blob/gh-pages/side-nav/side-nav.js
-->

function Menu() {
  var showButtonEl = document.querySelector('.menu-show');
  var sideNavEl = document.querySelector('.side-nav');
  var hideButtonEl = document.querySelector('.menu-hide');

  showButtonEl.addEventListener('click', showSideNav);
  hideButtonEl.addEventListener('click', hideSideNav);
  sideNavEl.addEventListener('click', hideSideNav);

  function onTransitionEnd (evt) {
    sideNavEl.classList.remove('side-nav--animatable');
    sideNavEl.removeEventListener('transitionend', onTransitionEnd);
  }

  function showSideNav() {
    sideNavEl.classList.add('side-nav--animatable');
    sideNavEl.classList.add('side-nav--visible');
    sideNavEl.addEventListener('transitionend', onTransitionEnd);
  }

  function hideSideNav () {
    sideNavEl.classList.add('side-nav--animatable');
    sideNavEl.classList.remove('side-nav--visible');
    sideNavEl.addEventListener('transitionend', onTransitionEnd);
  }
}

function hero() {
  document.querySelector('body').classList.add('hero--visible');
}

function backToTop() {
  var body = document.querySelector('body');
  var backTop = document.querySelector('.back-to--Top');

  backTop.addEventListener('click', function(){
    ButteryScroll(body, 0, 500);
  });

  <!-- // https://gist.github.com/viljamis/6cd87add10414563acd9 -->
  function ButteryScroll(scrollable, distance, duration) {
    var startTime;
    var startPos = scrollable.scrollTop;
    var maxScroll = scrollable.scrollHeight - scrollable.offsetHeight;
    var scrollEndValue = startPos + distance < maxScroll ? distance : maxScroll - startPos;

    function easeInOutCubic(t, b, c, d) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
      }
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }

    function scroll(timestamp) {
      startTime = startTime || timestamp;
      var elapsed = timestamp - startTime;
      var progress = easeInOutCubic(elapsed, startPos, scrollEndValue, duration);
      scrollable.scrollTop = progress;

      if (elapsed < duration) {
        requestAnimationFrame(scroll);
      }
    }
    requestAnimationFrame(scroll);
  }
}

function init() {
  Menu();
  backToTop();
  hero();
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(init);