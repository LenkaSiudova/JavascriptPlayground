const title="Úkol 1 du_pata_lekce"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title
// Úkol 01
// FIT e-mail
// Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, 
// bude vám informačním systémem automaticky přidělen e-mail, který se vytvoří z vašeho jména a příjmení. 
// Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. 
// Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz. 
// Pro jméno Jana Procházková tak vznikne adresa prochjan@fit.cvut.cz.


// Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky. 
let uzivatel = {
    jmeno: prompt("Zadejte své křestní jméno bez diakritiky.", "Jana"),
    prijmeni: prompt("Zadejte své příjmení bez diakritiky.", "Procházková"),
    email: null,    
  }
// Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky.
uzivatel.jmeno.trim()
uzivatel.prijmeni.trim()
//  Pomocí metody slice vyřízněte ze jména i příjmení příslušné části. 
//z příjmení se vezme pět prvních znaků 
//a z vašeho křestního jména první tři

uzivatel.email = uzivatel.prijmeni.slice(0,5)+
                uzivatel.jmeno.slice(0,3)+
                "@fit.cvut.cz"

uzivatel.email = uzivatel.email.toLowerCase()               

//  Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.
document.body.innerHTML += `
<h3>
    Vítejte uživateli ${uzivatel.jmeno} ${uzivatel.prijmeni} <br>
    Váš nový uživatelský email je: <br>
    <a href="${uzivatel.email}">${uzivatel.email}</a>
</h3>`