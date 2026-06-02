let stone=document.getElementById('stone')
let paper=document.getElementById('paper')
let scissor=document.getElementById('scissor')
let stone1=document.getElementById('stone1')
let paper1=document.getElementById('paper1')
let scissor1=document.getElementById('scissor1')    
const aman_stone=()=>{
    stone.style.backgroundColor="#99AD7A"
    stone.style.color="gold"
}
const aman_paper=()=>{
    paper.style.backgroundColor="#99AD7A"
    paper.style.color="gold"
}
const aman_scissor=()=>{
    scissor.style.backgroundColor="#99AD7A"
    scissor.style.color="gold"
}
const aman_stone1=()=>{
    stone1.style.backgroundColor="#99AD7A"
    stone1.style.color="gold"
}
const aman_paper1=()=>{
    paper1.style.backgroundColor="#99AD7A"
    paper1.style.color="gold"
}
const aman_scissor1=()=>{
    scissor1.style.backgroundColor="#99AD7A"
    scissor1.style.color="gold"
}


const suraj_stone=()=>{
    stone.style.backgroundColor="white"
    stone.style.color="black"
}
const suraj_paper=()=>{
    paper.style.backgroundColor="white"
    paper.style.color="black"
}
const suraj_scissor=()=>{
    scissor.style.backgroundColor="white"
    scissor.style.color="black"
}
const suraj_stone1=()=>{
    stone1.style.backgroundColor="white"
    stone1.style.color="black"
}
const suraj_paper1=()=>{
    paper1.style.backgroundColor="white"
    paper1.style.color="black"
}
const suraj_scissor1=()=>{
    scissor1.style.backgroundColor="white"
    scissor1.style.color="black"
}






stone.addEventListener("mouseover",aman_stone)
stone.addEventListener('mouseout',suraj_stone)
paper.addEventListener("mouseover",aman_paper)
paper.addEventListener('mouseout',suraj_paper)
scissor.addEventListener("mouseover",aman_scissor)
scissor.addEventListener('mouseout',suraj_scissor)
stone1.addEventListener("mouseover",aman_stone1)
stone1.addEventListener('mouseout',suraj_stone1)
paper1.addEventListener("mouseover",aman_paper1)
paper1.addEventListener('mouseout',suraj_paper1)
scissor1.addEventListener("mouseover",aman_scissor1)
scissor1.addEventListener('mouseout',suraj_scissor1)

stone.addEventListener("click",(element)=>{
    console.log("stone")
})

stone1.addEventListener("click",(element)=>{
 console.log("stone")
})

paper.addEventListener("click",(element)=>{
    console.log("paper")
})

paper1.addEventListener("click",(element)=>{
    console.log("paper")
})

scissor.addEventListener("click",(element)=>{
    console.log("scissor")
})

scissor1.addEventListener("click",(element)=>{
    console.log("scissor")
})



//........................................................................................................................................

let player1Choice = "";
let player2Choice = "";

let score1 = 0;
let score2 = 0;
let rounds = 0;



function addImage() {
    player1Choice = "stone";
    document.getElementById("src1").innerHTML =
        '<img src="https://media.gettyimages.com/id/170215830/photo/limestone.jpg?s=612x612&w=0&k=20&c=qkOXtIKgSbjSSWGPQdD-KAlh1_C5-U_B6_WpWMTRDzo=" width="300">';
          setTimeout(() => {
           src1.innerHTML = "";
         }, 3000);
    checkWinner();
}

function add2Image() {
    player1Choice = "paper";
    document.getElementById("src1").innerHTML =
        '<img src="https://media.gettyimages.com/id/2171109477/vector/white-coloured-crumpled-crushed-wrinkled-crinkled-divided-segregated-paper-folded-into-half.jpg?s=612x612&w=0&k=20&c=KmAiB4f3IMtISMdrF-dpEdmJgMt-Ww8PKxaqp6Eqzt8=" width="300">';
         setTimeout(() => {
           src1.innerHTML = "";
         }, 3000);
    checkWinner();
}

function add3Image() {
    player1Choice = "scissor";
    document.getElementById("src1").innerHTML =
        '<img src="https://media.gettyimages.com/id/175601846/photo/isolated-shot-of-opened-black-handle-scissors-on-white-background.jpg?s=612x612&w=0&k=20&c=l5Vx3vLgm70BrZ7efGNM7Z1DZ-BsQA6rBRy4SHTlNaM=" width="300">';
         setTimeout(() => {
           src1.innerHTML = "";
         }, 3000);
    checkWinner();
}



function sumImage() {
    player2Choice = "stone";
    document.getElementById("src2").innerHTML =
        '<img src="https://media.gettyimages.com/id/170215830/photo/limestone.jpg?s=612x612&w=0&k=20&c=qkOXtIKgSbjSSWGPQdD-KAlh1_C5-U_B6_WpWMTRDzo=" width="300">';
         setTimeout(() => {
           src2.innerHTML = "";
         }, 3000);
    checkWinner();
}

function sum2Image() {
    player2Choice = "paper";
    document.getElementById("src2").innerHTML =
        '<img src="https://media.gettyimages.com/id/2171109477/vector/white-coloured-crumpled-crushed-wrinkled-crinkled-divided-segregated-paper-folded-into-half.jpg?s=612x612&w=0&k=20&c=KmAiB4f3IMtISMdrF-dpEdmJgMt-Ww8PKxaqp6Eqzt8=" width="300">';
         setTimeout(() => {
           src2.innerHTML = "";
         }, 3000);
    checkWinner();
}

function sum3Image() {
    player2Choice = "scissor";
    document.getElementById("src2").innerHTML =
        '<img src="https://media.gettyimages.com/id/175601846/photo/isolated-shot-of-opened-black-handle-scissors-on-white-background.jpg?s=612x612&w=0&k=20&c=l5Vx3vLgm70BrZ7efGNM7Z1DZ-BsQA6rBRy4SHTlNaM=" width="300">';
         setTimeout(() => {
           src2.innerHTML = "";
         }, 3000);
    checkWinner();
}


function checkWinner() {

    if (player1Choice === "" || player2Choice === "") {
        return;
    }

    if (player1Choice === player2Choice) {
        alert("Round Draw");
    }

    else if (
        (player1Choice === "stone" && player2Choice === "scissor") ||
        (player1Choice === "paper" && player2Choice === "stone") ||
        (player1Choice === "scissor" && player2Choice === "paper")
    ) {
        score1++;
        document.getElementById("1st").innerText = score1;
        alert("Player 1 Wins Round");
    }

    else {
        score2++;
        document.getElementById("2nd").innerText = score2;
        alert("Player 2 Wins Round");
    }

    rounds++;

    player1Choice = "";
    player2Choice = "";

    if (rounds === 4) {

        if (score1 > score2) {
            document.querySelector("h2").innerText =
                " Player 1 Wins Match";
        }
        else if (score2 > score1) {
            document.querySelector("h2").innerText =
                " Player 2 Wins Match";
        }
        else {
            document.querySelector("h2").innerText =
                " Match Draw";
        }

        setTimeout(() => {
            score1 = 0;
            score2 = 0;
            rounds = 0;

            document.getElementById("1st").innerText = "0";
            document.getElementById("2nd").innerText = "0";

            document.getElementById("src1").innerHTML = "";
            document.getElementById("src2").innerHTML = "";

            document.querySelector("h2").innerText = "";
        }, 5000);
    }
}
