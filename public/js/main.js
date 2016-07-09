<!-- 
// https://github.com/GoogleChrome/ui-element-samples/blob/gh-pages/side-nav/side-nav.js
-->

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