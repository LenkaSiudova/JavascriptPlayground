const title="Lekce9-cv1 Objednavka"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
// Podle instrukcí níže vytvořte jednoduchý formulář pro dokončení objednávky 
// na nějakém e-shopu. Formulář umožní uživateli zadat číslo platební karty a způsob dopravy.

// Vytvořte si novou složku a vytvořte v ní soubory - index.html, style.css a script.js. 
// Soubory propojte.
// Do souboru style.css vložte styly pro formuláře ať se nemusíte trápit se stylováním.

// Vytvořte formulář s textovým políčkem pro číslo platební karty. 
// Dejte mu štítek „Platební karta“ a atribut type nastavte na text.
// Přidejte do formuláře rozbalovací nabídku se štítkem „Doprava“. 
// Jako jednotlivé možnosti použijte prvky option s následujícím obsahem:

// vyzvednout na pobočce, atribut value="pobocka",
// Zásilkovna, atribut value="zasilkovna",
// Česká pošta, atribut value="posta",
// PPL, atribut value="ppl".
// Přidejte tlačítko „Odeslat objednávku“.

// Přidejte posluchače na událost submit. Jakmile uživatel formulář odešle, 
// nahraďte celý formulář zprávou „Objednávka odeslána ke zpracování.“

document.querySelector("#order_form").addEventListener("submit", (e) => {
    e.preventDefault()
    const card = document.querySelector("#card").value
    const doprava = document.querySelector("#doprava").value
    
    console.log(`${card} ${doprava} `)
    const message = document.querySelector("#order_form")
    console.log(card.length)

    if(card.length = 16){
        message.textContent = ` Hotovo. Obědnávka odeslána ke zpracování.
        Zkontrolujte údaje: 
        Platební karta: ${card} 
        Doprava : ${doprava}.
        `
        } else {
            message.textContent = `Číslo platební karty nemělo 16 znaků obědnávka odmítnuta.
        Platební karta: ${card}         
        `

        }

  } )

// Bonus 1
// Zkuste si po odeslání formuláře zobrazit všechny hodnoty, které uživatel vyplnil.
// Vypište je do konzole.
// Pohledem do konzole ověřte, že pokud uživatel zadá jako dopravu Českou poštu,
// v konzoli se objeví hodnota posta.✅

// Bonus 2
// Platební karta musí mít přesně 16 číslic. ✅
// Pokud uživatel zadá méně nebo více,
// zobrazte pod formulářem chybovou hlášku. Pro hlášku si v HTML souboru připravte prvek <p>.
// Hlášku zobrazte s každým novým vstupem od uživatele (událost input na prvku <input>). 
// Pokud je vše v pořádku, chybovou hlášku smažte.

// Pro příliš krátkou kartu použijte text „Číslo karty je příliš krátké. Chybí X číslic.“
// Pro příliš dlouhou kartu použijte text „Číslo karty je moc dlouhé. Přebývá X číslic.“
// Zkuste místo události input poslouchat na událost change. Jak se liší jejich chování? 
// Která varianta je lepší? input nebo change?

