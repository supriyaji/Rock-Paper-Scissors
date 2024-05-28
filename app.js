let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option =["Rock","Paper","Scissors"];
    const randIdx= Math.floor(Math.random() *3);
    return option[randIdx];
}

    const drawGame = () => {
    msg.innerText=`Game Was Draw! Play Again`;
    msg.style.background = "yellow";
    msg.style.color="black";
    };

    const showWinner = (userWin,userChoice,compChoice) => {
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText=`You Win! Your ${userChoice} Beats ${compChoice}`;
            msg.style.background = "green";
            msg.style.color="white";
        }else{
            compScore++;
            compScorePara.innerText=compScore;
            msg.innerText=`You Lose! ${compChoice} Beats Your ${userChoice}`;
            msg.style.background = "red";
            msg.style.color="white";
        }
    }

const playGame = (userChoice) => {
    console.log("user choice = " ,userChoice) 
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false :true;
        }else if(userChoice === "Paper"){
          userWin = compChoice === "Scissors" ? false : true;
        }else{
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        // console.log(choice);
        // console.log("choice was clicked",userChoice);
       const userChoice = choice.getAttribute("id");    
        playGame(userChoice);
    });
});