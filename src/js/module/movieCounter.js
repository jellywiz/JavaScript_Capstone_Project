// This is a module that counts the number of movies in the database
export default class ItemCounter {
  constructor() {
    this.items = 0;
  }

  // this function adds the number of movies in the database
  addItems() {
    return this.items + 1;
  }

  // this function gets the number of movies in the database
  getItems() {
    document.querySelectorAll('.movie-container').forEach(() => {
      this.items = this.addItems();
    });
    document.querySelector('#moviecount').innerHTML = `Number of Movies (${this.items})`;
    return this.items;
  }
}