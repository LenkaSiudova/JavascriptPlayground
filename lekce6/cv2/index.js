//Lekce 6
document.body.innerHTML += `<h1>Lekce6-cv2 <br> Žíjí lidé už na Marzu?</h1>`

//odívejte se na stránku existuje-mimozemsky-zivot.cz. Podle toho, v jakém období toto zadání čtete, 
//se dozvíte, zda jsme již objevili život mimo planetu Zemi. 
//Stránka zobrazuje pouze jednoduchou zprávu. 
//Podobných stránek lze na internetu najít vícero. Například

//sediuzbabis.cz
//uzjepatek.cz

//Vytvořte podobnou stránku s vaším vlastním tématem.

//Vytvořte prázdnou stránku, do které vložte knihovnu Day.js.
//Vyberte si nějakou budoucí událost, jejíž datum je pevně určeno. 
//Za pomoci knihovny Day.js vytvořte stránku zobrazující velké ANO nebo NE případně krátkou zprávu podle toho,
// zda už událost nastala či nikoliv.

const today = dayjs()
console.log(today)
console.log(today.format("DD-MM-YYYY"))

const humansExpectedOnMars = dayjs("2050-01-01")
console.log(humansExpectedOnMars.format("DD-MM-YYYY"))
console.log(today.isAfter(humansExpectedOnMars))


if(today.isAfter(humansExpectedOnMars)){
    document.body.innerHTML += `<h2>Ano, konečně jsme Mars osídlili.</h2>`
} else {
    document.body.innerHTML += "<h2> Ještě ne. </h2>"
}


//Bonus
//Publikuje vaši stránku přes GitHub Pages (případně Netlify drop či jinou alternativu, pokud je znáte).



// https://day.js.org/docs/en/installation/installation