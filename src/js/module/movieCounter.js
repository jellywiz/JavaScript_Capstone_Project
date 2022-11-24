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
    const count = document.querySelectorAll('.movie-container');
    count.forEach(() => {
      this.items = this.addItems();
    });
    return count.length;
  }

  setItems() {
    document.querySelector('#moviecount').innerHTML = `Movies (${this.items})`;
  }
}