export default class MovieApi {
  // return all movies
  static async fetchallmovies() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const data = await response.json();
    return data;
  }

  static async fetchmovie(number) {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const data = await response.json();
    const movie = data[number];
    return movie;
  }

  static async fetchlimitedmovies(number) {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const data = await response.json();
    return data.slice(0, number);
  }

  static async fetchperson(id) {
    const response = await fetch(`https://ghibliapi.herokuapp.com/people/${id}`);
    const data = await response.json();
    return data;
  }

  static async fetchpeople() {
    const response = await fetch('https://ghibliapi.herokuapp.com/people');
    const data = await response.json();
    return data;
  }
}