'strict'

const refresh = document.getElementById('refresh');
const start = document.getElementById('start');
const circle = document.getElementById('circle');
const playerB = document.querySelector('.player-B');
const weekB = document.querySelectorAll('div.day');
const timer = { 
  element: document.getElementById('timer'),
  total: 61 * 1000
};

let bagB;
let imagesB;
let ended = false;
let tickCrossArray = [];

getQuestions();
pickThree();

function getQuestions() {
  bagB = fillBag();
  imagesB = getImages();
  fillWeek(weekB, bagB, imagesB);
}

addDayEvents(weekB);

function addDayEvents(week) {
  for (let day of week) {
    addDayAnimation(day);
  }
}

function addDayAnimation(day) {
  const grow = { transform: 'scale(2)' };
  const shrink = { transform: 'scale(1)' };
  const forwards = { duration: 300, easing: 'ease-out', fill: 'forwards' };
  day.addEventListener('click', () => {
    day.style.zIndex = '2';
    day.animate(grow, forwards);
  });
  day.addEventListener('mouseleave', () => {
    day.animate(shrink, forwards).onfinish = function() {
      day.style.zIndex = '0';
    };
  });
}

refresh.addEventListener('click', () => {
  getQuestions();
});

start.addEventListener('click', () => {
  requestAnimationFrame(initializeTimer);
  start.innerHTML = 'RESET'
});

function initializeTimer(now) {
  timer.initial = now;
  timer.s = 1000;
  timer.m = timer.s * 60;
  requestAnimationFrame(runTimer);
}

function runTimer(now) {
  const options = {minimumIntegerDigits: 2, useGrouping: false};
  const runtime = now - timer.initial;
  const remaining = timer.total - runtime;
  if(remaining < 0) timesUp();
  else {
    const minutes = Math.floor(remaining/timer.m).toLocaleString('en-US', options);
    const seconds = Math.floor((remaining%timer.m)/timer.s).toLocaleString('en-US', options);
    const display = `${minutes}:${seconds}`
    if(timer.display !== display) {
      timer.element.innerText = display;
      timer.display = display;
    }
    if(!ended) requestAnimationFrame(runTimer);
  }
}

function timesUp() { 
  ended = true;
  start.innerHTML = 'START';
}

function fillBag() {
  const array = [];
  for (let i=0; i<20; i++) {
    array[i] = i;
  }
  return array;
}

function getImages() {
  const array = [];
  for (let i=0; i<20; i++) {
    const image = new Image();
    image.src = `./images/${i}.jpg`;
    image.className = 'activity-image';
    array.push(image);
  }
  return array;
}

function fillWeek(week, bag, images) {
  for (let i=0; i<7; i++) {
    const pick = Math.floor(Math.random() * bag.length);
    week[i].querySelector('.day-label').classList.toggle('tick');
    if (week[i].querySelector('.tick-cross')) {
      const tickCross = document.createElement('img');
      tickCross.src = 'images/cross.svg';
      tickCross.className = 'tick-cross';
      week[i].querySelector('.tick-cross').replaceWith(tickCross);
    };
    if (week[i].querySelector('.activity-image')) {
      week[i].replaceChild(images[bag[pick]], week[i].querySelector('.activity-image'));
    };
    week[i].appendChild(images[bag[pick]]);
    bag.splice(pick, 1);
  }
}

function pickThree() {
  console.log(Math.ceil(Math.random()*7));
}