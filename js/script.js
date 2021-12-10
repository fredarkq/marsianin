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
    promoItem = document.querySelector('.promo__interactive-list'),
    addingInput = document.querySelector('.adding__input'),
    formAdd = document.querySelector('.add'),
    inputButton = formAdd.lastElementChild,
    deleteBtn = document.querySelectorAll('.button'),
    qwe = promoItem.children,
    www = document.querySelectorAll('.promo__interactive-item'),
    favoriteFilm = document.querySelector('#check');



const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};



const makeChanges = () => {
    promoGenre.textContent = 'Drama';
    promoBG.style.backgroundImage = 'url("img/bg.jpg")';
};


const sortArr = (arr) => {
    arr.sort();
};


inputButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (addingInput.value) {
        movieDB.movies[movieDB.movies.length] = addingInput.value;
        if (favoriteFilm.checked) {
            alert('new fav film');
        }
        promoItem.innerHTML = "";
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, promoItem);
    }

    formAdd.reset();
});



function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((item, i) => {
        if (item.length > 21) {
            promoItem.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${item.substring(1, 22)}...
            <div class="delete"></div>
        </li>`;
        } else {
            promoItem.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${item}
            <div class="delete"></div>
        </li>`;
        }
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(movieDB.movies, promoItem);
        });
    });
}

deleteAdv(promoAdv);
makeChanges();
createMovieList(movieDB.movies, promoItem);

console.log(deleteBtn);
console.log(promoItem);
console.log(qwe);
console.log(www);

// for (let i = 0; i < deleteBtn.length; i++) {
//     deleteBtn[i].onclick = function () {
//         console.log('11');
//     };
// }


// www.lastElementChild.forEach(qwepp => {
//     qwepp.addEventListener('click', (e) => {
//         console.log('1');
//     });
// });

// for (let qwepp in qwe) {
//         qwepp = qwe.lastElementChild;
//         qwepp.addEventListener('click',(e) => {
//                     console.log('1');
//                 });
//     }



// deleteBtn[0].onclick = function() {
//     console.log('sdada');
// };

// const deleteCommand = (e) => {
//     console.log(e.currentTarget);
//     console.log(e.type);
// };

// deleteBtn[1].addEventListener('click', (event) => {
//     alert('asdasd');
// });
// deleteBtn.forEach(delBtn => {
//     delBtn.addEventListener('click',(e) => {
//         console.log(e.currentTarget);
//         console.log(e.type);
//     });
// });
// console.log(promoItem);

// for (let elementsItems in promoItem) {
//     lastElementChild.addEventListener('click',(e) => {
//                 console.log(e.currentTarget);
//                 console.log(e.type);
//             });
// }

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