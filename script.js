

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-value")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-valeu-to-convert")
    const currencyValueConverted = document.querySelector(".currency-valeu")
  
    console.log(currencySelect.value)

    const dolarToday = 5.20
    const euroToday = 6.20

    if(currencySelect.value == 'dolar'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-Us", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
    }

     if(currencySelect.value == 'euro'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)    
}

convertButton.addEventListener("click", convertValues)

