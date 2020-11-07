let allCurrency;
fetch( 'https://developerhub.alfabank.by:8273/partner/1.0.0/public/nationalRates')
    .then(response => response.json())
    .then(currenceChnge =>{
        allCurrency = currenceChnge
        let currency ={
            usd : {},
            eur : {},
            rub : {}
        };
        console.log('allCurrency', allCurrency);
        currency.usd = allCurrency.rates.find((rate) => rate.iso === 'USD');
        currency.eur = allCurrency.rates.find((rate) => rate.iso === 'EUR');
        currency.rub = allCurrency.rates.find((rate) => rate.iso === 'RUB');
        document.querySelector('.currency-usd').innerHTML = currency.usd.rate;
        document.querySelector('.currency-eur').innerHTML = currency.eur.rate;
        document.querySelector('.currency-rub').innerHTML = currency.rub.rate;
        console.log(currency);
    })