export const dateFormat = date => {
    const d = new Date(date);
    const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    return `${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`
}

export const getRandom = () =>
    String(
        Math.random()
            .toString(36)
            .replace(/[.\d]/g, '')
    );
