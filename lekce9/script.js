const title="Lekce9"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

const pocetCviceni = 3
for(let i = 1; i <= pocetCviceni; i++){
    document.body.innerHTML += `<h3><a href="cv${i}/index.html">Cvičení${i}</a></h3>`
}

//code  

document.querySelector("#reg_form").addEventListener("submit", (e) => {
  e.preventDefault()
  const jmeno = document.querySelector("#jmeno").value
  const vek = Number(document.querySelector("#vek").value)
  const heslo = document.querySelector("#heslo").value
  console.log(`${jmeno} ${vek} ${heslo}`)
} )