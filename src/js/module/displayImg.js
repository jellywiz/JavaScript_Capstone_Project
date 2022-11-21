const displayImage = (number, section) => {
  fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => response.json())
    .then((data) => {
      const imageContainer = document.querySelector('.container-image');
      imageContainer.innerHTML += `<img src="${data[number + 2][section]}" />`;
    });
};

export default displayImage;