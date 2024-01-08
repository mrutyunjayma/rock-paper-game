let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

 const userscorepara = document.querySelector("#user-score");
 const compscorepara = document.querySelector("#comp-score");


 const drawgame = ( ) =>{
    msg.innerText = " The Game was Draw !";
    msg.style.backgroundColor=" #FFD1E3";
 };

 const showWinner =(userWin) =>{
    if( userWin){
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = " you Win !";
        msg.style.backgroundColor="green";

    }else{
        compScore++;
        compscorepara.innerText = compScore;
        msg.innerText = " you lose !";
        msg.style.backgroundColor="red";
    }
 }

const genCompChoice = () =>{
    //rock paper scissors
    const options = ["rock","paper", "scissors"];
     const randIdx = Math.floor(Math.random () * 3);
     return options[randIdx];
};

const palyGame = (userChoice) =>{
    console.log("Your choice =",userChoice);
    const compchoice = genCompChoice();

    if(userChoice === compchoice){
        //Draw game
        drawgame();
    }else{
        let userWin =true;
         if(userChoice === "rock"){
            userWin = compchoice === "paper" ? false : true;
         }else if( userChoice === "paper"){
             userWin = compchoice === "scissors" ? false : true;  
         }else{
            // scissors
            userWin = compchoice === "rock" ?false : true;
         }
        
         showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        palyGame(userChoice);
    });
});