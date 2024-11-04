const title="Lekce7-cv1 E-mail, pozdravy"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 

// E-mail, pozdravy
// Vytvořte email se stránkou obsahující 
//šablonu jednoduchého e-mailu.
const reciever = "John Newone"
const sender = "Lenka Siudová"

// Každý e-mail je třeba zakončit zdvořilým pozdravem.

// V souboru index.js vytvořte funkci bez parametrů 
// s názvem goodbye. 
// Tato funkce vloží do odstavce s třídou email__closing 
// rozloučení „Na shledanou“.
const goodbye = () => {
    const email_closing = document.querySelector(".email__closing")
    email_closing.textContent = "Good bye"
}
goodbye()

// Zavolejte funkci goodbye() na konci souboru index.js.
// Ověřte, že se na zobrazené stránce správně změnil pozdrav 
//na konci e-mailu.

// Končit e-mail jen slovy „Na shledanou“ je nezdvořilé. 
//Přidejte proto do funkce goodbye parametr představující 
//jméno pisatele e-mailu. 
//Funkce do posledního odstavce vloží koncový pozdrav i se jménem. 
//Příklad použití:

// goodbye('Pavel Ovesný');
// Ve stránce bude

// S pozdravem Pavel Ovesný
const goodbye2 = async (_sender) => { 
    await wait(2000)
    const email_closing = document.querySelector(".email__closing")
    email_closing.textContent = `Best regards ${_sender}`
}
function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
goodbye2(sender)
