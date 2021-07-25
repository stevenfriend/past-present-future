'use strict'

const engTable1 = ["cook", "watch", "wash", "walk", "practice"];
const engPastTable1 = ["cooked", "watched", "washed", "walked", "practiced"];
const jpnPastTable1 = ["料理した", "見た", "洗った", "歩いた", "練習した"];
const engTable2 = ["listen", "clean", "play", "study", "cry"];
const engPastTable2 = ["listened", "cleaned", "played", "studied", "cried"];
const jpnPastTable2 = ["聞いた", "掃除した", "遊んだ", "勉強した", "泣いた"];
const engTable3 = ["visit", "want", "start", "end", "need"];
const engPastTable3 = ["visited", "wanted", "started", "ended", "needed"];
const jpnPastTable3 = ["訪問した", "欲しかった", "始めた", "終わった", "必要だった"];

createTable('.table1', engTable1, engPastTable1, jpnPastTable1, ['eng-present1', 'eng-past1', 'jpn1']);
createTable('.table2', engTable2, engPastTable2, jpnPastTable2, ['eng-present2', 'eng-past2', 'jpn2']);
createTable('.table3', engTable3, engPastTable3, jpnPastTable3, ['eng-present3', 'eng-past3', 'jpn3']);

function createTable(tableName, engPresent, engPast, jpnPast, classNames) {
	const table = document.querySelector(tableName);
	appendHeading(table, '原形', classNames[0]);
	appendHeading(table, '過去形', classNames[1]);
	appendHeading(table, '意味', classNames[2]);
	for (let index in engTable1) {
		appendCell(table, engPresent[index], `cell ${classNames[0]}`, true);
		appendCell(table, engPast[index], `cell ${classNames[1]}`, true);
		appendCell(table, jpnPast[index], `cell ${classNames[2]}`, true);
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