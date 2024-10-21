//Lekce 3 


 //Očkování
 document.body.innerHTML += "<h2> Očkování </h2>";

//Představte si, že vyrábíte registrační systém na očkování proti COVID-19. 
//U každého registrovaného chceme evidovat jméno a věk.
//Vytvořte webovou stránku, která se uživatele zeptá nejdříve na jméno a poté na věk.
//Tyto hodnoty si uložte do smysluplně pojmenovaných proměnných. Nezpomeňte věk převést na číslo.
const name = prompt("Zadejte jméno.", "Jan Novák")
const age = Number(prompt("Zadejte věk.", "18"))
//Poté, co uživatel zadá všechny údaje, vypište do stránky odstavec s obsahem ve tvaru
//Květoslav Voňavý, věk: 67
document.body.innerHTML += "<p>" + name +", věk:"+age+ "</p>";

// ###############################################################################
//Výplata jako stránka
document.body.innerHTML += "<h2> Výplata jako stránka </h2>";
//Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách 
//a spočítá jeho hrubou mzdu 
let payByHour = Number(prompt("Zadejte hodinovou sazbu."))
let salary = 8*21*payByHour
//za předpokladu, že pracuje 8 hodin denně 21 dní v měsíci. 
//Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. 
document.body.innerHTML += "<p> Tady je vaše výplata za 21 dní: " + salary + "</p>";
//Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
//Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. 
//Opět dejte pozor na správnou konverzi.

// ###############################################################################
//Příklady - Objekty
document.body.innerHTML += "<h1> Objekty </h1>";
//Realitka
document.body.innerHTML += "<h2> Realitka </h2>";
//Mějme následující objekt představující inzerát na stránkách nějaké realitní kanceláře.

const apartment = {
  type: 'rent',
  disposition: '3+1',
  area: {
    floorage: 100,
    balcony: 2,
    units: 'sqm',
  },
  city: 'Prague',
  district: 'Old Town',
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: 'czk',
  },
  ownership: 'personal',
  condition: 'renovated',
  status: 'free',
  floor: 3,
};

//Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

//Pomocí tečkové notace vypište do stránky dispozici bytu.
document.body.innerHTML += "<p> Dispoozice bytu: " + apartment.disposition + "</p>";
//Vypište do stránky čistý nájem bez poplatků.
document.body.innerHTML += "<p> čistý nájem bez poplatků: " + apartment.price.rent + " "+ apartment.price.currency + "</p>";
//Vypište do stránky celý objekt představující výměru bytu.
document.body.innerHTML += "<p> celý objekt představující výměru bytu: " + apartment.area.floorage + apartment.area.units+
"</br> balkón: " + apartment.area.balcony + apartment.area.units+ "</p>";
let total = apartment.area.floorage + apartment.area.balcony;
  document.body.innerHTML += "<p>Celkova plocha bytu je:" + total + "sqm </p>"

// Do separátních proměnných uložte město a městskou část. Vypište je do stránky.
let mesto = apartment.city
let castMesta = apartment.district
document.body.innerHTML += "<p> Do separátních proměnných uložte město "+mesto+" a městskou část: " + castMesta + "</p>";
// Změnte stav inzerátu z 'free' na 'taken'.
apartment.status = "Taken"
document.body.innerHTML += "<p> Stav: " + apartment.status + "</p>";

// ###############################################################################
//Knihovna
document.body.innerHTML += "<h2> Knihovna </h2>";
//V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně.
const kniha = {
  nazev: "Kniha 1",
  autor: "Někdo",
  strany: 542,
  cena: 1500,
  postavy:{
    hero: "Pepa",
    vilain: "Lojza"
  },
}
// Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran.

//Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.

//Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.`

const kniha2 = {
  nazev: "Kniha 1",
  autor: "Někdo",
  strany: 542,
  cena: 1500,
  postavy:{
    hero: "Pepa",
    vilain: "Lojza"
  },
}
// ###############################################################################
//Očkování – objekty
document.body.innerHTML += "<h2> Očkování – objekty </h2>";
//Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.

//Vytvořte objekt person, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
const objectPerson1 = {
  name: prompt("Zadejte jméno.", "Květoslav Voňavý"),
  age: Number(prompt("Zadejte věk.", "67")),
}
//Přidejte do objektu person údaj o tom, v jakém jazyce si uživatel přeje komunikovat. 
//Zjistěte jej z objektu window.
//objectPerson1.language = window.language
objectPerson1.language = "česky"


//Poté, co uživatel zadá všechny údaje, vypište do stránky objekt person se všemi jeho vlastnostmi v nějakém hezkém formátu a zkontrolujte, 
//že obsahuje správné informace.
document.body.innerHTML += "<p>" +
objectPerson1.name + "<br>" +
objectPerson1.age + "<br>" +
objectPerson1.language+ "<br>" +
"</p>";