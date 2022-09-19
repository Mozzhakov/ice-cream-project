!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

let currentModalWindow;

document.addEventListener('DOMContentLoaded', function () {
  /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function (e) {
      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
      e.preventDefault();

      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );
      currentModalWindow = modalElem;
      /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
      modalElem.classList.add('active');
      overlay.classList.add('active');

      // Делаю динамическое изменение позиционирование модального окна в зависимости от его высоты.
      if (window.innerHeight < modalElem.offsetHeight) {
        const modalFromTop = window.pageYOffset + 30;

        modalElem.style.left = ' 50%';
        modalElem.style.transform = 'translateX(-50%)';
        modalElem.style.position = 'absolute';
        modalElem.style.top = `${modalFromTop}px`;
      } else {
        modalElem.style.position = 'fixed';
        modalElem.style.top = '50%';
        modalElem.style.left = '50%';
        modalElem.style.transform = 'translate(-50%, -50%)';
      }
    }); // end click
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      removeClassListStyle(currentModalWindow);
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      // parentModal.removeAttribute('position');
      document.querySelector('.overlay').classList.remove('active');
    });
  }); // end foreach

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        removeClassListStyle(currentModalWindow);
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
      }
    },
    false
  );

  overlay.addEventListener('click', function (e) {
    document.querySelector('.modal.active').classList.remove('active');

    this.classList.remove('active');

    removeClassListStyle(currentModalWindow);
  });
}); // end ready

// Remove overlay style function on modal close
function removeClassListStyle(elem) {
  elem.style.position = '';
  elem.style.top = '';
  elem.style.left = '';
  elem.style.transform = '';
}

document
  .querySelector('button.extras__scroll-to-top')
  .addEventListener('click', e => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
