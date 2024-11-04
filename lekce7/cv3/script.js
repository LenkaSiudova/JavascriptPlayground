const title="Lekce7-cv3 Převod měny"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
// Napište funkci convertToCZK, která převede částku zadanou v cízí měně 
//na české koruny. Funkce bude podporovat následující měny a kurzy.

// Měna	    Kód	    Kurz
// Euro	    EUR	   4.47
// Britská  libra	GBP	28.09
// Americký dolar	USD	24.81
// Bitcoin	BTC	    478637
// Výslednou částku zakrouhlete na celé koruny. Příklad použití:
function convertToCZK(amount, currency){    
    if(currency==="EUR") return amount*4.47+"CZK"
    if(currency==="libra") return amount*28.09+"CZK"
    if(currency==="dolar") return amount*24.81+"CZK"
    if(currency==="BTC") return amount*478637+"CZK"
}

document.body.innerHTML += "<br>4, 'EUR' is "+convertToCZK(4, 'EUR');
document.body.innerHTML += "<br>3, 'libra' is "+convertToCZK(3, 'libra');
document.body.innerHTML += "<br>2, 'dolar' is "+convertToCZK(2, 'dolar');
document.body.innerHTML += "<br>1, 'BTC' is "+convertToCZK(1, 'BTC');
// Pokud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek null. Otestujte funkci výpisem výsledku do stránky.