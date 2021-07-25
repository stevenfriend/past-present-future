'use strict'

const vocabulary = [{
	"eng": "do",
	"jpn": "する"
}, {
	"eng": "have",
	"jpn": "持っている「持っている」のほかに、「ある、いる」「経験する」「飼っている」などの意味も持っている。"
}, {
	"eng": "go",
	"jpn": "行く"
}, {
	"eng": "play",
	"jpn": "遊ぶ、(スポーツを)する、(楽器を)演奏する"
}, {
	"eng": "cook",
	"jpn": "料理する"
}, {
	"eng": "watch",
	"jpn": "(じっと)見る"
}, {
	"eng": "read",
	"jpn": "読む"
}, {
	"eng": "make",
	"jpn": "作る"
}, {
	"eng": "study",
	"jpn": "勉強する"
}, {
	"eng": "wash",
	"jpn": "洗う"
}, {
	"eng": "take",
	"jpn": "取る、受ける、連れて行く"
}, {
	"eng": "get",
	"jpn": "得る"
}, {
	"eng": "fly",
	"jpn": "飛ぶ、飛ばす"
}, {
	"eng": "walk",
	"jpn": "歩く"
}, {
	"eng": "listen",
	"jpn": "聞く"
}, {
	"eng": "clean",
	"jpn": "そうじする"
}, {
	"eng": "practice",
	"jpn": "練習する"
}, {
	"eng": "win",
	"jpn": "勝つ"
}, {
	"eng": "build",
	"jpn": "造る、建てる"
}, {
	"eng": "visit",
	"jpn": " 訪問する"
}];

const table = document.querySelector(".table");

for (let object of vocabulary) {
  const jpn = document.createElement("div");
  const jpnText = document.createTextNode(object.jpn);
  jpn.appendChild(jpnText);
  table.appendChild(jpn);
  const eng = document.createElement("div");
  const engText = document.createTextNode(object.eng);
  eng.appendChild(engText);
  table.appendChild(eng);
}

