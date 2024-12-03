const title="Lekce10-cv3 Počítání oveček"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
const ovciJmena = [
    'Bětuška',
    'Cína',
    'Dolly',
    'Heidy',
    'Líza',
    'Belinda',
    'Celia',
    'Elvíra',
    'Karla',
    'Otýlie',
    'Škraboška',
    'Kopretinka',
    'Berta',
    'Růženka',
    'Bobinka',
    'Žofka',
    'Dášenka',
    'Vlnka',
    'Květuše',
    'Pampeliška',
  ];
  
  // Vybereme prvních deset jmen
  const prvnichDesetJmen = ovciJmena.slice(0, 10);
  
  // Použijeme metodu forEach pro vytvoření vět
  let textPribeh = 'Bylo nebylo, 10 oveček na pastvě. A zrovna se stmívalo tak nastal čas aby ovečky šly domů zpět do bezpečí domácí ohrádky. Tak se odhodlaly a jedna po druhé skákaly přes plot. ';
  prvnichDesetJmen.forEach((jmeno, index) => {
    textPribeh += `Ovečka ${jmeno} jako ${index + 1}. přeskočila přes plot.<br>`;
  });
  
  // Přidáme příběh do těla stránky
  document.body.innerHTML += `<p>${textPribeh}</p>`;
  