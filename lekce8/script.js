const title="Lekce8"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code  https://www.youtube.com/watch?v=2tFI5HCWxcI
const pocetCviceni = 5
for(let i = 1; i <= pocetCviceni; i++){
    document.body.innerHTML += `<h3><a href="cv${i}/index.html">Cvičení${i}</a></h3>`
}


//code
const overeniHesla = heslo => {
  if(heslo.length > 10) {
      return true
  } else {
      return false
  }

  //Kratsi varianta
  //return heslo.length > 10 ? true : false
}

const registrace = (jmeno, heslo, overeniHesla) => {
  if(!overeniHesla(heslo)) {
      return `<p>Uzivatel ${jmeno} nebyl uspesne registrovat registrovan! Heslo je prilis kratke</p>`
  }
  
  return `<p>Uzivatel ${jmeno} s heslem: '${heslo}' je uspesne registrovan!</p>`
}

// const jmeno = prompt("Zadej jmeno", "Pepa")
// const heslo = prompt("Zadej heslo", "s;ldajk;lskjg;lafjhg;fjklhkjh54")

const jmeno = "Pepa"
const heslo = "s;ldajk;lskjg;lafjhg;fjklhkjh54"

document.body.innerHTML += registrace(jmeno, heslo, overeniHesla)

//-----------------------

const kalkulacka = (cislo1, cislo2, op) => {
  if(op === "+") {
      return cislo1 + cislo2
  } else if(op === "-") {
      return cislo1 - cislo2
  } else if(op === "*") {
      return cislo1 * cislo2
  } else if(op === "/") {
      if(cislo2 === 0) {
          return "ERROR: nelze delit nulou"
      } else {
          return cislo1 / cislo2
      }
  } else {
      return null
  }
}

function plus (cislo1, cislo2) {
  return cislo1 + cislo2
}

function minus (cislo1, cislo2) {
  return cislo1 - cislo2
}

function kalkulacka2 (cislo1, op, cislo2)  {
  return op(cislo1, cislo2)
}

console.log(kalkulacka2(10, plus, 5))
console.log(kalkulacka2(10, minus, 5))