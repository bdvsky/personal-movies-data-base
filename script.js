let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMoviesDB);
    }
}

showMyDB(personalMoviesDB.privat);

function writeYourGenres() {
    for(let i = 1; i < 4; i++ ) {
        personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''); 
        const b = +prompt('На сколько оцените его?', '');
        
        if(a != null && b != null && a != '' && b != '' && a.length < 50 ) {
            personalMoviesDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if(personalMoviesDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if(personalMoviesDB.count < 30) {
        alert('Вы классический зритель');
    } else if(personalMoviesDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

// detectPersonalLevel();