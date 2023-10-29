const convertButton = document.querySelector(".convert-button")
const selectCurrency = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value

    const currencyValue = document.querySelector(".currency-value-to-convert")

    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(selectCurrency.value)

    const dolarToday = 5.20
    const euroToday = 6.30
    const btcToday = 172072.75
    const libraToday = 6.03

    if (selectCurrency.value == "BTC") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency / btcToday)

    }
  
    if (selectCurrency.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency / libraToday)

    }


    if (selectCurrency.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarToday)

    }

    if (selectCurrency.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroToday)
    }

    currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)

    console.log(convertValues)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".usa-flag")

    if (selectCurrency.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./ASSETS/eua.png"
    }

    if (selectCurrency.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./ASSETS/euro.png"
    }

    if (selectCurrency.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./ASSETS/libra.png"
    }
    
    if (selectCurrency.value == "BTC") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./ASSETS/bitcoin.png"


    }

    convertValues()
}

convertButton.addEventListener("click", convertValues)
selectCurrency.addEventListener("change", changeCurrency)