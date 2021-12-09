//elements
const target = document.querySelectorAll('[data-anime]');

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

animeScroll();