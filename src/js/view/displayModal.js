import MovieApi from '../API/movieApi.js';
import { involvement } from '../callClass.js';
import { modalBg, modalContainer, body } from '../elements.js';
import renderComments from '../module/commentRender.js';

export const hideModal = () => {
  modalBg.style.display = 'none';
  modalContainer.style.display = 'none';
  body.style.overflow = 'auto';
};

export async function displayModal(number) {
  modalBg.style.display = 'flex';
  modalContainer.style.display = 'flex';
  body.style.overflow = 'hidden';
  const data = await MovieApi.fetchmovie(number);
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
    <div class="comments">
    <h4 id"comments-header"></h4> 
    </div>
    <form>
          <input class="user-input" id="name" type="text" data-index-number="${number}" placeholder="Your name" required>
          <textarea class="message-input" id="comment" data-index-number="${number}" placeholder="Your comment" required></textarea>
          <button class="like-button" id="submit">Submit</button>
        </form>
    `;
  const userInput = document.querySelector('.user-input');
  const messageInput = document.querySelector('.message-input');
  const form = document.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await involvement.postComments(messageInput.value, userInput.value, `item${number}`);
    await renderComments(number);
    messageInput.value = '';
    userInput.value = '';
  });

  modalBg.addEventListener('click', (e) => {
    const { target } = e;
    if (target.classList.contains('modal-bg') || target.classList.contains('close-button')) {
      hideModal();
    }
  });
  await renderComments(number);
}

export default displayModal;