//Lekce 4
const jmeno = "    Lenka   "
const heslo = "12345#"
//             012345  

//Cvičení: Práce s řetězci
//Trim se pouziva pro stringy AKA textove retezce
 //console.log(jmeno) 
 //console.log(jmeno.trim()) 
 //console.log(jmeno.length) 
 //console.log(heslo.slice(1,5)) 
 

// ###############################################################################
document.body.innerHTML += "<h2> Úkol 1 Vlastnosti a metody </h2>";
//Úkol Vlastnosti a metody

//V JavaScriptovém programu si založte proměnnou title 
//a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). 
let title ="Harry Potter"
//Proveďte následující úkoly.

//Vypište do stránky počet znaků názvu.
document.body.innerHTML += "<p>počet znaků "+title.length+" </p>";
//Vypište název filmu převedený na velká písmena.
document.body.innerHTML += "<p>název filmu převedený na velká písmena "
                            +title.toUpperCase()+" </p>";
//Vypište z názvu prvních pět písmen.
document.body.innerHTML += "<p> "+title.slice(0,5)+" </p>";
//Vypište z názvu posledních pět písmen.
document.body.innerHTML += "<p> "+title.slice(title.length-5,title.length)+" </p>";



// ###############################################################################
document.body.innerHTML += "<h2> Úkol 2 E-maily</h2>";
/*E-maily
Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu
jmeno.prijmeni@domena
Tedy například:
petr.novak@gmail.com
romana.nejedla@czechitas.cz
slavomir.ponuchalek@yahoo.com
Postupujte dle následujících kroků.

Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.

Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. 
Tuto pozici si uložte do proměnné atIndex. 
Pomocí metody slice získejte z e-mailu první část představující 
uživatelské jméno uživatele.
Dále z e-mailu získejte název domény tedy například gmail.com.
Ze získaných informací vytvořte objekt, který bude vypadat například takto:
const parsedEmail = {
  userName: 'slavomir.ponuchalek',
  domain: 'yahoo.com',
};
Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište 
jako odstavec.
*/

//let email = prompt("Zadejte email.", "petr.novak@gmail.com")
let email = "petr.novak@gmail.com"
let atIndex = email.indexOf("@")


let parsedEmail = {
  userName: email.slice(0,atIndex),
  domain: email.slice(atIndex, email.length),
};

document.body.innerHTML += "<p> "+parsedEmail.userName+" </p>";
document.body.innerHTML += "<p> "+parsedEmail.domain+" </p>";

document.body.innerHTML += "<p> "+" </p>";



// ###############################################################################
document.body.innerHTML += "<h2> Úkol 3 Doručování</h2>";
/*
Doručování
Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely
 doručení objednaného zboží. 
 Požaduje ulici, 
 číslo domu, 
 město a 
 PSČ.

Uložte všechny údaje do vhodně pojmenovaných proměnných.
Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve 
formátu jako níže
<address>
  <p>Pod Stájemi 67</p>
  <p>12754 Klysnov</p>
</address>
Pomocí document.body.innerHTML vložte sestavené HTML do stránky.
*/

//let ulice = prompt("Zadejte ulice.", "Pod Stájemi")
//let cisloDomu= prompt("Zadejte cisloDomu.", "67")
//let mesto = prompt("Zadejte mesto.", "Klysnov")
//let psc= prompt("Zadejte psc.", "12754")

let ulice = "Pod Stájemi"
let cisloDomu=  "67"
let mesto = "Klysnov"
let psc=  "12754"
document.body.innerHTML += `
<address>
  <p>${ulice} ${cisloDomu}</p>
  <p>${psc} ${mesto}</p>
</address>
`


// ###############################################################################
document.body.innerHTML += "<h2> Úkol 4 Podmínky očkování</h2>";
/*  
Cvičení: Podmínky na očkování
Registrace na očkování
V předchozí lekci jsme vytvářeli stránku pro registraci na očkování. 
Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel 
zadal také heslo. 
To bychom v pozdější verzi aplikaci mohli použít
 například k přihlášení do systému.

Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. 
Uložte si je do dobře pojmenovaných proměnných.
Napište první podmínku, 
ve které zkontrolujte, že věk uživatele je větší 
nebo roven 65. 
Pokud ano, vypište do stránky „věk v pořádku“. 
Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší 
než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat
 pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let).
*/

//let name = prompt("Zadejte jméno.", "Jan Novák")
//let age = Number(prompt("Zadejte věk.", "68"))
//let pw = prompt("Zadejte heslo.", "12345#")
let name = "Jan Novák"
let age = "65"
let pw =  "12345678#"


let ageOK = false
//Poté, co uživatel zadá všechny údaje, vypište do stránky odstavec 
//s obsahem ve tvaru
//Květoslav Voňavý, věk: 67
document.body.innerHTML += "<p>" + name +", věk:"+age+ "</p>";

function ageCheck(age){
  if(age>=65){
    document.body.innerHTML += "<p>„věk v pořádku“</p>";
    ageOK = true
  } else {
    document.body.innerHTML += "<p>„nízký věk“</p>";
    ageOK = false
  }
}
console.log("pw.length: "+pw.length)

function pwCheck(password){
  if(password.length<8 && ageOK === true)
    {
      document.body.innerHTML += "<p>„slabé heslo“</p>";
    }  
}

ageCheck(age)
pwCheck(pw)

// ###############################################################################
document.body.innerHTML += "<h2> Úkol 5 Cena vstupenky</h2>";
// Cena vstupenky
// Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky 
// do divadla.
// Založte si webovou stránku s JavaScriptem.
// Nechte uživatele zadat jeho věk.

//const vekDivadlo = Number(prompt("Zadejte věk.", "27"))
let vekDivadlo = 27

// Vytvořte si proměnnou plnaCena, udávající základní cenu vstupenky 
// a uložte do ní hodnotu 12.
const plnaCena = 12

let platba 
// Vytvořte podmínku, která do proměnné cena uloží cenu spočítanou 
// podle věku uživatele dle následujících pravidel:
  
// 0 euro pro návštěvníky mladší 6 let,
if (vekDivadlo<6){ 
  platba = 0 
}  
// 65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),  
if (vekDivadlo>=6 && vekDivadlo<=26){ 
  platba = plnaCena*0.65 
}
// 100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
if (vekDivadlo>=27 && vekDivadlo<=64){
  platba = plnaCena
}
// 50 % ze základní ceny pro ostatní (senior).
if (vekDivadlo>=65){
  platba = plnaCena*0.5
}
// Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých eurech.
platba = Math.round(platba)
 
// Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.
document.body.innerHTML += `
<p>pro divaka ve veku ${vekDivadlo} </p>
<p>bude vstupenka stat ${platba} Eur </p>
`
