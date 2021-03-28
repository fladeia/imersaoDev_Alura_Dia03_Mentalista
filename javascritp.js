// var secretNumber = parseInt(Math.random() * 10)
// var trying = 3

// while (trying > 0) {
//     var kick = parseInt(prompt("Digite um número:"))
//     if (secretNumber == kick) {
//         alert("Acertou")
//         break
//     } else if (kick < secretNumber) {
//         if (parseInt(trying - 1) > 0) {
//             alert("O número secreto é maior\n Você tem mais " + parseInt(trying - 1) + " chace\(s\)")
//         } else {
//             alert("Errou! Acabaram suas chaces. O número secreto é " + secretNumber)
//             break
//         }
//     } else if (kick > secretNumber) {
//         if (parseInt(trying - 1) > 0) {
//             alert("O número secreto é menor\n Você tem mais " + parseInt(trying - 1) + " chace\(s\)")
//         } else {
//             alert("Errou! Acabaram suas chaces. O número secreto é " + secretNumber)
//             break
//         }
//     }
//     trying--
// }



var secretNumber = parseInt(Math.random() * 10 + 1)
var trying = 3
var chooseNumber = document.querySelector("input[name=choose]")
var tipMessage = document.querySelector("#tipMessage")

// chooseNumber.addEventListener("input", function () {
//     console.log(chooseNumber.value)
// })

function btnTry() {
    kick = chooseNumber.value
    // while (trying > 0) {
    // var kick = parseInt(prompt("Digite um número:"))
    if (secretNumber == kick) {
        tipMessage.innerHTML = `<strong>Acertou!</strong> <br>Parabéns!`
        // break
    } else if (kick < secretNumber) {
        if (parseInt(trying - 1) > 0) {
            tipMessage.innerHTML = `O número secreto é maior <br> Você tem mais  <strong>${parseInt(trying - 1)}</strong> chance\(s\)`
        } else {
            tipMessage.innerHTML = "Acabaram suas chaces. O número secreto é " + secretNumber
            // break
        }
    } else if (kick > secretNumber) {
        if (parseInt(trying - 1) > 0) {
            tipMessage.innerHTML = `O número secreto é menor <br> Você tem mais  <strong>${parseInt(trying - 1)}</strong> chance\(s\)`
        } else {
            tipMessage.innerHTML = `Acabaram suas chaces. O número secreto é  ${secretNumber}`
            // break
        }
    }
    trying--
    // }
}




// function getRandomArbitrary(min, max) {
//     return parseInt(Math.random() * (max - min) + 1);
// }

// console.log(getRandomArbitrary(0, 10))