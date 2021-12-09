import Toastify from 'toastify-js';

//elements
const html = document.querySelector('html');
const callFirtsButton = document.querySelector('.goToForm');
const nameInput = document.querySelector('#nameInput');
const whatsappInput = document.querySelector('#whatsappInput');
const buttonSubmit = document.querySelector('#buttonSubmit');
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
callFirtsButton.addEventListener('click', goToFormOnClick);
buttonSubmit.addEventListener('click', handleButtonSubmit);
whatsappInput.addEventListener('input', phoneFormatter);
nameInput.addEventListener('input', justLetter);
(target.length > 0) && window.addEventListener('scroll', debounce(() => scrollActions.animeScroll(), 100));

const scrollActions = {
  getScrollPositionElement(element) {
    return element.getBoundingClientRect().y;
  },
  scrollToPosition(to) {
    window.scroll({
      top: to,
      behavior: "smooth"
    })
  },
  animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(element => {
      if (windowTop > scrollActions.getScrollPositionElement(element))
        element.classList.add('animate');
      else
        element.classList.remove('animate');
    })
  }
}

const masks = {
  phone(value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  },
  name(value) {
    return value
      .replace(/^[0-9]$/, '')
  }
}

const validationForm = {
  validateName(name) {
    if (!name)
      return { message: 'Nome não informado', isValid: false };
    if (name.split(' ').length === 1)
      return { message: 'O sobrenome deve ser informado', isValid: false };
    else
      return { message: 'Sem erros', isValid: true }
  },
  validateWhatsapp(whatsapp) {
    if (!whatsapp)
      return { message: 'Whatsapp não informado', isValid: false };
    if (whatsapp.length < 15)
      return { message: 'Whatsapp incompleto', isValid: false };
    else
      return { message: 'Sem erros', isValid: true }
  }
}

function handleButtonToggle() {
  html.classList.toggle('dark');
}

function goToFormOnClick() {
  const position = scrollActions.getScrollPositionElement(nameInput);

  scrollActions.scrollToPosition(position);

  setTimeout(() => {
    nameInput.focus();
  }, 500)
}

function phoneFormatter({ target }) {
  target.value = masks.phone(target.value);
}

function justLetter({ target }) {
  target.value = masks.name(target.value);
}

function executeNotifications(message, color, duration) {
  Toastify({
    text: message,
    backgroundColor: color,
    gravity: 'bottom',
    position: 'center',
    duration,
  }).showToast();
}

function handleButtonSubmit(event) {
  event.preventDefault();

  const resultNameValidate = validationForm.validateName(nameInput.value);
  const resultWhatsappValidate = validationForm.validateWhatsapp(whatsappInput.value);

  if (!resultNameValidate.isValid) {
    executeNotifications(resultNameValidate.message, '#EE5253', 2000);
    nameInput.focus();
  } else if (!resultWhatsappValidate.isValid) {
    executeNotifications(resultWhatsappValidate.message, '#EE5253', 2000);
    whatsappInput.focus();
  } else {
    nameInput.value = '';
    whatsappInput.value = '';
    executeNotifications('Seus dados foram salvos!, em breve entraremos em contato', '#10AC84', 4000);
  }
}


function changeLanguage({ target }) {

}


scrollActions.animeScroll();