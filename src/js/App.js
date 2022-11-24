import '../style.css';
import displayImage from './module/displayImg.js';
import displayMovies from './module/displaymovies.js';
import addLikes from './module/addLikes.js';
import renderLikes from './module/likesRender.js';
import { displayModal } from './module/displayModal.js';

const moviesContainer = document.querySelector('.main-films');

async function render() {
  document.onload = await displayImage(0);
  document.onload = await displayMovies(12);
  document.onload = await renderLikes();
  document.onload = await addLikes();
  moviesContainer.addEventListener('click', (e) => {
    const { target } = e;
    if (target.matches('.movie-image') || target.matches('.comment-button')) {
      displayModal(target.getAttribute('data-index-number'));
    }
  });
}

render();

// document.onload = displayImage(0);
// document.onload = displayMovies(12);

// moviesContainer.addEventListener('click', (e) => {
//   const { target } = e;
//   if (target.matches('.movie-image')) {
//     displayModal(target.getAttribute('data-index-number'));
//   }
// });
// uTwt6FRnbbTssMmx6qrV

// const fetchAPI = () => {
//   fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//     method: 'POST',
//     body: JSON.stringify({
//       name: 'My cool new game',
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.text())
//     .then((json) => console.log(json));
// };

// fetchAPI();
