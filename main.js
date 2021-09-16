
var $car = document.querySelector('.car');

var data = {
  direction: 'east',
  location: {
    x: $car.style.left,
    y: $car.style.top
  }
};

document.addEventListener('keydown', onArrowKeyClicks);

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
  } else if (event.code === 'ArrowLeft') {
    $car.className = 'car face-west';
    data.direction = 'west';
  }
}

function moveCarRight() {
  var leftVal = parseInt($car.style.left);
  leftVal += 5;
  $car.style.left = leftVal + 'px';
  data.location.x = $car.style.left;
  data.location.y = $car.sytle.top;
}

function startCar(event) {
  if (event.code !== 'Space') {
    return;
  }
  setInterval(moveCarRight, 16);
}

document.addEventListener('keydown', startCar);
