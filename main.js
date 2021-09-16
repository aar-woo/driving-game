var data = {
  direction: 'east'
};

document.addEventListener('keydown', onArrowKeyClicks);
var $car = document.querySelector('.car');

function onArrowKeyClicks(event) {
  if (event.code === 'ArrowUp') {
    $car.className = 'car face-north';
    data.direction = 'north';
  } else if (event.code === 'ArrowDown') {
    $car.className = 'car face-south';
    data.direction = 'south';
  } else if (event.code === 'ArrowRight') {
    $car.className = 'car face-east';
    data.direction = 'east';
  } else {
    $car.className = 'car face-west';
    data.direction = 'west';
  }
}
