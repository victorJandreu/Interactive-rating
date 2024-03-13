
const numberDiv = document.getElementById("numbers")
const arrayChildNumberDiv = numberDiv.children
const submitEl = document.getElementById("submit")
const mainEl = document.getElementById("main")

let finalNumber = 0

//event listener in all botons, and effect
for(let i = 0; i < arrayChildNumberDiv.length; i++) {
    arrayChildNumberDiv[i].addEventListener("click", () => pressbtn(arrayChildNumberDiv[i]))
  
}


function pressbtn(child){
    eliminateBackground()
    child.classList.add("color")
    if(finalNumber === child.textContent ) {
        eliminateBackground()
        finalNumber = 0}
    else{
        finalNumber = child.textContent
        
    }
}

function eliminateBackground(){
    for(let i = 0; i < arrayChildNumberDiv.length; i++) {
        arrayChildNumberDiv[i].classList.remove("color")
    }
}



// submit button

submitEl.addEventListener("click", newContent)

function newContent(){
    if(finalNumber == 0) return
    let element = document.createElement("div")
    element.classList.add("thank")
    element.innerHTML = `
    <img src="./images/illustration-thank-you.svg" alt="thank you image">
    <p class="select">You selected ${finalNumber} out of 5</p>
    <h2>Thank you!</h2>
    <p class="apreciated"> We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</p>
    
    `
   mainEl.innerText = ""
   mainEl.appendChild(element)
}

