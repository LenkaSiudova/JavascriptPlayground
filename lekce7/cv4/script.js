const title="Lekce7-cv4"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
//Úryvek 1:
document.body.innerHTML += `<p>Úryvek 1:</p>`;
const name = 'Mississippi';

if (name.length > 5) {
  const name = 'Missi';
  document.body.innerHTML += `<p>${name}</p>`;
}

document.body.innerHTML += `<p>${name}</p>`;
//Úryvek 2:
document.body.innerHTML += `<p>Úryvek 2:</p>`;

const name2 = 'Franta';

const greet = (name) => {
  const name2 = 'Pepa';
  document.body.innerHTML += `<p>${name}</p>`;
};

greet('Jožin');
//Úryvek 3 :
document.body.innerHTML += `<p>Úryvek 3 opraven:</p>`;

let price = 1
const age = 25

if (age > 21) {
   price = 100
} else if (age > 15) {
   price = 50
} else {
   price = 0
}

document.body.innerHTML += `<p>price is:${price}</p>`
