//Lekce 6
document.body.innerHTML += `<h1>Lekce6-cv4 <br> Maximum ze dvou čísel</h1>`
//Maximum ze dvou čísel
//Napište funkci max2, která vrátí větší ze dvou zadaných čísel. 
//V JavaScriptu už na toto funkce existuje, jmenuje se Math.max. 
//Pro účely tohoto příkladu se budeme tvářit, že o ní nevíme.

function max2 (a, b){
    let c 
    if (a>b) c=a
    if (b>a) c=b
    if (b===a) c="žádné"
    document.body.innerHTML += `<p>větší číslo ze dvou zadaných ${a} a ${b} je ${c}</p>`
}
max2(1,99)
max2(88,2)
max2(0,100000000)
max2(10,10)

