let stone=document.getElementById('stone')
let paper=document.getElementById('paper')
let scissor=document.getElementById('scissor')
let stone1=document.getElementById('stone1')
let paper1=document.getElementById('paper1')
let scissor1=document.getElementById('scissor1')    
const aman_stone=()=>{
    stone.style.backgroundColor="red"
    stone.style.color="white"
}
const aman_paper=()=>{
    paper.style.backgroundColor="red"
    paper.style.color="white"
}
const aman_scissor=()=>{
    scissor.style.backgroundColor="red"
    scissor.style.color="white"
}
const aman_stone1=()=>{
    stone1.style.backgroundColor="red"
    stone1.style.color="white"
}
const aman_paper1=()=>{
    paper1.style.backgroundColor="red"
    paper1.style.color="white"
}
const aman_scissor1=()=>{
    scissor1.style.backgroundColor="red"
    scissor1.style.color="white"
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