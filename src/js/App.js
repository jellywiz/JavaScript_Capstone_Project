import '../style.css';
import displayImage from './module/displayImg.js';
import displayMovies from './module/displaymovies.js';
import { displayModal } from './module/displayModal.js';

const moviesContainer = document.querySelector('.main-films');
document.onload = displayImage(0);
document.onload = displayMovies(12);

moviesContainer.addEventListener('click', (e) => {
  const { target } = e;
  if (target.matches('.movie-image')) {
    displayModal(target.getAttribute('data-index-number'));
  }
});
