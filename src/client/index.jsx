//первое что делаем, это импортируем React и ReactDOM
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '../App';

//ВАЖНАЯ ЧАСТЬ:так как в последствии мы будем добавлять сюда SSR
//нам необходимо сделать так чтобы эта часть кода срабатывала только в браузере
// поэтому сделаем событие на загрузку страницы. Когда страница загрузится, то зарендерим наше приложение
window.addEventListener('load', () => {
    //делаем следующую конструкцию ReactDOM.render(). 
    //render({компанент с которого начинается приложение}, {элемент из itml верстки в которую будет монтироваться все что мы написали на React})
    ReactDOM.hydrate(<App />, document.getElementById('react_root'));
});
///теперь создадим файл webpack.config.js
