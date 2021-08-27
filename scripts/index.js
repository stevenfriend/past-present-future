const presentButton = document.querySelector('#present-button');
const pastButton = document.querySelector('#past-button');
const futureButton = document.querySelector('#future-button');
const activities = document.querySelectorAll('.activities');

presentButton.addEventListener('click', () => { 
  activities[0].classList.toggle('hidden');
});

pastButton.addEventListener('click', () => { 
  activities[1].classList.toggle('hidden');
});

futureButton.addEventListener('click', () => { 
  activities[2].classList.toggle('hidden');
});
