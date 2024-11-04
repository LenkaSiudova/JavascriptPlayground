const title="Lekce7-cv5 Výplňořez"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
// Výplňořez
// Napište funkci fillcut, která jako svůj první parametr str očekává řetězec 
// a jako druhý parametr len kladné celé číslo. 
// Úkolem funkce je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku 
// přesně len.

 function fillcut(string, intLength){
    // Pokud je vstupní řetězec delší než len, tak funkce odřízne 
    // jeho konec a vrátí výsledek.
    if(string.length > intLength) {
        document.body.innerHTML += 'A <br>'
        return string.substring(0,intLength)
    }
    // Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky 
    // a vrátí výsledek.
    if(string.length < intLength) {
        document.body.innerHTML += 'B <br>'
        while (string.length < intLength){
            string = "." +string           
        }
        return string
    }
    // Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny.
    // Příklad použití:
    if(string.length === intLength) {
        document.body.innerHTML += 'C <br>'
        return string
    }
}
document.body.innerHTML += fillcut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillcut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillcut('petr', 4) + '<br>'; // vypíše „petr“

