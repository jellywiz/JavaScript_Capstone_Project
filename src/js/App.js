import '../style.css';
import displayImage from './view/displayImg.js';
import displayMovies from './view/displaymovies.js';
import addLikes from './module/addLikes.js';
import renderLikes from './module/likesRender.js';
import { displayModal } from './view/displayModal.js';
// eslint-disable-next-line no-unused-vars
import logo from '../images/logo.png';

const moviesContainer = document.querySelector('.main-films');

async function render() {
  document.onload = await addLikes();
  document.onload = await displayImage(0);
  document.onload = await displayMovies(20);
  document.onload = await renderLikes();
  moviesContainer.addEventListener('click', (e) => {
    const { target } = e;
    if (target.matches('.movie-image') || target.matches('.comment-button')) {
      displayModal(target.getAttribute('data-index-number'));
    }
  });
}

render();
