import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init({ duration: 1000, delay: 100 });

// Add to all images lazy loading and fade in on scroll
(function () {
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
})();

// Set scroll to top button content

const setScrollButtonContent = function (windowHeight) {
  const scrollButtonToTop = document.querySelector('.extras__scroll-to-top');
  const navSideMenu = document.querySelector('.side-dotted-menu');

  if (windowHeight >= 700) {
    scrollButtonToTop.classList.add('active');
    navSideMenu.classList.add('active');
  } else {
    scrollButtonToTop.classList.remove('active');
    navSideMenu.classList.remove('active');
  }

  if (window.innerWidth < 768) {
    scrollButtonToTop.innerHTML = 'TOP';
  } else {
    scrollButtonToTop.innerHTML = 'Scroll To Top';
  }
};
window.addEventListener(
  'scroll',
  throttle(() => {
    setScrollButtonContent(window.pageYOffset);
  }, 500)
);

setScrollButtonContent();
window.onresize = throttle(setScrollButtonContent, 500);

// Local storage for video player
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

player.on('timeupdate', throttle(setCurrentVideoTime, 1000));

function setCurrentVideoTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
