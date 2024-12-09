const title="Ukol3 Malé algoritmy du_desata_lekce.md"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title
// Úkol 03 Malé algoritmy

//Malé algoritmy
//Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. 
//Budeme jej používat ve všech následujících úlohách.

const numbers = [ -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5 ]

// Vypište do stránky všechna čísla.
document.body.innerHTML += "Všechna čísla: " + numbers.join(", ") + "<br>";

// Vypište do stránky druhé mocniny všech čísel.
let DruhaMocnina = [];
for (let i = 0; i < numbers.length; i++) {
    DruhaMocnina.push(numbers[i] ** 2);
}
document.body.innerHTML += "Druhé mocniny: " + DruhaMocnina.join(", ") + "<br>";

// Vypište do stránky pouze záporná čísla.
let zaporneCisla = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        zaporneCisla.push(numbers[i]);
    }
}
document.body.innerHTML += "Záporná čísla: " + zaporneCisla.join(", ") + "<br>";

// Vypište do stránky absolutní hodnotu všech čísel.
let absolutniHodnota = [];
for (let i = 0; i < numbers.length; i++) {
    absolutniHodnota.push(Math.abs(numbers[i]));
}
document.body.innerHTML += "Absolutní hodnoty: " + absolutniHodnota.join(", ") + "<br>";

// Vypište do stránky pouze sudá čísla.
let sudaCisla = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sudaCisla.push(numbers[i]);
    }
}
document.body.innerHTML += "Sudá čísla: " + sudaCisla.join(", ") + "<br>";

// Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
let absolutniHodnotyDelitelneTremi = [];
for (let i = 0; i < numbers.length; i++) {
    if (Math.abs(numbers[i]) % 3 === 0) {
        absolutniHodnotyDelitelneTremi.push(numbers[i]);
    }
}
document.body.innerHTML += "Dělitelné třemi: " + absolutniHodnotyDelitelneTremi.join(", ") + "<br>";

// Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
let vzdalenostOdPetky = [];
for (let i = 0; i < numbers.length; i++) {
    vzdalenostOdPetky.push(Math.abs(numbers[i] - 5));
}
document.body.innerHTML += "Vzdálenost od 5: " + vzdalenostOdPetky.join(", ") + "<br>";

// Vypište do stránky druhé mocniny vzdáleností všech čísel od čísla 5.
let druheMocninyVzdalenostiOdPetky = [];
for (let i = 0; i < vzdalenostOdPetky.length; i++) {
    druheMocninyVzdalenostiOdPetky.push(vzdalenostOdPetky[i] ** 2);
}
document.body.innerHTML += "Druhé mocniny vzdáleností od 5: " + druheMocninyVzdalenostiOdPetky.join(", ") + "<br>";

// Spočítejte, kolik je v seznamu záporných čísel.
let soucetZapornychCisel = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        soucetZapornychCisel++;
    }
}
document.body.innerHTML += "Počet záporných čísel: " + soucetZapornychCisel + "<br>";

// Spočítejte součet všech čísel v poli.
let kompletniSoucet = 0;
for (let i = 0; i < numbers.length; i++) {
    kompletniSoucet += numbers[i];
}
document.body.innerHTML += "Součet všech čísel: " + kompletniSoucet + "<br>";

// Spočítejte průměr všech čísel v poli.
let prumerVsechCisel = kompletniSoucet / numbers.length;
document.body.innerHTML += "Průměr všech čísel: " + prumerVsechCisel + "<br>";

// Spočítejte součet všech kladných čísel v poli.
let SoucetKladnycnCisel = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        SoucetKladnycnCisel += numbers[i];
    }
}
document.body.innerHTML += "Součet kladných čísel: " + SoucetKladnycnCisel + "<br>";

