const rubLeft = document.querySelector('.rubLeft');
const usdLeft = document.querySelector('.usdLeft');
const eurLeft = document.querySelector('.eurLeft');
const aznLeft = document.querySelector('.aznLeft');
const valyutaP1 = document.querySelector('.valyuta1');
const valyutaP2 = document.querySelector('.valyuta2');
const firstInput = document.querySelector('.firstInput');
const secondInput = document.querySelector('.secondInput');
const reset = document.querySelector('.reset');

const rubRight = document.querySelector('.rubRight');
const usdRight = document.querySelector('.usdRight');
const eurRight = document.querySelector('.eurRight');
const aznRight = document.querySelector('.aznRight');
/*I have a RUB */
rubLeft.addEventListener('click', () => {
    rubLeft.id = 'clickButton'
    usdRight.id = 'clickButton'
    aznLeft.id = ''
    eurLeft.id = ''
    usdLeft.id = ''
    rubRight.id = ''
    aznRight.id = ''
    eurRight.id = ''
    secondInput.value = ""
    firstInput.value = ""
    fetch('https://api.exchangerate.host/latest?base=RUB&symbols')
        .then(resp => resp.json())
        .then(data => {
            valyutaP1.textContent = `1 RUB = ${data.rates.USD} USD`
            firstInput.addEventListener('keyup', () => {
                secondInput.value = firstInput.value * data.rates.USD
            })
            fetch('https://api.exchangerate.host/latest?base=USD&symbols')
                .then(resp => resp.json())
                .then(data => {
                    valyutaP2.textContent = `1 USD = ${data.rates.RUB} RUB`
                })
        })
    eurRight.addEventListener('click', () => {
        aznRight.id = ''
        usdRight.id = ''
        eurRight.id = 'clickButton'
        secondInput.value = ""
        firstInput.value = ""
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
                fetch('https://api.exchangerate.host/latest?base=EUR&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP2.textContent = `1 EUR = ${data.rates.RUB} RUB`
                    })
            })
    })
    aznRight.addEventListener('click', () => {
        usdRight.id = ''
        eurRight.id = ''
        aznRight.id = 'clickButton'
        secondInput.value = ""
        firstInput.value = ""
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
                fetch('https://api.exchangerate.host/latest?base=AZN&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP2.textContent = `1 AZN = ${data.rates.RUB} RUB`
                    })
            })
    })
})
/*I have a USD */
usdLeft.addEventListener('click', () => {
    usdLeft.id = 'clickButton'
    rubRight.id = 'clickButton'
    aznLeft.id = ''
    eurLeft.id = ''
    usdRight.id = ''
    aznRight.id = ''
    eurRight.id = ''
    rubLeft.id = ''
    secondInput.value = ""
    firstInput.value = ""
    fetch('https://api.exchangerate.host/latest?base=USD&symbols')
        .then(resp => resp.json())
        .then(data => {
            valyutaP1.textContent = `1 USD = ${data.rates.RUB} RUB`
            firstInput.addEventListener('keyup', () => {
                secondInput.value = firstInput.value * data.rates.RUB
            })
            fetch('https://api.exchangerate.host/latest?base=RUB&symbols')
                .then(resp => resp.json())
                .then(data => {
                    valyutaP2.textContent = `1 RUB = ${data.rates.USD} USD`
                })
        })
    eurRight.addEventListener('click', () => {
        aznRight.id = ''
        rubRight.id = ''
        eurRight.id = 'clickButton'
        secondInput.value = ""
        firstInput.value = ""
        fetch('https://api.exchangerate.host/latest?base=USD&symbols')
            .then(resp => resp.json())
            .then(data => {
                fetch('https://api.exchangerate.host/latest?base=USD&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP1.textContent = `1 USD = ${data.rates.EUR} EUR`
                    })
                firstInput.addEventListener('keyup', () => {
                    secondInput.value = firstInput.value * data.rates.EUR
                })
                fetch('https://api.exchangerate.host/latest?base=EUR&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP2.textContent = `1 EUR = ${data.rates.USD} USD`
                    })
            })
    })
    aznRight.addEventListener('click', () => {
        eurRight.id = ''
        rubRight.id = ''
        aznRight.id = 'clickButton'
        secondInput.value = ""
        firstInput.value = ""
        fetch('https://api.exchangerate.host/latest?base=USD&symbols')
            .then(resp => resp.json())
            .then(data => {
                fetch('https://api.exchangerate.host/latest?base=USD&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP1.textContent = `1 USD = ${data.rates.AZN} AZN`
                    })
                firstInput.addEventListener('keyup', () => {
                    secondInput.value = firstInput.value * data.rates.AZN
                })
                fetch('https://api.exchangerate.host/latest?base=AZN&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP2.textContent = `1 AZN = ${data.rates.USD} USD`
                    })
            })
    })
})
/*I have a EUR */
eurLeft.addEventListener('click', () => {
    eurLeft.id = 'clickButton'
    rubRight.id = 'clickButton'
    usdLeft.id = ''
    usdRight.id = ''
    aznRight.id = ''
    eurRight.id = ''
    rubLeft.id = ''
    aznLeft.id = ''
    secondInput.value = ""
    firstInput.value = ""
    fetch('https://api.exchangerate.host/latest?base=EUR&symbols')
        .then(resp => resp.json())
        .then(data => {
            valyutaP1.textContent = `1 EUR = ${data.rates.RUB} RUB`
            firstInput.addEventListener('keyup', () => {
                secondInput.value = firstInput.value * data.rates.RUB
            })
            fetch('https://api.exchangerate.host/latest?base=RUB&symbols')
                .then(resp => resp.json())
                .then(data => {
                    valyutaP2.textContent = `1 RUB = ${data.rates.EUR} EUR`
                })
        })
    usdRight.addEventListener('click', () => {
        usdRight.id = 'clickButton'
        aznRight.id = ''
        rubRight.id = ''
        eurRight.id = ''
        secondInput.value = ""
        firstInput.value = ""
        fetch('https://api.exchangerate.host/latest?base=EUR&symbols')
            .then(resp => resp.json())
            .then(data => {
                fetch('https://api.exchangerate.host/latest?base=EUR&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP1.textContent = `1 EUR = ${data.rates.USD} USD`
                    })
                firstInput.addEventListener('keyup', () => {
                    secondInput.value = firstInput.value * data.rates.USD
                })
                fetch('https://api.exchangerate.host/latest?base=USD&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP2.textContent = `1 USD = ${data.rates.EUR} EUR`
                    })
            })
    })
    aznRight.addEventListener('click', () => {
        usdRight.id = ''
        rubRight.id = ''
        aznRight.id = 'clickButton'
        secondInput.value = ""
        firstInput.value = ""
        fetch('https://api.exchangerate.host/latest?base=EUR&symbols')
            .then(resp => resp.json())
            .then(data => {
                fetch('https://api.exchangerate.host/latest?base=EUR&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP1.textContent = `1 EUR = ${data.rates.AZN} AZN`
                    })
                firstInput.addEventListener('keyup', () => {
                    secondInput.value = firstInput.value * data.rates.AZN
                })
                fetch('https://api.exchangerate.host/latest?base=AZN&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP2.textContent = `1 AZN = ${data.rates.EUR} EUR`
                    })
            })
    })
})
/*I have a AZN */
aznLeft.addEventListener('click', () => {
    aznLeft.id = 'clickButton'
    rubRight.id = 'clickButton'
    eurLeft.id = ''
    usdLeft.id = ''
    usdRight.id = ''
    aznRight.id = ''
    eurRight.id = ''
    rubLeft.id = ''
    secondInput.value = ""
    firstInput.value = ""
    fetch('https://api.exchangerate.host/latest?base=AZN&symbols')
        .then(resp => resp.json())
        .then(data => {
            valyutaP1.textContent = `1 AZN = ${data.rates.RUB} RUB`
            firstInput.addEventListener('keyup', () => {
                secondInput.value = firstInput.value * data.rates.RUB
            })
            fetch('https://api.exchangerate.host/latest?base=RUB&symbols')
                .then(resp => resp.json())
                .then(data => {
                    valyutaP2.textContent = `1 RUB = ${data.rates.AZN} AZN`
                })
        })
    usdRight.addEventListener('click', () => {
        usdRight.id = 'clickButton'
        aznRight.id = ''
        rubRight.id = ''
        eurRight.id = ''
        secondInput.value = ""
        firstInput.value = ""
        fetch('https://api.exchangerate.host/latest?base=AZN&symbols')
            .then(resp => resp.json())
            .then(data => {
                fetch('https://api.exchangerate.host/latest?base=EUR&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP1.textContent = `1 AZN = ${data.rates.USD} USD`
                    })
                firstInput.addEventListener('keyup', () => {
                    secondInput.value = firstInput.value * data.rates.USD
                })
                fetch('https://api.exchangerate.host/latest?base=USD&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP2.textContent = `1 USD = ${data.rates.AZN} AZN`
                    })
            })
    })
    eurRight.addEventListener('click', () => {
        usdRight.id = ''
        rubRight.id = ''
        eurRight.id = 'clickButton'
        secondInput.value = ""
        firstInput.value = ""
        fetch('https://api.exchangerate.host/latest?base=AZN&symbols')
            .then(resp => resp.json())
            .then(data => {
                fetch('https://api.exchangerate.host/latest?base=AZN&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP1.textContent = `1 AZN = ${data.rates.EUR} EUR`
                    })
                firstInput.addEventListener('keyup', () => {
                    secondInput.value = firstInput.value * data.rates.EUR
                })
                fetch('https://api.exchangerate.host/latest?base=EUR&symbols')
                    .then(resp => resp.json())
                    .then(data => {
                        valyutaP2.textContent = `1 EUR = ${data.rates.AZN} AZN`
                    })
            })
    })
})
/*RESET */
reset.addEventListener('click',()=>{
    reset.id = 'clickButton'
    location.reload();
})