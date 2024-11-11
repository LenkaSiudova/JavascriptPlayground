const title="Lekce8-cv5 Kontrola dosupnosti"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
console.log('funguju!');
// Pomocí JavaScriptu zařiďte, aby se při stisknutí libovolné klávesy na stránce 
//přidala k elementu žárovky CSS třída bulb--on. Žárovka by se takto měla rozsvítit.
const body = document.querySelector("body")
const zarovka = document.querySelector(".bulb")
//body.addEventListener("click", () => {zarovka.classList= "bulb--on"})


// Vylepšete program tak, aby na následné stisknutí libovolné klávesy žárovka opět zhasnula. 
//Opakovaným mačkáním kláves ji tak můžeme rozsvěcovat a zhasínat.

body.addEventListener("click", () => { 
    if (zarovka.classList.contains("bulb--on")) 
        { 
            zarovka.classList= "bulb"
        } else { 
            zarovka.classList= "bulb--on"
        } 
    })