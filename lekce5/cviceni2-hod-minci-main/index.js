// Vytvořte si repozitář ze šablony cviceni-hod-minci. 
//Repozitář obsahuje stránku s nedokončenou simulací hodu mince. 
//Vaším úkolem bude mincí „hodit“.

// V souboru index.js si do proměnné padlOrel 
//uložte hodnotu true nebo false na základě náhodné hodnoty 
//z funkce Math.random(). Pravděpodobnost 50:50 zajistíte porovnáním výsledku funkce s hodnotou 0.5.
const padlOrel = Math.random() < 0.5
// Pomocí document.querySelector 
//vyberte ze stránky prvek .vysledek a nahraďte jeho obsah textem Padl orel nebo Padla panna 
//na základě náhodné hodnoty z předchozího kroku.
const vysledek = document.querySelector(".vysledek")
vysledek.textContent = "Padl orel nebo Padla panna"

// Vyzkoušejte stránku několikrát načíst a koukněte, jestli se text mění. ✓ 

// Kromě změny textu ještě přidejte prvku .mince druhou třídu mince--orel nebo mince--panna opět podle hodnoty v proměnné padlOrel.
const mince = document.querySelector(".mince")

// Znovu několikrát vyzkoušejte, že obrázek mince odpovídá textu pod ním.

if (padlOrel) {
   // Nahraďte text pro orla
   vysledek.textContent = "Padl orel"
   mince.classList.add("mince--orel")
 } else {
   // Nahraďte text pro pannu
   vysledek.textContent = "Padla panna"
   mince.classList.add("mince--panna")
 }