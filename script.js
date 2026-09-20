const convertButton = document.querySelector(".convert-button");
const firstCurrencySelect = document.querySelector(".first-currency-select");
const secondCurrencySelect = document.querySelector(".second-currency-select");


const inputCurrency = document.querySelector(".input-currency");

const firstCurrencyName = document.querySelector(".currency-1");
const firstCurrencyImage = document.querySelector(".converter-img");

const secondCurrencyName = document.getElementById("currency-name");
const secondCurrencyImage = document.querySelector(".currency-img");

const currencyValueToConvertElement = document.querySelector(".currency-value-to-convert");
const currencyValueConvertedElement = document.querySelector(".currency-value");

const rates = {
  real: 1,
  dolar: 5.12,
  euro: 5.94,
  libra: 6.94,
  bitcoin: 392368,
};


function convertValues() {

  const inputAmount = parseFloat(inputCurrency.value.replace(",", "."));

  if (isNaN(inputAmount)){
    currencyValueToConvertElement.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency:"BRL"}).format(0);
    currencyValueConvertedElement.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency:"BRL"}).format(0);
    return;
  }
  
 const fromCurrency = firstCurrencySelect.value;
 const toCurrency = secondCurrencySelect.value;


 let valueInBRL;
 let fromCurrencyCode;
 let fromCurrencyLocale;

 switch(fromCurrency){
    case "real":
      valueInBRL = inputAmount;
      fromCurrencyCode = "BRL";
      fromCurrencyLocale = "pt-BR";
      break;

    case "dolar":
      valueInBRL = inputAmount * rates.dolar;
      fromCurrencyCode = "USD";
      fromCurrencyLocale = "en-US";
      break;

    case "euro":
      valueInBRL = inputAmount * rates.euro;
      fromCurrencyCode = "EUR";
      fromCurrencyLocale = "de-DE";
      break;
    
    case "libra":
      valueInBRL = inputAmount * rates.libra;
      fromCurrencyCode = "GBP";
      fromCurrencyLocale = "en-GB";
      break;

    case "bitcoin":
      valueInBRL = inputAmount * rates.bitcoin;
      fromCurrencyCode = "BTC";
      fromCurrencyLocale = "en-US";
      break;

    default:
      valueInBRL = inputAmount;
      fromCurrencyCode = "BRL";
      fromCurrencyLocale = "pt-BR";
 }

 let convertedAmount;
 let toCurrencyCode;
 let toCurrencyLocale;

 switch(toCurrency){
    case "real":
      convertedAmount = valueInBRL;
      toCurrencyCode = "BRL";
      toCurrencyLocale = "pt-BR";
      break;

    case "dolar":
      convertedAmount = valueInBRL / rates.dolar;
      toCurrencyCode = "USD";
      toCurrencyLocale = "en-US";
      break;

    case "euro":
      convertedAmount = valueInBRL / rates.euro;
      toCurrencyCode = "EUR";
      toCurrencyLocale = "de-DE";
      break;

    case "libra":
      convertedAmount = valueInBRL / rates.libra;
      toCurrencyCode = "GBP";
      toCurrencyLocale = "en-GB";
      break;

    case "bitcoin":
      convertedAmount = valueInBRL / rates.bitcoin;
      toCurrencyCode = "BTC";
      toCurrencyLocale = "en-US";
      break;

    default:
      convertedAmount = valueInBRL;
      toCurrencyCode = "BRL";
      toCurrencyLocale = "pt-BR";
 }

    currencyValueToConvertElement.innerHTML = new Intl.NumberFormat(fromCurrencyLocale, {
        style: "currency",
        currency: fromCurrencyCode,
    }).format(inputAmount);
 
    currencyValueConvertedElement.innerHTML = new Intl.NumberFormat(toCurrencyLocale, {
        style: "currency",
        currency: toCurrencyCode,
    }).format(convertedAmount);
}


function changeCurrency() {
   
    if (firstCurrencySelect.value == "real") {
        firstCurrencyName.innerHTML = "Real"; 
        firstCurrencyImage.src = "./assets/brazil.jpg";
    } else if (firstCurrencySelect.value == "dolar") {
        firstCurrencyName.innerHTML = "Dólar Americano";
        firstCurrencyImage.src = "./assets/dolar.jpg";
    } else if (firstCurrencySelect.value == "euro") {
        firstCurrencyName.innerHTML = "Euro";
        firstCurrencyImage.src = "./assets/euro.jpg";
    } else if (firstCurrencySelect.value == "libra") {
        firstCurrencyName.innerHTML = "Libra";
        firstCurrencyImage.src = "./assets/libra.jpg";
    } else if (firstCurrencySelect.value == "bitcoin") {
        firstCurrencyName.innerHTML = "Bitcoin";
        firstCurrencyImage.src = "./assets/bitcoin.png";
    }

    
    if (secondCurrencySelect.value == "real") {
        secondCurrencyName.innerHTML = "Real";
        secondCurrencyImage.src = "./assets/brazil.jpg";
    } else if (secondCurrencySelect.value == "dolar") {
        secondCurrencyName.innerHTML = "Dólar Americano";
        secondCurrencyImage.src = "./assets/dolar.jpg";
    } else if (secondCurrencySelect.value == "euro") {
        secondCurrencyName.innerHTML = "Euro";
        secondCurrencyImage.src = "./assets/euro.jpg";
    } else if (secondCurrencySelect.value == "libra") {
        secondCurrencyName.innerHTML = "Libra";
        secondCurrencyImage.src = "./assets/libra.jpg";
    } else if (secondCurrencySelect.value == "bitcoin") {
        secondCurrencyName.innerHTML = "Bitcoin";
        secondCurrencyImage.src = "./assets/bitcoin.png";
    }

   
    convertValues();
  }
  
convertButton.addEventListener("click", convertValues);
firstCurrencySelect.addEventListener("change", changeCurrency);
secondCurrencySelect.addEventListener("change", changeCurrency);

inputCurrency.addEventListener("input", convertValues);

changeCurrency();

