const title="Lekce10"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

const pocetCviceni = 5
for(let i = 1; i <= pocetCviceni; i++){
    document.body.innerHTML += `<h3><a href="cv${i}/index.html">Cvičení${i}</a></h3>`
}

//code  

