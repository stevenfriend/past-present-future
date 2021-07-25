'use strict'

const engPresent = ["do", "have", "go", "read", "make", "take", "get", "fly", "win", "build"];
const engPast = ["did", "had", "went", "read", "made", "took", "got", "flew", "won", "built"];
const jpnPast = ["した", "持っていた", "行った", "読んだ", "作った", "取った", "もらった", "飛んだ", "勝った", "建てた"]

createTable();

function createTable() {
	const table = document.querySelector(".table");
	appendHeading(table, '原形', 'eng-present');
	appendHeading(table, '過去形', 'eng-past');
	appendHeading(table, '意味', 'jpn');
	for (let index in engPresent) {
		appendCell(table, engPresent[index], 'cell eng-present', true);
		appendCell(table, engPast[index], 'cell eng-past', true);
		appendCell(table, jpnPast[index], 'cell jpn', true);
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