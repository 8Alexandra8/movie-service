import './index.scss'
import { onNavigate } from "../../route";
import MovieInfo from "../../components/MovieInfo";
import MovieForm from "../../components/MovieForm";

const Movie = (id, { movieInfo }) => {
    const render = () => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movieContainer');
        const movie = document.createElement('div');
        movie.classList.add('movie');
        const title = document.createElement('div');
        title.classList.add('movie__title');
        const h1 = document.createElement('h1');
        h1.innerText = id && id !== 'new' ? `${movieInfo.name}` : 'Добавить новый фильм';
        title.appendChild(h1);
        movie.appendChild(title);
        if (id && id !== 'new') {
            const info = MovieInfo(movieInfo);
            movie.appendChild(info);
        } else {
            const form = MovieForm();
            movie.appendChild(form);
        }
        const backButtonContainer = document.createElement('div');
        backButtonContainer.classList.add('movie__back');
        const button = document.createElement('button');
        button.onclick = () => onNavigate('/');
        button.innerText = 'Вернуться к списку фильмов';
        backButtonContainer.appendChild(button);
        movie.appendChild(backButtonContainer);
        movieContainer.appendChild(movie);
        return movieContainer;
    }
    return render();
}

export default Movie;
