
var $car = document.querySelector('.car');

var data = {
  direction: 'east',
  location: {
    x: $car.style.left,
    y: $car.style.top
  },
  carStarted: false,
  obstacleLocations: []
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
      carStartedId = setInterval(driveCar, 16);
      data.carStarted = true;
    }
  }
}

function driveCar() {
  if (data.direction === 'east' || data.direction === 'west') {
    var leftVal = parseInt($car.style.left);
    if (data.direction === 'east') {
      leftVal += 1;
    } else {
      leftVal -= 1;
    }
    $car.style.left = leftVal + 'px';
  } else {
    var topVal = parseInt($car.style.top);
    if (data.direction === 'south') {
      topVal += 1;
    } else {
      topVal -= 1;
    }
    $car.style.top = topVal + 'px';

  }
  data.location.x = $car.style.left;
  data.location.y = $car.style.top;

  const carRectLocation = $car.getBoundingClientRect();

  for (let i = 0; i < data.obstacleLocations.length; i++) {
    if (carRectLocation.x > data.obstacleLocations[i].xStart && carRectLocation.x < data.obstacleLocations[i].xEnd) {
      // console.log('car crash');
    }
  }
}

const $obstacles = document.querySelectorAll('.stump');

function getObstacleLocations() {
  for (let i = 0; i < $obstacles.length; i++) {
    const obstacleData = $obstacles[i].getBoundingClientRect();
    const obstacleSpace = {
      xStart: obstacleData.x,
      xEnd: obstacleData.x + obstacleData.width,
      yStart: obstacleData.y,
      yEnd: obstacleData.y - obstacleData.height
    };
    data.obstacleLocations.push(obstacleSpace);
  }
}

window.addEventListener('load', getObstacleLocations);
