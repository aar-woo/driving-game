var data = {
  direction: 'east'
};

document.addEventListener('keydown', onArrowKeyClicks);
var $car = document.querySelector('.car');

function onArrowKeyClicks(event) {
  if (data.direction === 'east') {
    if (event.code === 'ArrowUp') {
      $car.className = 'car face-north';
      data.direction = 'north';
    } else if (event.code === 'ArrowDown') {
      $car.className = 'car face-south';
      data.direction = 'south';
    } else if (event.code === 'ArrowLeft') {
      $car.className = 'car face-west';
      data.direction = 'west';
    }
  } else if (data.direction === 'north') {
    if (event.code === 'ArrowDown') {
      $car.className = 'car face-south';
      data.direction = 'south';
    } else if (event.code === 'ArrowLeft') {
      $car.className = 'car face-west';
      data.direction = 'west';
    } else if (event.code === 'ArrowRight') {
      $car.className = 'car face-east';
      data.direction = 'east';
    }
  } else if (data.direction === 'south') {
    if (event.code === 'ArrowUp') {
      $car.className = 'car face-north';
      data.direction = 'north';
    } else if (event.code === 'ArrowLeft') {
      $car.className = 'car face-west';
      data.direction = 'west';
    } else if (event.code === 'ArrowRight') {
      $car.className = 'car face-east';
      data.direction = 'east';
    }
  } else if (data.direction === 'west') {
    if (event.code === 'ArrowUp') {
      $car.className = 'car face-north';
      data.direction = 'north';
    } else if (event.code === 'ArrowDown') {
      $car.className = 'car face-south';
      data.direction = 'south';
    } else if (event.code === 'ArrowRight') {
      $car.className = 'car face-east';
      data.direction = 'east';
    }
  }
}
