import ItemCounter from './module/movieCounter.js';
import InvolvementAPI from './API/InvolmentApi.js';
import MovieApi from './API/movieApi.js';
import CommentsCounter from './module/counterComment.js';

const counter = new ItemCounter();
const involvement = new InvolvementAPI();
const movieApi = new MovieApi();
const commentCounter = new CommentsCounter();

export {
  counter,
  commentCounter,
  involvement,
  movieApi,
};