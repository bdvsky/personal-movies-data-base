const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastViewed = prompt('Один из последних просмотренных фильмов?', '');
const rate = +prompt('На сколько оцените его?', '');
personalMoviesDB.movies[lastViewed] = rate;
console.log(personalMoviesDB);