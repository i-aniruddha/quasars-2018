var mobMenuState = false;

var el = $('.tabs');

var instance = M.Tabs.init(el, { swipeable: false});

$(document).ready(function () {
  // Menu toggle for mobile devices
  $('#mobile-menu-open').on('click', function () {

    if (!mobMenuState) {
      document.querySelector('#mobile-menu').classList.remove('hide');
      mobMenuState = true;
    }
  });
  $('#mobile-menu-close').on('click', function () {
    if (mobMenuState) {
      document.querySelector('#mobile-menu').classList.add('hide');
      mobMenuState = false;
    }
  })
});