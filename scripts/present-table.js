'use strict'

const engPresent = ["do", "have", "go", "play", "cook", "watch", "read", "make", "study", "wash", "take", "get", "fly", "walk", "listen", "clean", "practice", "win", "build", "visit"];
const jpnPresent = ["する", "持っている", "行く", "遊ぶ", "料理する", "見る", "読む", "作る", "勉強する", "洗う", "取る", "もらう", "飛ぶ", "歩く", "聞く", "そうじする", "練習する", "勝つ", "建てる", " 訪問する"]

createTable();

function createTable() {
	const table = document.querySelector(".table");
	appendHeading(table, '原形', 'eng');
	appendHeading(table, '意味', 'jpn');
	for (let index in engPresent) {
		appendCell(table, engPresent[index], 'cell eng', true);
		appendCell(table, jpnPresent[index], 'cell jpn', true);
	}
}

function appendHeading(table, text, className) {
	const element = document.createElement("div");
	const textNode = document.createTextNode(text);
	const visibility = createVisibilityButton(className);
	element.className = `heading ${className}`;
	element.appendChild(textNode);
	element.appendChild(visibility);
	table.appendChild(element);
}

function createVisibilityButton(className) {
	const visibility = document.createElement("img");
	visibility.src = './images/visibility_on.png';
	visibility.addEventListener('click', e => { 
		handleVisibility(e, className); 
	});
	visibility.className = 'visibility-icon visible';
	return visibility;
}

function handleVisibility(e, className) {
	if (e.target.className.includes('visible')) {
		e.target.src = './images/visibility_off.png';
		e.target.classList.toggle('visible');
		hideAll(`.cell.${className}`, false);
	} else {
		e.target.src = './images/visibility_on.png';
		e.target.classList.toggle('visible');
		hideAll(`.cell.${className}`, true);
	}
}

function hideAll(selector, bool) {
	const cells = document.querySelectorAll(selector);
	cells.forEach( element =>	{ 
		if (element.className.includes('hidden') == bool) {
			element.classList.toggle('hidden');
		}
	});
}

function appendCell(table, text, classNames, canHide) {
  const element = document.createElement("div");
  const textNode = document.createTextNode(text);
	element.className = classNames;
  element.appendChild(textNode);
  table.appendChild(element);
	if(canHide) {
		element.addEventListener('click', e => {
			e.target.classList.toggle('hidden');
		})
	}
}