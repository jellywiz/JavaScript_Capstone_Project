import InvolvementAPI from '../API/InvolmentApi.js';

const api = new InvolvementAPI();

export default async function renderLikes() {
  const moviesContainer = document.querySelector('.main-films');
  moviesContainer.addEventListener('click', async (e) => {
    e.preventDefault();
    const { target } = e;
    const movieId = target.getAttribute('data-index-number');
    if (target.matches('.like-button')) {
      const likes = await api.getLikes();
      const likenum = likes.findIndex((item) => item.item_id === movieId);
      target.innerHTML = `Liked: ${likes[likenum].likes}`;
    }
  });
}