document.body.innerHTML = "<h2>Hello world!<h2>"
document.body.innerHTML += "<p>"+ (1+1) +"</p>";
document.body.innerHTML += "<p>"+ (10*10) +"</p>";
// komentář na 1 řádek
/* komentář 
na více řádků
*/
// deleni bez zbytku %
document.body.innerHTML += "<p>" + (3 % 2) + "</p>"

document.body.innerHTML += "<h3>Math.ceil<h3>"
// Math.ceil- zaokrouhlování nahoru
document.body.innerHTML += "<p>" + Math.ceil(3 / 2) + "</p>"
// Math.floor - zaokrouhlování dolů
document.body.innerHTML += "<p>" + Math.floor(3 / 2) + "</p>"
//Math.random - generování náhod. čísel
document.body.innerHTML += "<p>" + Math.random() + "</p>"
document.body.innerHTML += "<p>" + Math.floor(Math.random()*100) + "</p>"

//Proměnné- Variables !!!!!!!!!!! klíčové slovo-proměnná- hodnota
document.body.innerHTML = "<h3>Proměnné - Variables !!!!!!!!!!!<h3>"
//var let const
//číslo není v uvozovkách
var jmeno = "Michal" // Nepoužívat var z bezpeč. důvodů (může tam být cokoliv)
let vek = 27
const pozice = "IT Lektor"
document.body.innerHTML += "<p>"+ jmeno +"</p>"
document.body.innerHTML += "<p>"+ vek +"</p>"
document.body.innerHTML += "<p>"+ pozice +"</p>"
vek = 21
document.body.innerHTML += "<p>"+ vek +"</p>"

// velbloudí notace pocetHodin nebo hadí notace pocet_hodin
//konstantní hodnota nelze přepsat, používáme často, aby se nezvolila jiná hodnota

document.body.innerHTML = "<h2>P1- Proměnné<h2>"
 let hours = 7
 const rate = 320
 const days = 21
 const salary = hours*rate*days

document.body.innerHTML += "<p>Výplata: "+ salary +" Kč</p>";

const salaryAfterTax = (salary*0.6)
document.body.innerHTML += "<p>-60% "+ salaryAfterTax +" Kč</p>";
const tax15 = Math.floor(salaryAfterTax*0.15)
document.body.innerHTML += "<p>15% tax = "+ tax15 +" Kč</p>";

document.body.innerHTML += "<h2>P2-Délka Filmu<h2>"

const totalmin =223
 hours= Math.floor(totalmin/60) // 223/60 = 3.71666  zaourouhlime dolu
    let min = totalmin % 60 // 223m/60 = 3.71666h -3 = 0.71666h*60 =43m
   
    document.body.innerHTML += "<p> "+ hours +" hours</p>";
    document.body.innerHTML += "<p> "+ min +" min</p>";

document.body.innerHTML += "<h2>P3-E-mail<h2>"
const myname = "Lenka"
const surname = "Ninjova"
const domain = "@mujmail.com"

document.body.innerHTML += "<p> Muj email: "+ myname + "." + surname + domain + " </p>";

document.body.innerHTML += "<h2>P4-FUNKCE - Ultramaraton<h2>"
const start = 15
let delka = 20
let konec = (start+delka) % 24


document.body.innerHTML += "<p>Bude "+ konec +" hodin.</p>";


document.body.innerHTML += "<h2>P5-Náhodná čísla-Sportka<h2>"

document.body.innerHTML += "<p><i> #1-50 ---------</i> </p>";
document.body.innerHTML += "<p> " +Math.floor(Math.random()*50)+ " </p>";
document.body.innerHTML += "<p> " +Math.floor(Math.random()*50)+ " </p>";
document.body.innerHTML += "<p> " +Math.floor(Math.random()*50)+ " </p>";
document.body.innerHTML += "<p> " +Math.floor(Math.random()*50)+ " </p>";
document.body.innerHTML += "<p> " +Math.floor(Math.random()*50)+ " </p>";

document.body.innerHTML += "<p><i> #1-12 ---------</i> </p>";

document.body.innerHTML += "<p> " +Math.floor(Math.random()*12)+ " </p>";
document.body.innerHTML += "<p> " +Math.floor(Math.random()*12)+ " </p>";





document.body.innerHTML += "<h2>P6-Převod Měn<h2>"
// 20 Eur/h
let wageInEur = 20

let kurzKc = 24.55
let wageInCzk = Math.ceil(wageInEur*kurzKc)
document.body.innerHTML += "<p>Mzda v korunách: "+ wageInCzk +" Kč.</p>";


