
const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

// Cvičení: Pokročilé třídy a innerHTML
// Nekup to, třídy
// Vytvořte si repozitář ze šablony cviceni-nekupto. Repozitář obsahuje stránku, 
// která nabízí několik neotřelých produktů.
// Otevřete si naklonovanou složku ve VS Code a prohlédněte si zdrojové HTML. 
// Stránka je nastylována pomocí CSS knihovny Bootstrapu. 
// Co přesně dělají použité CSS třídy není pro toto cvičení podstatné, 
// nemusíte jim věnovat velkou pozornost.

// V souboru index.js si na posledním řádku do proměnné uložte kartu s prvním produktem. 
const kartaSPrvnimProduktem = document.querySelector("#product1")
// Pomocí metody classList.add přidejte na tento element třídu border-primary, 
kartaSPrvnimProduktem.classList.add("border-primary")
// abychom první produkt na stránce zvýraznili.

// Do jiné proměnné si uložte tlačítko na druhé kartě. 
const button2 = document.querySelector("#product2 button")
// Pomocí metody classList.remove odeberte třídu btn-primary a podívejte se, jak se tlačítko vizuálně změnilo.
button2.classList.remove("btn-primary")
// Do další proměnné si uložte element s třídou card-title posledního produktu. 
const posledniKarta =document.querySelector("#product3 .card-title")
// Pomocí voláni metody classList.toggle přidejte na tento element třídu text-center. 
posledniKarta.classList.toggle("text-center")
// Text by se měl tímto zarovnat na střed. Vyzkoušejte si, že když tuto metodu zavoláte znova, třída se z prvku odstraní. 
posledniKarta.classList.toggle("text-center")
// Takto můžete přepínat mezi přidáním a odebráním třídy pomocí opakovaného volání této metody.
posledniKarta.classList.toggle("text-center")
// Na konci by stránka v prohlížeči měla vypadat jako na obrázku níže: ✔


