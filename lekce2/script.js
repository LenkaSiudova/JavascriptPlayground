document.body.innerHTML += "<h3>Příjem divadla</h3>"

// 
// Jeden lístek do divadla Pěst na oko stojí 12 euro.
// Spočítejte měsíční příjem divadla ze vstupného, 
// přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 představení měsíčně. 
// Uložte výsledek do proměnné prijem. 
// Hodnotu proměnné prijem vypište do stránky. Divadlo se rozhodlo prodávat studentské vstupné ve výši 65 % plného vstupného.
// Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti? Vypište do stránky i příjem divadla se započítanou slevou pro studenty.


let cenaListku = 12
let navstevniciPredstaveni = 174
let pocetPredstaveni = 15
let prijem = (navstevniciPredstaveni*cenaListku)+pocetPredstaveni

document.body.innerHTML += "<p> navstevniciPredstaveni*cenaListku)+pocetPredstaveni = "+ prijem +"</p>";


document.body.innerHTML += "<h3>Házení kostkou</h3>"
//Vymyslete, jak použít funkci Math.random a různé zaokrouhlovací funkce probírané v této lekci k simulování hodu klasickou šestistěnnou kostkou. 
//S použitím vhodných funkcí sestavte výraz, který vygeneruje náhodné celé číslo mezi 1 a 6.
//Zamyslete se nad tím, zda vámi vytvořený výraz generuje všechna čísla skutečně se stejnou pravděpodobností. Vemte v úvahu, že funkce Math.random generuje náhodná čísla mezi 0 (včetně) a 1 (vyjma). Je tedy malinká pravěpodobnost, že občas padne přesně číslo 0. Naopak číslo 1 padnout nemůže.

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
let hodKostkou1 =(Math.floor(Math.random()*6)+1)
let hodKostkou2 = randomIntFromInterval(1, 6)
document.body.innerHTML += "<p> Hod kostkou 1: " +hodKostkou1+" </p>";
document.body.innerHTML += "<p> Hod kostkou 2: " +hodKostkou2+ " </p>";
console.log(hodKostkou1)
console.log(hodKostkou2)

