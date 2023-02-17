console.log("Welcome to tictactoeee")
let music = new Audio("bg.mp3")
let gameover = new Audio("gameover.waw")
let Aturn = new Audio("move.waw")
let turn = "X"

// Function to change the turn
const chaneTurn = ()=>{
    return turn ==="X"?"0": "x"
}

// Funtion to check for a win
const checkWin = ()=>{

}

// Game logic
let boxes = document.getElementsByClassName("con3")
Array.from(b).forEach(element =>{
    let con4 = element.querySelector('.con4  ')
    element.addEventListener('click' , (con4)=>{
        if(con4.innerText === ''){
            con4.innerText = turn;
            chaneTurn()
            Aturn.play()
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            
        }
    })
})