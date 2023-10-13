// First Page
let audio=new Audio('./assets/audio.mp3')
let firstSection=document.querySelector(".first_section")
let playbtn=document.querySelector("#play")

playbtn.addEventListener('click',()=>{
    audio.play()
    let Main_container=document.querySelector(".container")
    firstSection.style.display="none"
    Main_container.style.display="block"
})


// Random Colors
const container=document.querySelector('.container_box')
let emoji=['👊','🖐️','✂️']
for(let i=0;i<3;i++){
    let div1=document.createElement("button")
    div1.classList.add("btns")
    container.appendChild(div1)
}
let color_div=document.querySelectorAll('.btns')
color_div.forEach((single_color_div)=>{
    let color_code_generated=RandomColorGenerator();
    single_color_div.style.backgroundColor="#"+color_code_generated;
    
})
for(let i=0;i<emoji.length;i++){
    color_div[i].innerText=emoji[i]
    color_div[i].style.fontSize="50px"
}
function RandomColorGenerator(){
    let hexCode="0123456789abcdef"
    let CodeGenerated=""
    let lengthofColor=6
    for(let i=0;i<lengthofColor;i++){
        let randomIndex=Math.floor(Math.random()*16)
        CodeGenerated+=hexCode[randomIndex]
    }
    return CodeGenerated;
}

// Game
const resultMessage=document.querySelector(".result_message")
const userScore_id=document.querySelector("#yourScore")
const computerScore_id=document.querySelector("#computerScore")
let Calculated_UserScore=0
let Calculated_ComputerScore=0
for(let i=0;i<3;i++){
    color_div[i].addEventListener('click',()=>{
        // console.log(color_div[i].innerText)
        audio.play()
        let result=MatchTheConditions(color_div[i].innerText,ComputerOutput())
        resultMessage.innerText=result
        
    })
}

// Computer Value
function ComputerOutput(){
    let randomIndex=Math.floor(Math.random()*emoji.length)
    // console.log(emoji[randomIndex])
    return emoji[randomIndex]
}

// Check for the winner
function MatchTheConditions(userValue,ComputerValue){
    if(userValue==ComputerValue){
        // resultMessage.innerText="It's a tie"
        return "It's a tie"
    }
    else if((userValue=="👊" && ComputerValue==="✂️") || (userValue=="✂️" && ComputerValue==="🖐️") || (userValue=="🖐️" && ComputerValue==="👊")){
        // resultMessage.innerText="You Won!! "+userValue+" beats "+ComputerValue
        Calculated_UserScore++ 
        userScore_id.innerText=Calculated_UserScore       
        return "You Won!! "+userValue+" beats "+ComputerValue
    }
    else{
        // resultMessage.innerText="You Loose!! "+ComputerValue+" beats "+userValue
        Calculated_ComputerScore++
        computerScore_id.innerText=Calculated_ComputerScore
        return "You Loose!! "+ComputerValue+" beats "+userValue
    }
}

