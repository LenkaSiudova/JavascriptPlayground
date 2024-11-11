const title="Lekce8-cv4 Kontrola dostupnosti"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
// Vyjděte z řešení předchozího příkladu, kdy se objednává při kliknutí na tlačítko.

// Zařiďte úpravou přímo v HTML souboru, aby při načtení stránky tlačítko obsahovalo zprávu Kontroluji dostupnost…
// Přidejte do stránky zpoždění pomocí funkce setTimeout, která zařídí, že 8 vteřin po načtení stránky 
//se zpráva na tlačítku změní na Objednat.




const btnElement = document.querySelector("#button-order")
setTimeout(() => {
    btnElement.textContent="Objednáno"
    btnElement.disabled = false
},1500)

// Tlačítka mají speciální HTML atribut s názvem disabled. 
//Pokud je tento atribut přítomen, na tlačítko se nedá kliknout. 
//Přidejte tento atribut do HTML kódu tlačítka, aby tlačítko bylo při načtení stránky nedostupné/neklikatelné.
// Až po uplynutí časovače jej zpřístupněte nastavením vlastnosti disabled v JavaScriptu na false.

btnElement.addEventListener("click", () => {btnElement.textContent="Objednáno"})