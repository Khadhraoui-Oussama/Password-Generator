var pass1 = document.getElementById("password1");
var pass2 = document.getElementById("password2");

var passGenerated1 = "";
var passGenerated2 = "";

var numbersCheck = document.getElementById("numbers").checked;
var spCharsCheck = document.getElementById("sp-chars").checked;

var lengthPass = document.getElementById("length").value;

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var possibleCombination = [];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let spChars = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
//the copy functions
function copyPass1() {
  var copyText1 = document.getElementById("password1");
  copyText1.select;
  copyText1.setSelectionRange;
  navigator.clipboard
    .writeText(copyText1.value)
    .then(() => {
      alert("successfully copied");
    })
    .catch(() => {
      alert("something went wrong");
    });
}

function copyPass2() {
  var copyText12 = document.getElementById("password2");
  copyText12.select;
  copyText12.setSelectionRange;
  navigator.clipboard
    .writeText(copyText12.value)
    .then(() => {
      alert("successfully copied");
    })
    .catch(() => {
      alert("something went wrong");
    });
}

function generate() {
  pass1.textContent = "";
  pass2.textContent = "";
  passGenerated1 = "";
  passGenerated2 = "";
  numbersCheck = document.getElementById("numbers").checked;
  spCharsCheck = document.getElementById("sp-chars").checked;
  for (let i = 0; i < letters.length; i++) {
    possibleCombination.push(letters[i]);
  }
  lengthPass = document.getElementById("length").value;

  if (numbersCheck) {
    for (let i = 0; i < numbers.length; i++) {
      possibleCombination.push(numbers[i]);
    }
  }
  if (spCharsCheck) {
    for (let i = 0; i < spChars.length; i++) {
      possibleCombination.push(spChars[i]);
    }
  }
  for (let i = 0; i < lengthPass; i++) {
    passGenerated1 +=
      possibleCombination[
        Math.floor(Math.random() * possibleCombination.length)
      ];
    pass1.textContent = passGenerated1;
  }
  for (let i = 0; i < lengthPass; i++) {
    passGenerated2 +=
      possibleCombination[
        Math.floor(Math.random() * possibleCombination.length)
      ];
    pass2.textContent = passGenerated2;
  }
  possibleCombination = [];
}
