const title="Lekce7-cv3 Převod měny"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
// Napište funkci convertToCZK, která převede částku zadanou v cízí měně 
//na české koruny. Funkce bude podporovat následující měny a kurzy.

// Měna	    Kód	    Kurz
// Euro	    EUR	2   4.47
// Britská  libra	GBP	28.09
// Americký dolar	USD	24.81
// Bitcoin	BTC	    478637
// Výslednou částku zakrouhlete na celé koruny. Příklad použití:
function convertToCZK(amount, currency){
    const result = "x"
    return result
}

document.body.innerHTML += convertToCZK(25, 'EUR');
// Pokud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek null. Otestujte funkci výpisem výsledku do stránky.