const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }
];

const addMovie = (collection, movie) => {
    collection.push(movie);
};

addMovie(movies, { title: "Tenet", genre: "Sci-Fi", rating: 7.5, releaseYear: 2020 });

const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};

const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};

const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};

const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};

// Dynamically add movies to the DOM
const renderMovies = (movies, container) => {
    const containerElement = document.querySelector(container);
    containerElement.innerHTML = movies.map(movie => `
        <div class="movie-card">
            <h3>${movie.title}</h3>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Rating:</strong> ${movie.rating}</p>
            <p><strong>Release Year:</strong> ${movie.releaseYear}</p>
        </div>
    `).join('');
};

// Render all movies
renderMovies(movies, '#movies-list .movies-container');

// Render Sci-Fi movies
const sciFiMovies = listMoviesByGenre(movies, "Sci-Fi");
renderMovies(sciFiMovies, '#filtered-movies .movies-container');

// Render highest-rated movie
const highestRatedMovie = findHighestRatedMovie(movies);
document.querySelector('#highest-rated .movie-highlight').innerHTML = `
    <h3>${highestRatedMovie.title}</h3>
    <p><strong>Genre:</strong> ${highestRatedMovie.genre}</p>
    <p><strong>Rating:</strong> ${highestRatedMovie.rating}</p>
    <p><strong>Release Year:</strong> ${highestRatedMovie.releaseYear}</p>
`;

// Render movie titles
const movieTitles = getMovieTitles(movies);
document.querySelector('#titles .titles-list').innerHTML = movieTitles.map(title => `
    <li>${title}</li>
`).join('');

// Render movies after 2010
const recentMovies = moviesAfterYear(movies, 2010);
renderMovies(recentMovies, '#recent-movies .movies-container');
