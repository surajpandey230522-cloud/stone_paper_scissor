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


function addImage() {
    let img = document.createElement("img");

    img.src = "https://media.gettyimages.com/id/170215830/photo/limestone.jpg?s=612x612&w=0&k=20&c=qkOXtIKgSbjSSWGPQdD-KAlh1_C5-U_B6_WpWMTRDzo=";
    img.width = 300;
    img.alt = "Sample Image";

    document.getElementById("src1").appendChild(img);
}

function add2Image() {
    let img = document.createElement("img");

    img.src = "https://media.gettyimages.com/id/2171109477/vector/white-coloured-crumpled-crushed-wrinkled-crinkled-divided-segregated-paper-folded-into-half.jpg?s=612x612&w=0&k=20&c=KmAiB4f3IMtISMdrF-dpEdmJgMt-Ww8PKxaqp6Eqzt8=";
    img.width = 300;
    img.alt = "Sample Image";

    document.getElementById("src1").appendChild(img);
}

function add3Image() {
    let img = document.createElement("img");

    img.src = "https://media.gettyimages.com/id/175601846/photo/isolated-shot-of-opened-black-handle-scissors-on-white-background.jpg?s=612x612&w=0&k=20&c=l5Vx3vLgm70BrZ7efGNM7Z1DZ-BsQA6rBRy4SHTlNaM=";
    img.width = 300;
   
    img.alt = "Sample Image";

    document.getElementById("src1").appendChild(img);
}
// ''''''...............................................................................................................................
function sumImage() {
    let img = document.createElement("img");

    img.src = "https://media.gettyimages.com/id/170215830/photo/limestone.jpg?s=612x612&w=0&k=20&c=qkOXtIKgSbjSSWGPQdD-KAlh1_C5-U_B6_WpWMTRDzo=";
    img.width = 300;
    img.alt = "Sample Image";

    document.getElementById("src2").appendChild(img)}

    function sum3Image() {
    let img = document.createElement("img");

    img.src = "https://media.gettyimages.com/id/175601846/photo/isolated-shot-of-opened-black-handle-scissors-on-white-background.jpg?s=612x612&w=0&k=20&c=l5Vx3vLgm70BrZ7efGNM7Z1DZ-BsQA6rBRy4SHTlNaM=";
    img.width = 300;
   
    img.alt = "Sample Image";

    document.getElementById("src2").appendChild(img);
}

function sum2Image() {
    let img = document.createElement("img");

    img.src = "https://media.gettyimages.com/id/2171109477/vector/white-coloured-crumpled-crushed-wrinkled-crinkled-divided-segregated-paper-folded-into-half.jpg?s=612x612&w=0&k=20&c=KmAiB4f3IMtISMdrF-dpEdmJgMt-Ww8PKxaqp6Eqzt8=";
    img.width = 300;
    img.alt = "Sample Image";

    document.getElementById("src2").appendChild(img);
}
