const title="Lekce10-cv1 Pole v divadle"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
//Cvičení provádějte ve vašem JavaScript souboru.

//Vytvořte pole celých čísel, například počty diváků na několika po sobě jdoucích divadelních představeních. 
//Použijte metodu push a přidejte do pole počet diváků na novém představení.

//Vytvořte pole desetinných čísel, například zaplněnost divadla v několika po sobě jdoucích představeních. Poté pomocí metody pop odstraňte poslední hodnotu v poli.
//Vytvořte pole řetězců, například seznam názvů několika divadelních představení, která divadlo hraje. Uložte toto pole do proměnné plays. Uložte do jiné proměnné druhou položku tohoto pole.
//Uložte do proměnné reviews pole hodnocení, které obdržela divadelní hra Plyšáci na útěku v různých recenzních časopisech. Hodnocení je vždy objekt obsahující název recenzního časopisu jako řetězec a samotné hodnocení jako číslo mezi 1 až 10.

// 1. Vytvořte pole celých čísel, například počty diváků na několika po sobě jdoucích divadelních představeních. 
let audienceCounts = [150, 200, 175, 220, 180];

// Použijte metodu push a přidejte do pole počet diváků na novém představení.
audienceCounts.push(190);
console.log("audienceCounts.push "+audienceCounts); // [150, 200, 175, 220, 180, 190]
document.body.innerHTML += `<p>${"audienceCounts.push "+audienceCounts}</p>`

// 2. Vytvořte pole desetinných čísel, například zaplněnost divadla v několika po sobě jdoucích představeních.
let theatreFillRates = [0.85, 0.90, 0.75, 0.95, 0.80];

// Pomocí metody pop odstraňte poslední hodnotu v poli.
theatreFillRates.pop();
console.log("theatreFillRates.pop() "+theatreFillRates); // [0.85, 0.90, 0.75, 0.95]
document.body.innerHTML += `<p>${"theatreFillRates.pop()"+theatreFillRates}</p>`

// 3. Vytvořte pole řetězců, například seznam názvů několika divadelních představení, která divadlo hraje.
let plays = ["Hamlet", "Othello", "Macbeth", "Romeo and Juliet"];

// Uložte do jiné proměnné druhou položku tohoto pole.
let secondPlay = plays[1];
console.log("let secondPlay = plays[1] "+secondPlay); // "Othello"
document.body.innerHTML += `<p>${"let secondPlay = plays[1];"+secondPlay}</p>`

// 4. Uložte do proměnné reviews pole hodnocení, které obdržela divadelní hra Plyšáci na útěku v různých recenzních časopisech.
let reviews = [
    { magazine: "Theatre Times", rating: 8 },
    { magazine: "Stage Review", rating: 7 },
    { magazine: "Drama Digest", rating: 9 }
];

console.log(reviews);

// Create an HTML string to add to the document body
let reviewsContent = "<ul>";
reviews.forEach(review => {
  reviewsContent += `<li>${review.magazine}: ${review.rating}/10</li>`;
});
reviewsContent += "</ul>";

// Append the reviews content to the body
document.body.innerHTML += reviewsContent;

