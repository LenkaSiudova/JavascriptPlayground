const title="Lekce7-Funkce obory platnosti"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
const pocetCviceni = 5
for(let i = 1; i <= pocetCviceni; i++){
    document.body.innerHTML += `<h3><a href="cv${i}/index.html">Cvičení${i}</a></h3>`
}


//code
const jeSude = (cislo) => {
    if(cislo % 2 === 0) {
      return true
    } else { 
      return false
    }
  }
  
  const jeSude2 = (cislo) => {
    return cislo % 2 === 0 ? true : false
    //          vyraz      pravda   nepravda
  }
  
  const jeSude3 = (cislo) => cislo % 2 === 0 ? true : false 
  
  const jeSude4 = cislo => cislo % 2 === 0 ? true : false 
  
  console.log(jeSude(2))
  console.log(jeSude4(2))
  const generujNahodneCislo = () => {
    return Math.floor(Math.random() * 100)
  }
  
  const generujNahodneCislo2 = () => Math.floor(Math.random() * 100)
  
  console.log(generujNahodneCislo2())
