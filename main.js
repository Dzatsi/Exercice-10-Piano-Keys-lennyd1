// const { log } = require("console");

// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})
console.log(keys);

// Write named functions that change the color of the keys below
function keyPlay(event){
  event.target.style.backgroundColor = 'green';
};
function keyReturn(event){
  event.target.style.backgroundColor = '';
};

// Write a named function with event handler properties
function assignEvents(note) {
  note.addEventListener('mousedown', keyPlay);
  note.addEventListener('mouseup', keyReturn);
};

// Write a loop that runs the array elements through the function
notes.forEach(assignEvents);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button

nextOne.addEventListener('click', function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').textContent = 'D';
  document.getElementById('letter-note-six').textContent = 'C';
});

// Write anonymous event handler property and function for the second progress button
nextTwo.addEventListener('click', function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('word-five').textContent = 'DEAR';
  document.getElementById('word-six').textContent ='FRI-';
  let lastLyric= document.getElementById("slideIn");
  lastLyric.style.display="inline-block";
  document.querySelector("#letter-note-three").innerHTML="G";
  document.querySelector("#letter-note-four").innerHTML="E";
  document.querySelector("#letter-note-five").innerHTML="C";
  document.querySelector("#letter-note-six").innerHTML="B";
})

// Write anonymous event handler property and function for the third progress button
nextThree.addEventListener('click', function(){
  startOver.hidden=false;
  nextThree.hidden=true;
  document.querySelector('#word-one').innerHTML='HAP-'
  document.querySelector('#word-two').innerText='PY'
  document.querySelector('#word-three').innerText='BIRTH'
  document.querySelectorAll('.lyrics__container')[0].querySelectorAll('.lyrics')[3].getElementsByTagName("span")[0].innerText=
  "DAY"
  let wordfive=document.querySelectorAll(".lyrics__container")[0].querySelectorAll(".lyrics")[4];
 
  wordfive.getElementsByTagName("span")[0].innerText ="TO"
  let wordsix=document.querySelectorAll(".lyrics__container")[0]
  .querySelectorAll(".lyrics")[5];
  wordsix.getElementsByTagName("span")[0].innerText ="YOU!";

document.querySelector('#letter-note-one').innerHTML='F'
document.querySelector('#letter-note-two').innerHTML='F'
document.querySelector('#letter-note-three').innerHTML='E'
document.querySelector('#letter-note-four').innerHTML='C'
document.querySelectorAll('.notes')[4].getElementsByTagName("li")[1].innerText="D"
document.querySelectorAll('.notes')[4].getElementsByTagName("li")[2].innerText="C"

let lastLyric = document.getElementById('slideIn');
lastLyric.style.display = 'none';
})

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}