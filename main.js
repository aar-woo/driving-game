
var $car = document.querySelector('.car');

var data = {
  direction: 'east',
  location: {
    x: $car.style.left,
    y: $car.style.top
  },
  carStarted: false
};

document.addEventListener('keydown', onKeyClicks);
var carStartedId = null;

function onKeyClicks(event) {
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
  } else if (event.code === 'Space') {
    if (data.carStarted === true) {
      clearInterval(carStartedId);
      data.carStarted = false;
    } else {
      carStartedId = setInterval(moveCarRight, 16);
      data.carStarted = true;
    }
  }
}

function moveCarRight() {
  var leftVal = parseInt($car.style.left);
  leftVal += 5;
  $car.style.left = leftVal + 'px';
  data.location.x = $car.style.left;
  data.location.y = $car.sytle.top;
}
