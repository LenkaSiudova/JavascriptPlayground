//Lekce 6
document.body.innerHTML += `<h1>Lekce6-cv3 <br> Obsah elipsy</h1>`
//Zlovolní zahrádkáři nám chtějí ztížit výměru pozemků a proto si pořídíli pozemek ve tvaru elipsy.

//Z matematiky víme, že známe-li šířku a výšku elipsy, 
//její obsah je polovina šířky krát polovina výšky krát číslo π (tj. přibližně 3,14).
function obsahElipsy (vyska, sirka){
    //Z matematiky víme, že známe-li šířku a výšku elipsy, 
    //její obsah je polovina šířky krát polovina výšky krát číslo π (tj. přibližně 3,14).
    let obsah = (vyska/2)*(sirka/2)*Math.PI
    document.body.innerHTML += `<p>Obsah elipsy o výšce ${vyska} a šířce ${sirka} je ${obsah}</p>`
}

//Založte si prázdnou stránku s JavaScriptovým souborem a napište funkci ellipseArea, 
//která spočítá (vrátí) plochu pozemku dle zadané šířky a výšky. 
//Číslo π najdete v JavaScriptu v proměnné Math.PI.

//Funkci ellipseArea otestujte 
//(např. pomocí document.body.innerHTML += vypište výsledek volání pro různé hodnoty do stránky).

//Pro šířku 1 a výšku 2 by mělo vyjít 1.5707963267948966.
obsahElipsy(2,1)
//Pro 2 a 2 pak 3.141592653589793.
obsahElipsy(2,2)
