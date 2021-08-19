const secretNumber = parseInt(Math.random() * 10 + 1)
const chooseNumber = document.querySelector("input[name=choose]")
const tipMessage = document.querySelector("#tipMessage")
const numberOfGuests = document.querySelector("#nChoose")
let trying = 3
const guests = []

function btnTry() {
    const kick = chooseNumber.value
    guests.push(kick)

    numberOfGuests.innerHTML = guests

    if (secretNumber == kick) {
        return tipMessage.innerHTML = `<strong>Acertou!</strong> <br>Parabéns!`
    }  
    
    if (kick < secretNumber) {
        if (parseInt(trying - 1) > 0) {
            tipMessage.innerHTML = `O número secreto é <strong>maior</strong> <br> Você tem mais  <strong>${parseInt(trying - 1)}</strong> chance\(s\)`
        } else {
            tipMessage.innerHTML = `Acabaram suas chaces. O número secreto é <strong>${secretNumber}</strong>`
        }
    } else if (kick > secretNumber) {
        if (parseInt(trying - 1) > 0) {
            tipMessage.innerHTML = `O número secreto é <strong>menor</strong> <br> Você tem mais  <strong>${parseInt(trying - 1)}</strong> chance\(s\)`
        } else {
            tipMessage.innerHTML = `Acabaram suas chaces. O número secreto é <strong>${secretNumber}</strong>`
        }
    }
    trying--
    chooseNumber.value = ''
}

chooseNumber.addEventListener("input", btnTry)

function reiniciar() {
    location.reload()
}