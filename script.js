let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");


const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];

};


const drawGame=()=>{
    msg.innerText="Game was draw.Play again!";
    msg.style.backgroundColor="#081b31";
};


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
       userScore++;
       userScorePara.innerText=userScore;
        msg.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You loss. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


const playGame=(userChoice)=>{

    console.log("User choice is :",userChoice);

    const compChoice=genCompChoice();

    console.log("Comp choice is :",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            // scissor,paper
            userWin=compChoice==="paper"?false:true;
        } 
        else if(userChoice==="paper"){
            // rock,scissor
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        
        showWinner(userWin,userChoice,compChoice);
    }
    }




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})