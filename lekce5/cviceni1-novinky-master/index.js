// Pomocí document.querySelector vyberte element body 
//a uložte si jej do proměnné bodyElement. 
const bodyElement = document.querySelector("body")
//Pomocí této proměnné nastavte barvu pozadí elementu na hodnotu #e9e9e9.
bodyElement.style.backgroundColor = "#e9e9e9"
// Do jiné proměnné vyberte element s třídou news 
const news = document.querySelector(".news")
//a nastavte mu barvu pozadí na bílou a maximální šířku na 60rem.
news.style.backgroundColor = "white"
news.style.width ="60rem"
// Vyberte element h1 a nastavte mu (v JavaScriptu) třídu na news__title. 
const nadpis = document.querySelector("h1")
nadpis.classList = "news__title"
//Nadpis by měl změnit styl. 
//Nastavte také obsah nadpisu na text "Aktuální novinky." 
nadpis.textContent = "Aktuální novinky"

// Pomocí atributu id vyberte element obsahující první zprávu. 
const zprava1 = document.querySelector("#zprava1")
zprava1.classList.add("post--main")
//Přidejte do jeho atributu class třídu post--main. 
//První zpráva by tak měla mírně změnit svůj styl.

// Pomocí CSS selektoru vyberte obrázek ve třetí zprávě 
const obrazek3 = document.querySelector("#zprava3 img")
//(id zprávy je zprava3) a změňte jeho atribut src na obrázek images/zprava3-novy.jpg.
obrazek3.src = "images/zprava3-novy.jpg"