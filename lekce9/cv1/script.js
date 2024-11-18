const title="Lekce9-cv1 Kalkulačka"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
// Zařiďte, aby se při kliknutí na libovolné tlačítko na displeji kalkulačky objevila cifra, která je na tlačíku napsaná.
// Postupujte dle návodu:

// Nejprve vyrobte funkci s názvem handleDigitClick.
// To bude posluchač, který později navěsíme na všechna tlačítka.
// Váš posluchač bude mít jeden parametr představující událost. 
//Z vlastnosti target tohoto parametru získejte tlačíko, na které bylo kliknuto. 
//Cifru zjístíte z jeho textContent.

// Jakmile znáte cifru, vložte ji jako textContent na displej kalkulačky.
// Pověste váš posluchač na všechna tlačítka s ciframi.
// U běžné kalkulačky mačkáním tlačítek postupně sestavujeme nějaké víceciferné číslo. 
//Zařiďte, aby cifry na displeji přibývaly jako na běžné kalkulačce 
//(tj. nově přidaná cifra se přidá doprava, jako je na animaci výše). 
//Také zaříďte, aby se na displej nedalo vložit delší než devíticiferné číslo.

function handleDigitClick(e){
  const digit = e.target.textContent
  const display = document.querySelector(".display")
  if(display.textContent==="0"){ //if there is just 0 replace the first character
    display.textContent = digit
  } else{
    if(display.textContent.length <= 9){ //Write until display is full. 
      display.textContent += digit  
    }
  }  
}

const btns = document.querySelectorAll(".btn-num")
//console.log(btns)
btns.forEach(btn => {
  btn.addEventListener("click", handleDigitClick )
})

