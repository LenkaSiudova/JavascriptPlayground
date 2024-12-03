const title="Lekce11-cv1 Počasí"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
// Podobných postupem jako jsme na lekci tvořili aplikaci Zprávičky zkuste vytvořit vlastní aplikaci, 
// která bude zobrazovat počasí na aktální týden.

// V naší aplikaci budeme chtít vytvořit dvě stránky podle popisu dále. 

// Zatím je nemusíme nijak horlivě stylovat, stačí nám zatím základní zobrazení dat.
// Hlavní stránka bude index.html s přehledem počasí na sedm dní v týdnou, pondělí až pátek. 
function addPredpoved(howMany)
{
    for(let i = 0; i < howMany; i++){
        document.body.innerHTML += `
        <div class="card">
          <h2><b>${predpoved[i].den}</b></h2>
          <p>
              datum: "${predpoved[i].datum}" <br>
              denni_teplota: ${predpoved[i].denni_teplota} <br>
              ranni_teplota: ${predpoved[i].ranni_teplota} <br>
              odpoledni_teplota: ${predpoved[i].odpoledni_teplota} <br>
              vecerni_teplota: ${predpoved[i].vecerni_teplota} <br>
              stav_pocasi: "${predpoved[i].stav_pocasi}" <br>
              tlak: ${predpoved[i].tlak} <br>
              rychlost_vetru: ${predpoved[i].rychlost_vetru} <br>
              popis_pocasi: "${predpoved[i].popis_pocasi}" <br>
              <br>
          </p>
        </div>

        `
    }
}

addPredpoved(5)

//Každý den bude zobrazen jako karta s názvem dne, 
//teplotou a stavem typu zataženo, déšť, sníh, atd. 
//Pro tuto stránku si vytvořte samostatný soubor index.js a naplňte HTML obsahem podle dodaných dat.
// Po rozkliknutí karty na hlavní stránce se uživatel dostane na stránku detail.html 
//s detailním přehledem počasí na daný den. Odkaz bude vypadat například detail.html#Pondělí. 
//Na stránce se zobrazí název dne, teploty ráno, odpoledne a večer, stav jako zataženo, déšť apod., 
//vlhkost, tlak a slovní popis počasí.