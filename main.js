var data = {
  direction: 'east'
};

document.addEventListener('keydown', onArrowKeyClicks);
var $car = document.querySelector('.car');

function onArrowKeyClicks(event) {
  // return event.textContent;
  // console.log(event.code);
  if (data.direction === 'east') {
    if (event.code === 'ArrowUp') {
      $car.className = 'car face-north';
      data.direction = 'north';
    } else if (event.code === 'ArrowDown') {
      $car.className = 'car face-south-clock';
      data.direction = 'south';
    } else if (event.code === 'ArrowLeft') {
      $car.className = 'car face-west-counter';
      data.direction = 'west';
    }
  } else if (data.direction === 'north') {
    if (event.code === 'ArrowDown') {
      $car.className = 'car face-south-clock';
      data.direction = 'south';
    } else if (event.code === 'ArrowLeft') {
      $car.className = 'car face-west-counter';
      data.direction = 'west';
    } else if (event.code === 'ArrowRight') {
      $car.className = 'car face-east';
      data.direction = 'east';
    }
  } else if (data.direction === 'south') {
    if (event.code === 'ArrowUp') {
      $car.className = 'car face-north';
      data.direction = 'south';
    } else if (event.code === 'ArrowLeft') {
      $car.className = 'car face-west-counter';
      data.direction = 'west';
    } else if (event.code === 'ArrowRight') {
      $car.className = 'car face-east';
      data.direction = 'east';
    }
  }
}
