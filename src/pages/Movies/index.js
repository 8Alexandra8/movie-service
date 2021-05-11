import MovieList from "../../components/MovieList";
import './index.scss'
import { onNavigate } from "../../route";

const Movies = () => {
    const render = () => {
        const movies = document.createElement('div');
        movies.classList.add('movies');
        const moviesWrapper = document.createElement('div');
        moviesWrapper.classList.add('movies__wrapper');
        const containerHeader = document.createElement('div');
        containerHeader.classList.add('movies__header');
        const title = document.createElement('div');
        title.classList.add('movies__title');
        const h1 = document.createElement('h1');
        h1.innerText = 'Моя фильмотека';
        title.appendChild(h1);
        containerHeader.appendChild(title);
        const addMovieContainer = document.createElement('div');
        addMovieContainer.classList.add('movies__addMovie');
        const button = document.createElement('button');
        button.onclick = () => onNavigate('/movie/new');
        button.innerText = 'Добавить фильм';
        addMovieContainer.appendChild(button);
        containerHeader.appendChild(addMovieContainer);
        moviesWrapper.appendChild(containerHeader);
        moviesWrapper.appendChild(MovieList());
        movies.appendChild(moviesWrapper);
        return movies;
    }
    return render();
}

export default Movies;
