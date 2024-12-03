const title="Lekce10-cv4 Jednohubky pro map"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 

// Definujeme pole celých čísel
const cisla = [7, 1, 4, 5, 2, 9, 3, 6, 8];

// Vytvoříme nové pole, které bude obsahovat všechna čísla z pole cisla vynásobená dvěma
const nasobenaCisla = cisla.map(num => num * 2);
console.log(nasobenaCisla); // [14, 2, 8, 10, 4, 18, 6, 12, 16]

// Definujeme pole řetězců zvířat
const zvirata = [
  'pes',
  'kočka',
  'králík',
  'had',
  'andulka',
  'morče',
  'krkavec',
];

// Vytvoříme nové pole, které bude obsahovat délky všech řetězců z pole zvirata
const delkyZvirat = zvirata.map(zvire => zvire.length);
console.log(delkyZvirat); // [3, 5, 6, 3, 7, 5, 7]

// Definujeme pole objektů nápojů
const napoje = [
  { nazev: 'Pivo', cena: 12, skladem: true },
  { nazev: 'Rum', cena: 120, skladem: false },
  { nazev: 'Víno', cena: 85, skladem: true },
  { nazev: 'Whisky', cena: 450, skladem: true },
  { nazev: 'Vodka', cena: 280, skladem: false },
  { nazev: 'Becherovka', cena: 210, skladem: true },
  { nazev: 'Kofola', cena: 40, skladem: true },
  { nazev: 'Voda', cena: 15, skladem: false },
];

// Vytvoříme nové pole, které bude obsahovat pouze názvy všech nápojů z pole napoje
const nazvyNapoju = napoje.map(napoj => napoj.nazev);
console.log(nazvyNapoju); // ['Pivo', 'Rum', 'Víno', 'Whisky', 'Vodka', 'Becherovka', 'Kofola', 'Voda']

// Vytvoříme nové pole, které bude obsahovat pouze název nápoje z pole napoje, 
// pokud je nápoj skladem, v opačném případě bude obsahovat řetězec "Není skladem"
const dostupnostNapoju = napoje.map(napoj => napoj.skladem ? napoj.nazev : 'Není skladem');
console.log(dostupnostNapoju); // ['Pivo', 'Není skladem', 'Víno', 'Whisky', 'Není skladem', 'Becherovka', 'Kofola', 'Není skladem']
