export const displayImage = (number, section) => {
  fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => response.json())
    .then((data) => {
      const imageContainer = document.querySelector('.container-image');
      imageContainer.innerHTML += `<img src="${data[number + 1][section]}" />`;
    });
};
// eslint-disable-next-line import/prefer-default-export
export const Displaymovies = (number) => {
  fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < number; i += 1) {
        const listContainer = document.querySelector('.main-films');
        const hour = Math.floor((data[i].running_time / 60));
        const minutes = (data[i].running_time % 60);
        listContainer.innerHTML += `<div class="movie-container">
            <img class="movie-image" src="${data[i].image}" alt="${data[i].title}">
              <div class="movie-info">
                <h3>${data[i].title}</h3>
                <p><b>Relase Date:</b> ${data[i].release_date}</p>
                <p><b>Duration:</b> ${hour}h ${minutes} min</p>
              </div>
              <div class="movie-buttons">
                <button class="like-button">Like</button>
                <button class="comment-button">Comment</button>
              </div>
            </div>`;
      }
    });
};