import './styles.scss';

import { test } from './test';

// eslint-disable-next-line no-undef
alert('Буду невероятно признателен, если сможете проверить работу под конец Кросс-чека)');

test();
// console.log('Hi');
const json = require('./key.json');
const body = document.querySelector('body');
const container = document.createElement('div');
const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const row = document.createElement('div');
const description = document.createElement('p');
const language = document.createElement('p');

console.log(json['row-1']);

const createButton = (data) => {
  const button = document.createElement('div');
  const rus = document.createElement('span');
  const eng = document.createElement('span');

  button.classList.add('keyboard__key', 'key', `${data}`);
  rus.classList.add('rus');
  eng.classList.add('eng');
};
createButton();

container.classList.add('container');
title.classList.add('title');
description.classList.add('description');
language.classList.add('language');
textarea.classList.add('textarea', 'body__textarea');
keyboard.classList.add('keyboard', 'body__keyboard');
row.classList.add('keyboard__row', 'row');

title.textContent = 'RSS Виртуальная клавиатура';
description.textContent = 'Клавиатура создана в операционной системе Windows';
language.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';

keyboard.append(row);
container.append(title, textarea, keyboard, description, language);

body.append(container);
