const rubLeft = document.querySelector('.rubLeft');
const usdLeft = document.querySelector('.usdLeft');
const eurLeft = document.querySelector('.eurLeft');
const aznLeft = document.querySelector('.aznLeft');
const valyutaP1 = document.querySelector('.valyuta1');
const valyutaP2 = document.querySelector('.valyuta2');
const firstInput = document.querySelector('.firstInput');
const secondInput = document.querySelector('.secondInput');

const rubRight = document.querySelector('.rubRight');
const usdRight = document.querySelector('.usdRight');
const eurRight = document.querySelector('.eurRight');
const aznRight = document.querySelector('.aznRight');

rubLeft.addEventListener('click', () => {
    fetch('https://api.exchangerate.host/latest?base=RUB&symbols')
        .then(resp => resp.json())
        .then(data => {
            valyutaP1.textContent = `1 RUB = ${data.rates.USD} USD`
            firstInput.addEventListener('keyup', () => {
                secondInput.value = firstInput.value * data.rates.USD
            })
            secondInput.addEventListener('keyup', () => {
                firstInput.value = firstInput.value * data.rates.USD
            })
            fetch('https://api.exchangerate.host/latest?base=USD&symbols')
                .then(resp => resp.json())
                .then(data => {
                    valyutaP2.textContent = `1 USD = ${data.rates.RUB} RUB`
                })
        })
    rubLeft.style.background = "#833AE0"
    rubLeft.style.color = "white"
    usdRight.style.background = "#833AE0"
    usdRight.style.color = "white"
    aznRight.style.background = "white"
    aznRight.style.color = "#8d8787"
    eurRight.style.background = "white"
    eurRight.style.color = "#8d8787"

})

usdRight.addEventListener('click', () => {
    fetch('https://api.exchangerate.host/latest?base=RUB&symbols')
        .then(resp => resp.json())
        .then(data => {
                        fetch('https://api.exchangerate.host/latest?base=RUB&symbols')
            .then(resp => resp.json())
            .then(data => {
                valyutaP1.textContent = `1 RUB = ${data.rates.EUR} EUR`
            })
            firstInput.addEventListener('keyup', () => {
                secondInput.value = firstInput.value * data.rates.USD
            })
            secondInput.addEventListener('keyup', () => {
                firstInput.value = firstInput.value * data.rates.USD
            })
            fetch('https://api.exchangerate.host/latest?base=USD&symbols')
                .then(resp => resp.json())
                .then(data => {
                    valyutaP2.textContent = `1 USD = ${data.rates.RUB} RUB`
                })
        })
    usdRight.style.background = "#833AE0"
    eurRight.style.background = "white"
    eurRight.style.color = "#8d8787"
    usdRight.style.color = "white"
    aznRight.style.background = "white"
    aznRight.style.color = "#8d8787"
})

eurRight.addEventListener('click', () => {
    fetch('https://api.exchangerate.host/latest?base=RUB&symbols')
        .then(resp => resp.json())
        .then(data => {
            fetch('https://api.exchangerate.host/latest?base=RUB&symbols')
            .then(resp => resp.json())
            .then(data => {
                valyutaP1.textContent = `1 RUB = ${data.rates.EUR} EUR`
            })
            firstInput.addEventListener('keyup', () => {
                secondInput.value = firstInput.value * data.rates.EUR
            })
            secondInput.addEventListener('keyup', () => {
                firstInput.value = firstInput.value * data.rates.EUR
            })
            fetch('https://api.exchangerate.host/latest?base=EUR&symbols')
                .then(resp => resp.json())
                .then(data => {
                    valyutaP2.textContent = `1 EUR = ${data.rates.RUB} RUB`
                })
        })
    usdRight.style.background = "white"
    eurRight.style.background = "#833AE0"
    aznRight.style.background = "white"
    aznRight.style.color = "#8d8787"
    eurRight.style.color = "white"
    usdRight.style.color = "#8d8787"
})


aznRight.addEventListener('click', () => {
    fetch('https://api.exchangerate.host/latest?base=RUB&symbols')
        .then(resp => resp.json())
        .then(data => {
            fetch('https://api.exchangerate.host/latest?base=RUB&symbols')
            .then(resp => resp.json())
            .then(data => {
                valyutaP1.textContent = `1 RUB = ${data.rates.AZN} AZN`
            })
            firstInput.addEventListener('keyup', () => {
                secondInput.value = firstInput.value * data.rates.AZN
            })
            secondInput.addEventListener('keyup', () => {
                firstInput.value = firstInput.value * data.rates.AZN
            })
            fetch('https://api.exchangerate.host/latest?base=AZN&symbols')
                .then(resp => resp.json())
                .then(data => {
                    valyutaP2.textContent = `1 AZN = ${data.rates.RUB} RUB`
                })
        })
    aznRight.style.background = "#833AE0"
    aznRight.style.color = "white"
    usdRight.style.background = "white"
    eurRight.style.background = "white"
    eurRight.style.color = "#8d8787"
    usdRight.style.color = "#8d8787"
})


