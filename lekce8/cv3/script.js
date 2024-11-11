const title="Lekce8-cv3 Objednavka"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
// Vytvoříme jednoduchou stránku s objednávacím tlačítkem.

// Založte HTML stránku s jedním tlačítkem
// <button id="button-order">Objednat</button>

// Doplňte do stránky JavaScriptový program, který zařídí, že 
//po stisknutí tlačítka se do stránky za tlačítko vypíše odstavec:
// <p>Objednáno</p>
const btnElement = document.querySelector("#button-order")
//btnElement.addEventListener("click", () => {document.body.innerHTML += `<p>Objednáno</p>`})

// Upravte program tak, že text se nevypíše do stránky, ale zobrazí se na samotném tlačítku.
btnElement.addEventListener("click", () => {btnElement.textContent="Objednáno"})