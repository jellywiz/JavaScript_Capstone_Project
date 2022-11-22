import movieApi from './movieApi.js';
import { imageContainer } from './elements.js';

export default async function displayImage(number) {
  const data = await movieApi.fetchallmovies();
  imageContainer.innerHTML += `<img src="${data[number].image}" />`;
}