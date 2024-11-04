//Lekce 6
const title="Lekce6-Knihovny a Vlastní funkce"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

const pocetCviceni = 5
for(let i = 1; i <= pocetCviceni; i++){
    document.body.innerHTML += `<h3><a href="cv${i}/index.html">Cvičení${i}</a></h3>`
}

console.log(validator)
console.log(validator.isEmail("pepik@seznam.cz"))
console.log(validator.isMobilePhone("111 222 333", "cs-CZ"))
console.log(validator.isPostalCode("73932", "CZ"))

// const email = prompt("Zadejte email.", "pepik@seznam.cz")

// if(validator.isEmail(email)){
//      document.body.innerHTML = "<h2> Welcome </h2>"
//  } else {
//      document.body.innerHTML = "<h2> no! </h2>"
//  }

const time = new Date()
console.log(time.getDate())
console.log(time.getDay())
console.log(time.getHours())
console.log(time.getTime())


const time2 = dayjs()
console.log(time2)
console.log(time2.format("DD-MM-YYYY"))

const novyRok = dayjs("2025-01-01")
console.log(novyRok)
console.log(time2.isAfter(novyRok)) //false
// https://day.js.org/docs/en/installation/installation
// https://www.youtube.com/watch?v=_xVksOUsBlY