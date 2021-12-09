import imgSun from '../assets/sun.webp';
import imgMoon from '../assets/moon.webp';

//element
const buttonChangeTheme = document.querySelector('#themeSelect button');
const imageChangeTheme = document.querySelector('#themeSelect img');
const html = document.querySelector('html')

//events
buttonChangeTheme.addEventListener('click', handleClickChangeThemeButton);

const configThemeImage = {
  default: {
    src: imgSun,
    attr: 'default',
    alt: 'default'
  },
  dark: {
    src: imgMoon,
    attr: 'dark',
    alt: 'dark'
  },
}

const changeTheme = {
  registerLocalStorage(mode) {
    window.localStorage.setItem('@meufreela/theme', mode);
  },
  changeImage(mode) {
    const { src, attr, alt } = configThemeImage[mode];

    imageChangeTheme.setAttribute('src', src);
    buttonChangeTheme.setAttribute('mode', attr);
    imageChangeTheme.setAttribute('alt', alt);
  },
  changeTheme() {
    html.classList.toggle('dark');
  },
  execute(mode) {
    this.registerLocalStorage(mode);
    this.changeImage(mode);
    this.changeTheme();
  }
}

function handleClickChangeThemeButton() {
  const mode = buttonChangeTheme.getAttribute('mode') === 'default' ? 'dark' : 'default';

  changeTheme.execute(mode);
}

function initTheme() {
  const themeLocal = window.localStorage.getItem('@meufreela/theme');

  themeLocal === 'dark' && changeTheme.execute('dark');
}

initTheme();