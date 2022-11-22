import movieApi from './movieApi.js';
import { modalBg, modalContainer, body } from './elements.js';

export const hideModal = () => {
  modalBg.style.display = 'none';
  modalContainer.style.display = 'none';
  body.style.overflow = 'auto';
};

export async function displayModal(number) {
  modalBg.style.display = 'flex';
  modalContainer.style.display = 'flex';
  body.style.overflow = 'hidden';
  const data = await movieApi.fetchmovie(number);
  modalContainer.innerHTML = `
  <button data-close-button class="close-button">&times;</button>
    <img src="${data.image}"/>
    <div class="information">
      <div class="left">
      <p class="indicator">Title: <span>${data.title}</span></p>
      <p class="indicator">Raiting score: <span>${data.rt_score}</span></p>
      </div>
      <div class="right">
      <p class="indicator">Release date: <span>${data.release_date}</span></p>
      <p class="indicator">Director: <span>${data.director}</span></p>
      
      </div>
    </div>
    <p class="description indicator">Description: <span>${data.description}</span></p>
    <form>
          <input type="text" id="name" placeholder="Your name">
          <input type="text" id="comment" placeholder="Comment">
          <button type="submit" id="submit">Submit</button>
        </form>
    `;

  modalBg.addEventListener('click', (e) => {
    const { target } = e;
    if (target.classList.contains('modal-bg') || target.classList.contains('close-button')) {
      hideModal();
    }
  });
}

export default displayModal;