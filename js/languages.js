//elements
const buttonLangSelect = document.querySelector('[language]');
const imageButtonLanguageSelect = document.querySelector('#imageButtonLanguageSelect');

const allTexts = document.querySelectorAll('[data-text]');

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

//eventos
buttonLangSelect.addEventListener('click', changeLanguage);

//conteudos
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

function changeLanguage() {
  let language = buttonLangSelect.getAttribute('language');

  //change Button
  if (language === 'portuguese') {
    imageButtonLanguageSelect.setAttribute('src', './assets/eua.webp');
    buttonLangSelect.setAttribute('language', 'english');

    language = buttonLangSelect.getAttribute('language');
  } else {
    imageButtonLanguageSelect.setAttribute('src', './assets/brazil.webp');
    buttonLangSelect.setAttribute('language', 'portuguese');

    language = buttonLangSelect.getAttribute('language');
  }

  //change language
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

}