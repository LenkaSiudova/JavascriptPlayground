const pocetLekci = 8
const pocetUkolu = 2

function addXLinks(howMany, what)
{
    for(let i = 1; i <= howMany; i++){
        document.body.innerHTML += `<h3><a href="${what}${i}/index.html">${what}${i}</a></h3>`
    }
}

addXLinks(pocetLekci,"lekce")
addXLinks(pocetUkolu,"ukol")

document.body.innerHTML += `<p><br><a href="https://github.com/aellopos/Kurz-JS-1/tree/main/solution">Zadání</a></p>`
