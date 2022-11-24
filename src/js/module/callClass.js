import ItemCounter from './movieCounter.js';
import InvolvementAPI from './InvolmentApi.js';
import MovieApi from './movieApi.js';

const counter = new ItemCounter();
const involvement = new InvolvementAPI();
const movieApi = new MovieApi();

export {
  counter,
  involvement,
  movieApi,
};