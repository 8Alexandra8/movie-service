import './index.scss';

const Input = onInput => {
    const render = () => {
        const input = document.createElement('input');
        input.classList.add('input');
        input.oninput = () => onInput(input.value);
        return input;
    }
    return render();
}

export default Input;
