const pocetLekci = 6
const pocetUkolu = 1

for(let i = 1; i <= pocetLekci; i++){
    document.body.innerHTML += `<h3><a href="lekce${i}/index.html">Lekce${i}</a></h3>`
}

document.body.innerHTML += `<br>`
for(let i = 1; i <= pocetUkolu; i++){
    document.body.innerHTML += `<h3><a href="ukol${i}/index.html">Úkol${i}</a></h3>`
}
document.body.innerHTML += `<p><br><a href="https://github.com/aellopos/Kurz-JS-1/tree/main/solution">Zadání</a></p>`




