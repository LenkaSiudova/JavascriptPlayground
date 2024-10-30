//Lekce 6
document.body.innerHTML += `<h1>Lekce6-cv1 <br> Základní validace</h1>`







//Vytvořte prázdnou stránku, do které vložte knihovnu validator.js a svůj JavaScript index.js.

// Ověřte pomocí metody validator.isEmail platnost vaší e-mailovou adresu.
console.log(validator)
console.log(validator.isEmail("Lenka@seznam.cz"))

// Pokud máte po ruce platební kartu, ověřte, že má platné číslo pomocí metody isCreditCard. 
// Případně můžete otestovat kartu 4125010001000208.

// Do těla stránky vložte prázdný odstavec, který bude zobrazovat zprávu pro uživatele.
document.body.innerHTML += `<p id="msg" class="msg"></p>`
let odstavec = document.querySelector(".msg") 
// <p id="msg" class="msg"></p>

// Napojte do stránky váš vlastní javascriptový soubor index.js.    -?? na co další soubor?
// Pomocí funkce prompt požádejte uživatele o jeho e-mail. 
const email = prompt("Zadejte email.", "Lenka@seznam.cz")


//V případě, že jde o platný e-mail, zobrazte v připraveném odstavci zprávu „E-mail v pořádku“. 
//V opačném případě zobrazte „Neplatný e-mail“.

if(validator.isEmail(email)){
    odstavec.textContent = "E-mail v pořádku"    
    odstavec.classList.add("--valid")
} else {
    odstavec.textContent = "Neplatný e-mail"
    odstavec.classList.add("--invalid")
}

// Pokud je e-mail platný, přidejte zároveň na odstavec CSS třídu msg--valid. 
//V opačném případě použijte třídu msg--invalid. 

//Přidejte do stránky soubor style.css a třídy nastylujte například tak, 
//že msg --valid bude mít zelené pozadí a msg --invalid naopak červené.

// <!-- index.html -->
// <link rel="stylesheet" href="style.css" />
// /* style.css */
// .msg {
//   color: white;
//   padding: 10px;
// }
// .msg--valid {
//   background-color: green;
// }
// .msg--invalid {
//   background-color: red;
// }
// Stránku postupně otestujte zadáním platné i neplatné adresy.










console.log(validator)
console.log(validator.isEmail("Lenka@seznam.cz"))
console.log(validator.isMobilePhone("111 222 333", "cs-CZ"))
console.log(validator.isPostalCode("73932", "CZ"))

// const email = prompt("Zadejte email.", "pepik@seznam.cz")

// if(validator.isEmail(email)){
//      document.body.innerHTML = "<h2> Welcome </h2>"
//  } else {
//      document.body.innerHTML = "<h2> no! </h2>"
//  }

const time = new Date()
console.log(time.getDate())
console.log(time.getDay())
console.log(time.getHours())
console.log(time.getTime())


const time2 = dayjs()
console.log(time2)
console.log(time2.format("DD-MM-YYYY"))

const novyRok = dayjs("2025-01-01")
console.log(novyRok)
console.log(time2.isAfter(novyRok)) //false
// https://day.js.org/docs/en/installation/installation