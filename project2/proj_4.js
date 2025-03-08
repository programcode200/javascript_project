let randomNo = parseInt(Math.random() * 100 + 1);

console.log(randomNo);

const submit = document.querySelector("#subt");
const userIn = document.querySelector("#guessField");
const guessslot = document.querySelector(".guesses");
const remainval = document.querySelector(".lastResult");
const lowhigh = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevguess = [];
let numguess = 1;

let playgames = true;

if (playgames) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userIn.value);
    console.log(guess);

    validguess(guess);
  });
}

function validguess(guess) {
  if (isNaN(guess)) {
    alert("please enter valid number");
  } else if (guess < 1) {
    alert("please enter valid number");
  } else if (guess > 100) {
    alert("please enter valid number");
  } else {
    prevguess.push(guess);
    if (numguess === 10) {
      displayguess(guess);
      displaymsg(` game Over random number is ${randomNo}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomNo) {
    displaymsg(` you guessed it right`);
    endgame();
  } else if (guess < randomNo) {
    displaymsg(` number is low`);
  } else if (guess > randomNo) {
    displaymsg(` number is high`);
  }
  
}

function displayguess(guess) {
  userIn.value = "";
  guessslot.innerHTML += `${guess}, `;
  numguess++;
  remainval.innerHTML = `${11 - numguess}`;
}

function displaymsg(msg) {
  lowhigh.innerHTML = `<h3>${msg}</h3>`;
}

function endgame() {
  userIn.value = "";
  userIn.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h3 id = "newgame">Start new game</h3>`;
  startover.appendChild(p);
 

  playgames = false;
  newgame();
}

function newgame() {
  const newgmaebtn = document.querySelector("#newgame");
  newgmaebtn.addEventListener("click", (e) => {
    randomNo = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guessslot.innerHTML = "";
    remainval.innerHTML = `${11 - numguess}`;
    userIn.removeAttribute("disabled");
    startover.removeChild(p);
    lowhigh.innerHTML = ""; 

    playgames = true;
  });
}

