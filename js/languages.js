import imgBrazil from '../assets/brazil.webp';
import imgEua from '../assets/eua.webp';

//elements
const buttonChangeLanguage = document.querySelector('[language]');
const imageButtonLanguageSelect = document.querySelector('#imageButtonLanguageSelect');
const apresentationTitle = document.querySelector('[data-text="apresentationTitle"]');
const apresentationSubtitle = document.querySelector('[data-text="apresentationSubtitle"]');
const apresentationButton = document.querySelector('[data-text="apresentationButton"]');
const aboutUsTitle = document.querySelector('[data-text="aboutUsTitle"]');
const aboutUsText = document.querySelector('[data-text="aboutUsText"]');
const callTitle = document.querySelector('[data-text="callTitle"]');
const callSubtitle = document.querySelector('[data-text="callSubtitle"]');
const callButton = document.querySelector('[data-text="callButton"]')
const labelName = document.querySelector('[data-text="labelName"]');
const footerTextTop = document.querySelector('[data-text="footerTextTop"]');
const footerTextBottom = document.querySelector('[data-text="footerTextBottom"]');

//events
buttonChangeLanguage.addEventListener('click', handleClickButtonChangeLanguage);

//contents
const languagesData = {
  "english": {
    "apresentationTitle": "Your project ready at the speed of light",
    "apresentationSubtitle": "Developers ready for action",
    "apresentationButton": "Ask for a meeting",
    "aboutUsTitle": "Our initiative",
    "aboutUsText": "We are developers who are dedicated to making perfect projects and delivering value to all our customers. We like to see customers satisfied with projects made with care, attention and the highest quality.",
    "callTitle": "Say hi, we'll call you!",
    "callSubtitle": "Fill in your details so we can call you.",
    "labelName": "Full Name",
    "callButton": "Ask for a meeting",
    "footerTextTop": "Challenge 1 - front-end beginner",
    "footerTextBottom": "Initiative"
  },
  "portuguese": {
    "apresentationTitle": "Seu projeto pronto na velocidade da luz",
    "apresentationSubtitle": "Desenvolvedores prontos para ação",
    "apresentationButton": "Peça uma reunião",
    "aboutUsTitle": "Nossa iniciativa",
    "aboutUsText": "Somos desenvolvedores que se dedicam a fazer projetos perfeitos e entregar valor para todos os seus clientes. Gostamos de ver clientes satisfeitos com projetos feitos com carinho, atenção e qualidade altíssima.",
    "callTitle": "Mande um oi, ligamos para você!",
    "callSubtitle": "Preencha seus dados para que a gente possa entrar em contato.",
    "callButton": "Peça uma reunião",
    "labelName": "Nome Completo",
    "footerTextTop": "Desafio 1 - front-end iniciante",
    "footerTextBottom": "Iniciativa"
  }
}

const configButton = {
  portuguese: {
    src: imgBrazil,
    attr: 'portuguese',
    alt: 'português'
  },
  english: {
    src: imgEua,
    attr: 'english',
    alt: 'english'
  },
}

const changeLanguage = {
  registerLocalStorage(language) {
    window.localStorage.setItem('@meufreela/language', language);
  },
  changeImageButton(language) {
    const { src, attr, alt } = configButton[language];

    imageButtonLanguageSelect.setAttribute('src', src);
    imageButtonLanguageSelect.setAttribute('alt', alt);
    buttonChangeLanguage.setAttribute('language', attr);
  },
  changeContentText(language) {
    apresentationTitle.innerHTML = languagesData[language].apresentationTitle;
    apresentationSubtitle.innerHTML = languagesData[language].apresentationSubtitle;
    apresentationButton.innerHTML = languagesData[language].apresentationButton;
    aboutUsTitle.innerHTML = languagesData[language].aboutUsTitle;
    aboutUsText.innerHTML = languagesData[language].aboutUsText;
    callTitle.innerHTML = languagesData[language].callTitle;
    callSubtitle.innerHTML = languagesData[language].callSubtitle;
    callButton.innerHTML = languagesData[language].callButton;
    labelName.innerHTML = languagesData[language].labelName;
    footerTextTop.innerHTML = languagesData[language].footerTextTop;
    footerTextBottom.innerHTML = languagesData[language].footerTextBottom;
  },
  execute(langCurrent) {
    this.changeImageButton(langCurrent);
    this.registerLocalStorage(langCurrent);
    this.changeContentText(langCurrent);
  }
}

function handleClickButtonChangeLanguage() {
  const langPrev = buttonChangeLanguage.getAttribute('language');
  const langCurrent = langPrev === 'portuguese' ? 'english' : 'portuguese';

  changeLanguage.execute(langCurrent);
}

// pegar dados do localstorage
function initLanguageLocal() {
  const localData = window.localStorage.getItem('@meufreela/language');
  localData && changeLanguage.execute(localData);
}

initLanguageLocal();