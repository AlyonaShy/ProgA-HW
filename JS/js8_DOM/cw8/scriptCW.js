const data = [{"baseCurrency":"UAH","currency":"AUD","saleRateNB":24.6326000,"purchaseRateNB":24.6326000}
,{"baseCurrency":"UAH","currency":"AZN","saleRateNB":21.5515000,"purchaseRateNB":21.5515000},{"baseCurrency":"UAH","currency":"BYN","saleRateNB":13.2919000,"purchaseRateNB":13.2919000},{"baseCurrency":"UAH","currency":"CAD","saleRateNB":27.2890000,"purchaseRateNB":27.2890000},{"baseCurrency":"UAH","currency":"CHF","saleRateNB":41.0629000,"purchaseRateNB":41.0629000,"saleRate":42.3000000,"purchaseRate":41.0600000},{"baseCurrency":"UAH","currency":"CNY","saleRateNB":5.3167000,"purchaseRateNB":5.3167000},{"baseCurrency":"UAH","currency":"CZK","saleRateNB":1.7294000,"purchaseRateNB":1.7294000,"saleRate":1.7750000,"purchaseRate":1.7250000},{"baseCurrency":"UAH","currency":"DKK","saleRateNB":5.4038000,"purchaseRateNB":5.4038000},{"baseCurrency":"UAH","currency":"EUR","saleRateNB":40.2639000,"purchaseRateNB":40.2639000,"saleRate":41.5000000,"purchaseRate":40.5000000},{"baseCurrency":"UAH","currency":"GBP","saleRateNB":45.7199000,"purchaseRateNB":45.7199000,"saleRate":47.0000000,"purchaseRate":45.7100000},{"baseCurrency":"UAH","currency":"GEL","saleRateNB":14.3288000,"purchaseRateNB":14.3288000},{"baseCurrency":"UAH","currency":"HUF","saleRateNB":0.1074950,"purchaseRateNB":0.1074950},{"baseCurrency":"UAH","currency":"ILS","saleRateNB":9.9993000,"purchaseRateNB":9.9993000},{"baseCurrency":"UAH","currency":"JPY","saleRateNB":0.2742400,"purchaseRateNB":0.2742400},{"baseCurrency":"UAH","currency":"KZT","saleRateNB":0.0810910,"purchaseRateNB":0.0810910},{"baseCurrency":"UAH","currency":"MDL","saleRateNB":2.0257000,"purchaseRateNB":2.0257000},{"baseCurrency":"UAH","currency":"NOK","saleRateNB":3.5131000,"purchaseRateNB":3.5131000},{"baseCurrency":"UAH","currency":"PLN","saleRateNB":8.6896000,"purchaseRateNB":8.6896000,"saleRate":8.9200000,"purchaseRate":8.6800000},{"baseCurrency":"UAH","currency":"SEK","saleRateNB":3.5356000,"purchaseRateNB":3.5356000},{"baseCurrency":"UAH","currency":"SGD","saleRateNB":27.5927000,"purchaseRateNB":27.5927000},{"baseCurrency":"UAH","currency":"TMT","saleRateNB":10.4482000,"purchaseRateNB":10.4482000},{"baseCurrency":"UAH","currency":"TRY","saleRateNB":1.8919000,"purchaseRateNB":1.8919000},{"baseCurrency":"UAH","currency":"UAH","saleRateNB":1.0000000,"purchaseRateNB":1.0000000},{"baseCurrency":"UAH","currency":"USD","saleRateNB":36.5686000,"purchaseRateNB":36.5686000,"saleRate":37.7500000,"purchaseRate":37.2500000}, {"baseCurrency":"UAH","currency":"UZS","saleRateNB":0.0031985,"purchaseRateNB":0.0031985}];



const myDiv = document.querySelector("#root");

for(i = 0; i <= data.length; i++) {
    const newdiv = document.createElement("p");
    if (data[i].saleRate != undefined) {
    newdiv.innerHTML = `Курс ${data[i].currency}  до гривні НБУ: ${data[i].saleRateNB} / ${data[i].purchaseRateNB}, ринок: ${data[i].saleRate} / ${data[i].purchaseRate}`
    } else {
        newdiv.innerHTML = `Курс ${data[i].currency}  до гривні НБУ: ${data[i].saleRateNB} / ${data[i].purchaseRateNB}, ринок: дані відсутні`
    }
    myDiv.appendChild(newdiv);   
}

