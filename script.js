const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if(personalMoviesDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if(personalMoviesDB.count < 30) {
    alert('Вы классический зритель');
} else if(personalMoviesDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

for(let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''); 
    const b = +prompt('На сколько оцените его?', '');
    
    if(a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMoviesDB.movies[a] = b;
        console.log('done');
    } else {
        i--;
        console.log('error');
    }
}
console.log(personalMoviesDB);
