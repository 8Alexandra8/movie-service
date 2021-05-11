import './index.scss'
import { dateFormat } from "../../lib/functions";
import { onNavigate } from "../../route";

const MovieInfo = info => {
    const movieInfoRow = (name, value) => {
        let title = '';
        let _value = value;
        switch (name) {
            case 'name':
                title = 'Название: ';
                break;
            case 'country':
                title = 'Страна: ';
                break;
            case 'genre':
                title = 'Жанр: ';
                break;
            case 'director':
                title = 'Режиссер: ';
                break;
            case 'scenario':
                title = 'Сценарий: ';
                break;
            case 'producer':
                title = 'Продюсер: ';
                break;
            case 'operator':
                title = 'Оператор: ';
                break;
            case 'composer':
                title = 'Композитор: ';
                break;
            case 'budget':
                title = 'Бюджет: ';
                _value = _value !== '-' ? `${_value}$` : _value;
                break;
            case 'worldFees':
                title = 'Мировые сборы: ';
                _value = _value !== '-' ? `${_value}$` : _value;
                break;
            case 'ageRating':
                title = 'Возраст: ';
                _value = `${_value}+`;
                break;
            case 'duration':
                title = 'Продолжительность: ';
                _value = `${_value} мин`;
                break;
            case 'date':
                title = 'Дата выхода: ';
                _value = `${dateFormat(_value)}`;
                break;
            default:
                break;
        }
        const div = document.createElement('div');
        div.classList.add('movie-info__row');
        const label = document.createElement('label');
        label.innerText = title || '';
        div.appendChild(label)
        const span = document.createElement('span');
        span.innerText = _value || '';
        div.appendChild(span)
        return div;
    }

    const render = () => {
        const movieInfo = document.createElement('div');
        movieInfo.classList.add('movie-info');

        for (let key in info) {
            if (key !== 'id' && key !== 'image') movieInfo.appendChild(movieInfoRow(key, info[key]))
        }

        const submitButtonContainer = document.createElement('div');
        submitButtonContainer.classList.add('movie-info__remove-button');
        const button = document.createElement('button');
        button.onclick = () => {
            const event = new CustomEvent("remove-movie", {
                detail: { id: info.id }
            });
            document.dispatchEvent(event);
            onNavigate('/');
        };
        button.innerText = 'Удалить фильм';
        submitButtonContainer.appendChild(button);
        movieInfo.appendChild(submitButtonContainer);

        return movieInfo;
    }
    return render();
}

export default MovieInfo;
