import ItemCounter from './movieCounter.js';
import InvolvementAPI from './InvolmentApi.js';
import MovieApi from './movieApi.js';
import CommentsCounter from './counterComment.js';

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