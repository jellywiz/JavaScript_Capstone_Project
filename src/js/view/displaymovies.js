import movieApi from '../API/movieApi.js';
import { listContainer } from '../elements.js';
import { counter } from '../callClass.js';

export default async function displayMovies(number) {
  const data = await movieApi.fetchallmovies();

  for (let i = 0; i < number; i += 1) {
    const hour = Math.floor((data[i].running_time / 60));
    const minutes = (data[i].running_time % 60);
    listContainer.innerHTML += `<div class="movie-container">
      <img class="movie-image" src="${data[i].image}" alt="${data[i].title}" data-index-number=${i}>
        <div class="movie-info">
          <h3 class="movie-title">${data[i].title}</h3>
          <p>${data[i].release_date}</p>
          <p>${hour}h ${minutes} min</p>
        </div>
        <div class="movie-buttons">
          <button class="like-button" data-index-number="${i}">Give a thumbs up</button>
          <button class="comment-button" data-index-number="${i}">Comment</button>
        </div>
      </div>`;
  }
  counter.getItems();
  counter.setItems();
}