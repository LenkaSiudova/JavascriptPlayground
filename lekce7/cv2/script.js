const title="Lekce7-cv2 E-mail, tělo"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
const reciever = "John Newone"
const sender = "Lenka Siudová"


const goodbye2 =  (_sender) => {     
    const email_closing = document.querySelector(".email__closing")
    email_closing.textContent = `Best regards ${_sender}`
}

goodbye2(sender)

// Do souboru index.js přidejte funkci 
//fillSubject s jedním parametrem subject. 
const fillSubject = (subject) => {
    //Tato funkce ze stránky vybere DOM element představující předmět e-mailu
    const subjecElement = document.querySelector(".email__subject")
    // a nastaví jeho obsah na řetězec, který přišel v parametru.
    subjecElement.textContent = subject
}
// Zavolejte funkci na konci souboru index.js a vykoušejte si nastavit předmět e-mailu 
//na nějaký smysluplný text.
fillSubject("Jiný předmět")
// Napište funkci fillBody s jedním parametrem body, 
async function fillBody(body) {
    await wait(2000)
    const subjecBody = document.querySelector(".email__content")
    // a nastaví jeho obsah na řetězec, který přišel v parametru.
    subjecBody.textContent = body
}
//která ze stránky vybere element představující tělo e-mailu a nastaví jeho obsah dle hodnoty parametru.
// Zavolejte funkci na konci souboru index.js a ověřte, že v zobrazené stránce správně změní tělo e-mailu.
fillBody("Text emailu byl vymazán!")
// Z předchozího cvičení nám zůstala funkce goodbye. Do funkce fillBody přidejte další parametr s názvem name. Tento parametr bude představovat jméno odesílatele. Funkce vyplní tělo e-mailu a do elementu email__closing vloží pozdrav, který vyrobí pomocí volání funkce goodbye.

function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }

