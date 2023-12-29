let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let winner = document.querySelector("#winner");
const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let clicko = true;
boxes.forEach(box => {
    box.addEventListener("click",() =>{
        console.log("button clicked");
        if(clicko == true){
            box.innerText = "O";
            clicko = false;
        }
        else if(clicko == false){
            box.innerText = "X";
            clicko = true;
        }
        box.disabled = true;
        if(drawcheck()){
            winner.innerText = `This is a draw`
            setTimeout(()=>{
                winner.innerText = `let's begin the game`
                enableboxes();
            },2000);
        }
        winningcheck();
    })
});
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const winningcheck=()=>{
    for(let winning of win){
        let first = boxes[winning[0]].innerText;
        let second = boxes[winning[1]].innerText;
        let third = boxes[winning[2]].innerText;
        if(first && second && third){
            if(first === second &&  second=== third){
                winner.innerText = `Congratulations, The Winner is ${first}`
                disableboxes();
                setTimeout(()=>{
                    winner.innerText = "let's begin the game"
                    enableboxes();
                },2000);
            }
        }
    }
}
const drawcheck=()=>{
    for (box of boxes) {
        if (!box.disabled) {
            return false;
        }
    }
    return true;
}
reset.addEventListener("click",()=>{
    console.log("clicked");
    enableboxes();
});



