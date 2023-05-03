import './styles.scss';

import { test } from './test';

test();

const body = document.querySelector('body');

const container = document.createElement('div');
const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const description = document.createElement('p');
const language = document.createElement('p');

async function getJson () {
  const url = 'https://raw.githubusercontent.com/dvobabsi/stage0-tasks/assets/json/key.json';
  const res = await fetch(url);
  const data = await res.json();
  createButton(data);
}

const createButton = (data) => {
  const keys = data;
  // eslint-disable-next-line no-undef
  for (const rowElem in keys) {
    const rowButtons = keys[rowElem];
    const row = document.createElement('div');

    row.classList.add(rowElem, 'row');
    keyboard.append(row);
    // eslint-disable-next-line no-undef
    for (const key in rowButtons) {
      const textRus = rowButtons[key].rus;
      const textEng = rowButtons[key].eng;
      const button = document.createElement('div');
      const rus = document.createElement('span');
      const eng = document.createElement('span');

      const capsRus = document.createElement('span');
      const caseDownRus = document.createElement('span');
      const caseUpRus = document.createElement('span');
      const shiftCapsRus = document.createElement('span');
      const capsEng = document.createElement('span');
      const caseDownEng = document.createElement('span');
      const caseUpEng = document.createElement('span');
      const shiftCapsEng = document.createElement('span');

      button.classList.add('keyboard__key', 'key', key);
      rus.classList.add('rus');
      eng.classList.add('eng');

      capsRus.classList.add('caps', 'hidden');
      caseDownRus.classList.add('caseDown');
      caseUpRus.classList.add('caseUp', 'hidden');
      shiftCapsRus.classList.add('shiftCaps', 'hidden');
      capsEng.classList.add('caps', 'hidden');
      caseDownEng.classList.add('caseDown', 'hidden');
      caseUpEng.classList.add('caseUp', 'hidden');
      shiftCapsEng.classList.add('shiftCaps', 'hidden');

      capsRus.textContent = textRus.caps;
      caseDownRus.textContent = textRus.caseDown;
      caseUpRus.textContent = textRus.caseUp;
      shiftCapsRus.textContent = textRus.shiftCaps;
      capsEng.textContent = textEng.caps;
      caseDownEng.textContent = textEng.caseDown;
      caseUpEng.textContent = textEng.caseUp;
      shiftCapsEng.textContent = textEng.shiftCaps;

      rus.append(capsRus, caseDownRus, caseUpRus, shiftCapsRus);
      eng.append(capsEng, caseDownEng, caseUpEng, shiftCapsEng);

      button.append(rus, eng);
      row.append(button);
    }
  }
};

window.addEventListener('load', getJson);

container.classList.add('container');
title.classList.add('title');
description.classList.add('description');
language.classList.add('language');
textarea.classList.add('textarea', 'body__textarea');
keyboard.classList.add('keyboard', 'body__keyboard');

title.textContent = 'RSS Виртуальная клавиатура';
description.textContent = 'Клавиатура создана в операционной системе Windows';
language.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';

container.append(title, textarea, keyboard, description, language);

body.append(container);

keyboard.addEventListener('click', function (el) {
  console.log(el.target);
});

document.addEventListener('keydown', function (event) {
  if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    console.log(event.code);
  }
});

document.querySelector('textarea').onkeypress = function (event) {
  console.log('charCode: ' + event.charCode);
  console.log('code:' + event.code);
  console.log('key:' + event.key);
  console.log('keyCode:' + event.keyCode);
  console.log(event);
  console.log(event);
  console.log(event);
};
