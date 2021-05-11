import './index.scss'
import { onNavigate } from "../../route";

const MovieCard = movie => {
    const movieCardAvatar = () => {
        const div = document.createElement('div');
        div.classList.add('movieCard__avatar');
        const img = document.createElement('img');
        img.src = `/images/${movie.image}` || '';
        img.alt = movie.name || '';
        div.appendChild(img);
        return div;
    }
    const movieCardContent = () => {
        const div = document.createElement('div');
        div.classList.add('movieCard-content');
        div.appendChild(movieCardContentHeader());
        div.appendChild(movieCardContentInfo());
        return div;
    }
    const movieCardContentHeader = () => {
        const div = document.createElement('div');
        div.classList.add('movieCard-content__header');
        const h3 = document.createElement('h3');
        h3.innerText = movie.name || '';
        div.appendChild(h3)
        const p = document.createElement('p');
        p.innerText = `${movie.ageRating}+` || '';
        div.appendChild(p)
        return div;
    }
    const movieCardContentInfo = () => {
        const div = document.createElement('div');
        div.classList.add('movieCard-content__info');
        div.appendChild(movieCardContentInfoSection('Режиссер', movie.director));
        div.appendChild(movieCardContentInfoSection('Продолжительность', `${movie.duration} мин`));
        div.appendChild(movieCardContentInfoSection('Бюджет', `${movie.budget}$`));
        return div;
    }
    const movieCardContentInfoSection = (name, value) => {
        const div = document.createElement('div');
        div.classList.add('movieCard-content__info-section');
        const label = document.createElement('label');
        label.innerText = name || '';
        div.appendChild(label)
        const span = document.createElement('span');
        span.innerText = value || '';
        div.appendChild(span)
        return div;
    }
    const render = () => {
        const div = document.createElement('div');
        div.classList.add('movieCard');
        const a = document.createElement('a');
        a.onclick = e => {
            if (!e.target.classList.contains('movieCard__remove-movie')) {
                onNavigate(`/movie/${movie.id}`, { movieInfo: movie });
            }
        };
        a.appendChild(movieCardAvatar());
        a.appendChild(movieCardContent());
        div.appendChild(a);
        return div;
    }
    return render();
}

export default MovieCard;
