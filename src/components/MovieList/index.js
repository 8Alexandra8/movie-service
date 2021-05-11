import MovieCard from "../MovieCard";
import { movies } from "../../resources/initialValue";

import './index.scss'

let moviesState = movies;

document.addEventListener('remove-movie', e => {
    const { id } = e.detail;
    moviesState = moviesState.filter(ms => ms.id !== id);
})
document.addEventListener('add-movie', e => {
    const { newMovie } = e.detail;
    moviesState.push(newMovie);
})

const MovieList = () => {
    const render = () => {
        const container = document.createElement('div');
        container.classList.add('moviesListContainer')
        const div = document.createElement('div');
        div.classList.add('moviesList')
        moviesState.forEach(el => {
            div.appendChild(MovieCard(el))
        })
        container.appendChild(div)
        return container;
    }
    return render();
}

export default MovieList;
