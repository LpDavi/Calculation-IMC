// import e export
import { Modal } from "./modal" 
import { alertError  } from "./alert-error"
import { calculateIMC, notANumber } from "./utils"

//Varáveis 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


// 3 Maneiras de criar e atribuir função a um evento
form.onsubmit = function(event) { // 1°- Function anônima 
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    inputWeight.oninput = () => alertError.close()
    inputHeight.oninput = () => alertError.close()

    if(weightOrHeightIsNotANumber) {
        alertError.open()
        return;
    }

        alertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}  
/*form.onsubmit = () => {} // 2°- Arrow function e anônima

form.onsubmit = handleSubmit // 3°
function handleSubmit() {

}*/

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

