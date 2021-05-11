import Movies from "../pages/Movies";
import Movie from "../pages/Movie";

export const routes = {
    '/': Movies,
    '/movie': Movie
};

export const onNavigate = (pathname = '', state = {}) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    const rootDiv = document.getElementById('root');
    rootDiv.innerHTML = '';
    if (pathname.split('/')[1] === 'movie') {
        rootDiv.appendChild(routes['/movie'](pathname.split('/')[2], state));
    } else {
        rootDiv.appendChild(routes[pathname]());
    }
}
