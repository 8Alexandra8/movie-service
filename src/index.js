import './scss/index.scss';
import { routes } from "./route";

const rootDiv = document.getElementById('root');
const pathname = window.location.pathname;
rootDiv.appendChild(routes[pathname]());
