// Kvíz
// Vytvořte si repozitář ze šablony cviceni-kviz. 
// V repozitáři je kostra stránky pro kvízové otázky. 
// Napište JavaScriptový program, který vybere element s třídou question 

let questionElement      = document.querySelector(".question") 
let answerElement = document.querySelector(".answer__text")

// a nastaví jeho obsah na nějakou kvízovou otázku, například

question = `
 Uveďte příjmení amerického vynálezce, 
 který v roce 1876 jako první úspěšně podal patent na zařízení, 
 které je dnes považováno za první telefon.
`
questionElement.textContent = question
 //Použijte funkci prompt a zeptejte se uživatele na správnou odpověď. 
 let answerText = prompt(question, "Bell")
 //Vyberte element s třídou answer__text a nastavte obsah elementu na odpověď od uživatele. 
console.log(answerText)
 answerElement.textContent = answerText

 //Vyberte element s třidou answer. 
 //Pokud je odpověď příjmení Bell, přidejte k tomuto elementu třídu answer--correct. 
 if(answerText==="Bell"){
        answerElement.classList= "answer--correct"
    } else { 
        answerElement.classList= "answer--wrong"
    }
 //V opačném případě přidejte třídu answer--wrong.