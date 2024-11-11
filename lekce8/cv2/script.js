const title="Lekce8-cv2 E-mail podruhé"
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
function goodbye(name=sender)  {
    const email_closing = document.querySelector(".email__closing")
    email_closing.textContent = "S pozdravem "+name
}
//goodbye()

  
function fillSubject(subject) {
document.querySelector('.email__subject').textContent = subject;
};



// Všimněte si funkce goodbye, která generuje pozdrav na konec e-mailu. 
//Přidejte alespoň dvě další funkce, kde každá generuje k zadanému jménu jiný typ pozdravu. 
//Například formalGoodbye pro velmi formální pozdravy jako „S uctivou poklonou…“, 
function formalGoodbye(name) {
    const email_closing = document.querySelector(".email__closing")
    email_closing.textContent = "S uctivou poklonou… "+name
    return "S uctivou poklonou… "+name
}
//formalGoodbye()

//nebo naopak rudeGoodbye typu „Se měj…“, pokud se chcete rozloučit nevybíravě.
function rudeGoodbye(name=sender) {
    const email_closing = document.querySelector(".email__closing")
    email_closing.textContent = "Čus, "+ name
    return "Čus, "+ name;
}
//rudeGoodbye()

function fillBody(body, name, fn) {
const bodyElm = document.querySelector('.email__body');
bodyElm.innerHTML = body;
const closingElm = document.querySelector('.email__closing');
closingElm.textContent = fn(name);
};

// Upravte funkci fillBody tak, aby brala třetí parametr goodbyeFunction představující funkci, 
//pomocí které se má vygenerovat závěrečný pozdrav. Vyzkoušejte zavolat funkci fillBody postupně s každou z vašich zdravících funkcí a ověřte, že vše správně funguje.

// Ukázka použití
//   fillSubject('Obchodní sdělení');
//   fillBody(
//    'Kupte mycí prostředek, který vám vytře zrak, se slevou 50%.',
//     'Jan Čistý', 
//     rudeGoodbye   
//   );
//nebo

 fillSubject('Pozvánka na oslavu narozenin');

 fillBody('Zítra oslava. 18:00 ve Starý hospodě.', 'Patrik Veselý', formalGoodbye);
 


 