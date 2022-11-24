import { counter } from './src/js/module/callClass.js';

document.body.innerHTML = '';

describe('items counter', () => {
  test('items counter should return 0 if the list has no Movies', () => {
    expect(counter.getItems()).toEqual(0);
  });
  test('Item counter should return the same number as the movies that are listed', () => {
    document.body.innerHTML = `
    <div>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
    </div>`;
    expect(counter.getItems()).toEqual(8);
    document.body.innerHTML = '';
  });
  test('Movie countet should update the header with the number of movies', () => {
    document.body.innerHTML = `
    <div>
      <button id="moviecount" >Movies</button>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
      <div class="movie-container"> Information about Movie </div>
    </div>`;
    counter.setItems();
    const movieCount = document.querySelector('#moviecount').innerHTML;
    const expected = 'Movies (8)';
    expect(movieCount).toEqual(expected);
  });
});