import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();

// Add to all images lazy loading and fade in on scroll
(function () {
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
    // img.setAttribute('data-aos', 'fade-in');
    // img.setAttribute('data-aos-delay', '200');
    // img.setAttribute('data-aos-duration', '500');
    // img.setAttribute('data-aos-placement', 'bottom-center');
  });
})();

// Set scroll to top button content

const setScrollButtonContent = function () {
  const scrollButtonToTop = document.querySelector('.extras__scroll-to-top');

  if (window.innerWidth < 768) {
    scrollButtonToTop.innerHTML = 'TOP';
  } else {
    scrollButtonToTop.innerHTML = 'Scroll To Top';
  }
};

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
