import './index.scss'
import Input from "../Input";
import { onNavigate } from "../../route";
import { getRandom } from "../../lib/functions";

const MovieForm = () => {
    const formState = [
        {
            title: 'name',
            titleRu: 'Имя:',
            value: '',
        },
        {
            title: 'country',
            titleRu: 'Страна:',
            value: '',
        },
        {
            title: 'genre',
            titleRu: 'Жанр:',
            value: '',
        },
        {
            title: 'director',
            titleRu: 'Режиссер:',
            value: '',
        },
        {
            title: 'scenario',
            titleRu: 'Сценарий:',
            value: '',
        },
        {
            title: 'producer',
            titleRu: 'Продюсер:',
            value: '',
        },
        {
            title: 'operator',
            titleRu: 'Оператор:',
            value: '',
        },
        {
            title: 'composer',
            titleRu: 'Композитор:',
            value: '',
        },
        {
            title: 'budget',
            titleRu: 'Бюджет:',
            value: '',
        },
        {
            title: 'worldFees',
            titleRu: 'Мировые сборы:',
            value: '',
        },
        {
            title: 'ageRating',
            titleRu: 'Возрастное ограничение:',
            value: '',
        },
        {
            title: 'duration',
            titleRu: 'Продолжительность:',
            value: '',
        },
        {
            title: 'date',
            titleRu: 'Дата выхода (timestamp):',
            value: '',
        }
    ];

    const movieFormInputContainer = titleRu => {
        const div = document.createElement('div');
        div.classList.add('movie-form__input-container');
        const label = document.createElement('label');
        label.innerText = titleRu || '';
        div.appendChild(label);
        div.appendChild(Input(value => {
            formState.find(f => f.titleRu === titleRu).value = value;
        }));
        return div;
    }
    const render = () => {
        const movieForm = document.createElement('div');
        movieForm.classList.add('movie-form');

        formState.forEach(f => movieForm.appendChild(movieFormInputContainer(f.titleRu)));

        const div = document.createElement('div');
        div.classList.add('movie-form__input-file-container');
        const inputFile = document.createElement('input');
        inputFile.type = 'file';
        inputFile.id = 'file';
        div.appendChild(inputFile);
        const label = document.createElement('label');
        label.htmlFor = 'file';
        label.innerText = 'Загрузить файл';
        div.appendChild(label);
        movieForm.appendChild(div);


        inputFile.onchange = function() {
            if (this.files && this.files[0]) {
                const file = this.files[0];
                label.innerText = file.name;
            }
        }

        const submitButtonContainer = document.createElement('div');
        submitButtonContainer.classList.add('movie-form__submit-button');
        const button = document.createElement('button');
        button.onclick = () => {
            if (!formState.map(fs => fs.value).every(fs => fs)) {
                alert('Пожалуйста, заполните все поля!');
            } else {
                const newMovie = {
                    id: getRandom()
                };
                formState.forEach(fs => {
                    if (fs.title === 'date') {
                        newMovie[fs.title] = Number(fs.value);
                    } else {
                        newMovie[fs.title] = fs.value;
                    }
                })
                const event = new CustomEvent("add-movie", {
                    detail: { newMovie }
                });
                document.dispatchEvent(event);
                onNavigate('/');
            }
        };
        button.innerText = 'Добавить фильм';
        submitButtonContainer.appendChild(button);
        movieForm.appendChild(submitButtonContainer);

        return movieForm;
    }
    return render();
}

export default MovieForm;
