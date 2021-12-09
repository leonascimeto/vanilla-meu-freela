//elements
const html = document.querySelector('html');

const target = document.querySelectorAll('[data-anime]');
const buttonToggle = document.querySelector('input[type="checkbox"]');

//debounce to event scroll animate
function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    let context = this;
    let args = arguments;

    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

//events
buttonToggle.addEventListener('change', handleButtonToggle);
(target.length > 0) && window.addEventListener('scroll', debounce(() => animeScroll(), 100));


function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(element => {
    if (windowTop > element.getBoundingClientRect().y)
      element.classList.add('animate');
    else
      element.classList.remove('animate');
  })
}

function handleButtonToggle() {
  html.classList.toggle('dark');
  window.localStorage.setItem('@meufreela/darkmode', html.classList);
}

function initDarkMode() {
  const localData = window.localStorage.getItem('@meufreela/darkmode');
  if (localData) {
    html.classList.add('dark');
    buttonToggle.checked = true;
  }
}

initDarkMode();
animeScroll();