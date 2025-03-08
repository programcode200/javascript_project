let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const gameDraw = () => {
  msg.innerText = "Game was draw. Play again!";
  msg.style.backgroundColor = "rgb(18, 40, 43)";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userscore++;
    userPara.innerText = userscore;
    msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compPara.innerText = compscore;
    msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const game = (userChoice) => {
  //   console.log(userChoice);
  const compChoice = genCompChoice();
  //   console.log("comp ", compChoice);

  if (userChoice === compChoice) {
    //Draw
    gameDraw();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    game(userChoice);
  });
});
