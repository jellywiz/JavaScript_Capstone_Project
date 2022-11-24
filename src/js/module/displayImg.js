import MovieApi from './movieApi.js';
import { imageContainer } from './elements.js';

export default async function displayImage(number) {
  const data = await MovieApi.fetchallmovies();
}