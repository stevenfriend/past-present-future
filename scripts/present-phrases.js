'use strict'

const engVerbs = ['do', 'have', 'go', 'play', 'cook', 'watch', 'read', 'make', 'study', 'wash', 'take', 'get', 'fly', 'walk', 'listen', 'clean', 'practice', 'win', 'build', 'visit'];
const engPhrases = ['the laundry', 'a picnic',	'to the store',	'a board game',	'dinner', 'a movie', 'a novel', 'a bracelet', 'English', 'the car',	'a test',	'a present', 'a kite',	'the dog',	'to music',	'my desk',	'the violin',	'a race',	'a sandcastle',	'my grandparents'];
const jpn = ['洗濯をする', 'ピクニックをする', '店に行く', 'ボードゲームをする', '夕食を作る', '映画を見る', '小説を読む', 'ブレスレットを作る', '英語を勉強する', '車を洗う', '試験を受ける', 'プレゼントをもらう', 'たこを揚げる', '犬の散歩する', '音楽を聴く', '私の机を掃除する', 'バイオリンを練習する', 'レースに勝つ', '砂の城を建てる', '私の祖父母を訪ねる'];
const images = [];
const phrases = [];
const imagePhrase = document.querySelector('.image-phrase');
const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');
const jpnPhrase = document.querySelector('.jpn-phrase');
const engPhrase = document.querySelector('.eng-phrase');
const verbButton = document.querySelector('.verb-button');
const phraseButton = document.querySelector('.phrase-button');
const toggleSwitch =  document.querySelector('.toggle-switch');
const state = { hideVerb: false, hidePhrase: false };

let counter = 0;

getImages();
makeEnglishPhrases();
addListeners();
display();
 
function getImages() {
  for (let i=0 ; i<jpn.length; i++) {
    const image = new Image();
    image.src = `./images/${i}.jpg`;
    image.className = 'image';
    images.push(image);
  }
	imagePhrase.appendChild(images[counter]);
}

function makeEnglishPhrases() {
	engVerbs.forEach((verb, i) => {
		const element = document.createElement('p');
		element.innerHTML = (`<span class="verb">${verb}</span> ${engPhrases[i]}`);
		element.className = 'phrase eng-phrase'
		element.addEventListener('click', e => {
			const verb = document.querySelector('.verb');
			const phrase = document.querySelector('.phrase');
			if (state.hideVerb) {
				verb.classList.toggle('hidden');
			} else if (state.hidePhrase) {
				phrase.classList.toggle('hidden');
			}
		})
		phrases.push(element);
	})
	engPhrase.appendChild(phrases[counter]);
}

function addListeners() {
	document.addEventListener('keydown', handleKeydown);
	navLeft.addEventListener('click', () => {
		decreaseCounter();
		display();
	});
	navRight.addEventListener('click', () => {
		increaseCounter();
		display();
	});
	toggleSwitch.addEventListener('change', () => {
		jpnPhrase.classList.toggle('hidden-japanese');
	});
	verbButton.addEventListener('click', e => {
		e.target.classList.toggle('disabled');
		if (phraseButton.classList.contains('disabled')) {
			phraseButton.classList.toggle('disabled');
			state.hidePhrase = false;
		}
		state.hideVerb = state.hideVerb ? false : true;
		hideText();
	});
	phraseButton.addEventListener('click', e => {
		e.target.classList.toggle('disabled');
		if (verbButton.classList.contains('disabled')) {
			verbButton.classList.toggle('disabled');
			state.hideVerb = false;
		}
		state.hidePhrase = state.hidePhrase ? false : true;
		hideText();
	});
}

function handleKeydown(e) {
	if(e.key == 'ArrowLeft') {
		decreaseCounter();
		display();
	} else if (e.key == 'ArrowRight') {
		increaseCounter();
		display();
	}
}

function decreaseCounter() {
	if (counter == 0) {
		counter = 19;
	} else {
		counter--;
	}
}

function increaseCounter() {
	if (counter == (jpn.length-1)) {
		counter = 0;
	} else {
		counter++;
	}
}

function display() {
	imagePhrase.replaceChild(images[counter], imagePhrase.firstChild);
	jpnPhrase.innerHTML = jpn[counter];
	engPhrase.replaceChild(phrases[counter], engPhrase.firstChild);
	hideText();
}

function hideText() {
	const verb = document.querySelector('.verb').classList;
	const phrase = document.querySelector('.phrase').classList;
	if (state.hideVerb) {
		if (!verb.contains('hidden')) {
			verb.add('hidden');
		};
		if (phrase.contains('hidden')) {
			phrase.remove('hidden');
		};
	} else {
		verb.remove('hidden');
	}
	if (state.hidePhrase) {
		if (!phrase.contains('hidden')) {
			phrase.add('hidden');
		};
		if (verb.contains('hidden')) {
			verb.remove('hidden');
		};
	} else {
		phrase.remove('hidden');
	}
}