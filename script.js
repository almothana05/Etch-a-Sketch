const body = document.querySelector("body");


let btnDiv = document.createElement("div");
btnDiv.setAttribute("id" , "btnDiv");


let btn = document.createElement("button");
btn.setAttribute("id", "selection");
btn.innerHTML = "Change size";
btnDiv.appendChild(btn);

let bigDiv = document.createElement("div");
bigDiv.setAttribute("id" , "bigDiv");

body.appendChild(btnDiv);
body.appendChild(bigDiv);


function makeSquares(size){

    for(let i = 1 ; i <= size ; i++){
        let parentDiv = document.createElement("div");
        parentDiv.setAttribute("class", "row");
        bigDiv.appendChild(parentDiv);
        for(let j = 1; j <= size ; j++){
            let childDiv = document.createElement("div");
            childDiv.setAttribute("class" , "square");
            parentDiv.appendChild(childDiv);
        }
    }
}

function interactSquares(){
    let divList = document.querySelectorAll(".square");

    divList.forEach((square) =>{
        square.addEventListener("mouseenter", () => {changeColor(square , "red")});
        square.addEventListener("mouseleave", () => {changeColor(square , "white")});
    })
}


function changeColor(square , color){
    square.style["background-color"] = color;
}
function promptIt(){
    let inp = prompt("enter the new length");
    console.log(inp);

    let newLength = parseInt(inp);
    if(isNaN(newLength)){
        return;
    }
    if(newLength > 64){
        return;
    }

    while (bigDiv.firstChild) {
        bigDiv.removeChild(bigDiv.firstChild);
    }

    makeSquares(newLength);
    interactSquares();


}




btn.addEventListener("click", () =>{
    promptIt();
});

makeSquares(16);
interactSquares();