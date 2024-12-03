const title="Lekce11-cv2 "
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
// U všech následujících úryvků kódů vytvořte technický popis jejich fungování a zároveň zkuste odhadnout záměr daného kódu. 
//Obě dvě části si skutečně napište například do textového souboru.

//1
const a = 0
const b = 10
const average = (a, b) => { //pruměr dvou hodnot
  return (a + b) / 2;
};
document.body.innerHTML += `<p>pr1: ${average(a,b)}</h1>`

//2
document.body.innerHTML += `<p class="title">Default text</h1>`
const titleElement = document.querySelector('.title');
titleElement.textContent = 'Nadpis'; //přepiš text elementu třídy "title"


//3
let time = 0;
setTimeout(() => {
  time += 1;
  console.log('time', time);
}, 1000); //funkce čeká sekundu a pak změní hodnotu time na +1 a zapíše do konzole

//4
const buttonOk = document.querySelector('.title');
buttonOk.addEventListener('click', () => {
  document.body.innerHTML += '<p>Everything OK</p>'; //po kliknuti na  Nadpis, přidej na stranku text.
});

//5
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyP') {// when key P is released, write pause in the console
    console.log('paused');
    document.body.innerHTML += '<p>paused</p>'
  }
});