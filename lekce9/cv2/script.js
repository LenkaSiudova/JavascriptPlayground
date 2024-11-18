const title="Lekce9-cv2 Newsletter"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 

// Vytvořte si novou složku a vytvořte v ní soubory - index.html, style.css a script.js. 
// Soubory propojte.

// Vložte do ní 
//formulář s textovým políčkem 
//a tlačítkem pro přihlášení k odběru.

// Vytvořte posluchač pro událost submit. Jakmile uživatel zadá svůj e-mail 
// a potvrdí přihlášení, zobrazte na stránce místo formuláře zprávu 
// o úspěšném přihlášení k odběru.
document.querySelector("#newsleter_form").addEventListener("submit", (e) => {
    e.preventDefault()
    const email = document.querySelector("#email").value
    console.log(`${email} `)
    const message = document.querySelector("#newsleter_form")
    message.textContent = `
    Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.
    `
  } )

  

// Texty můžete vymyslet vlastní nebo využít následující:

// Jednou za týden posíláme newsletter ze světa frontendu a UX.
// Zadejte svůj e-mail a zůstaňte v obraze.
// Odebírat
// Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX 
// na vaší adrese adresa@domena.cz.
// Pokud máte čas a chuť, nastylujte stránku dle svého citu. 
// Obrázek výše může posloužit jako inspirace.

