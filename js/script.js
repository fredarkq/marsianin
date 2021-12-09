/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Лоasd",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoBG = document.querySelector('.promo__bg'),
      promoGenre = promoBG.querySelector('.promo__genre'),
      promoItem = document.querySelector('.promo__interactive-list');


promoAdv.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'Drama';

promoBG.style.backgroundImage = 'url("img/bg.jpg")';

promoItem.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach ((item, i) => {
    promoItem.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${item}
        <div class="delete"></div>
    </li>`;
});


// promoGenre[0].remove();
// const dramma = document.createElement('div');
// dramma.classList.add('promo__genre');
// dramma.insertAdjacentHTML('afterbegin', 'dramma');
// promoBG[0].prepend(dramma);

// const bgImage = document.getElementsByClassName('promo__bg');
// bgImage[0].style.cssText = 'background: url(../img/bg.jpg) center center/cover no-repeat;';

// const promoItem = document.querySelectorAll('.promo__interactive-list');

// for (let i = 0; i < promoItem.length; i++) {
//     promoItem[i] = movieDB.movies[i];
// }

// console.log(promoItem[0]);
// movieDB.forEach((item, i)  => {
//     promoItem[i+1] = movieDB.movies[i];
// });