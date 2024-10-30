//Lekce 6
document.body.innerHTML += `<h1>Lekce6-cv5 <br> Kontrola DIČ</h1>`

//Kontrola DIČ
//Všimněte si, že knihovna validator.js v době vzniku tohoto zadání neumí ověřit platnost českého DIČ 
//(daňové identifikační číslo). Zkusme tedy takovou funkci napsat.

//Formát DIČ sestává z předpony CZ a poté následuje devět nebo deset číslic. Tedy například

//CZ123456789
//CZ1234567890
//Postupujte dle následujících kroků:

//Vytvořte prázdnou stránku s JavaScriptem a knihovnou validator.js.
//Vytvořte funkci isDIC s jedním parametrem inputStr, 
//což bude řetězec, který chceme zkontrolovat.

function isDIC (inputStr){
    //Jako první ve funkci zkontrolujte, jestli je vstupní řetězce 
    //kratší než 11 znaků. 
    //V takovém případě nemá smysl dál nic dělat, protože vstup evidentně není DIČ. 
    //Vraťte tady z funkce false.
    
    if(inputStr.isLength<11) {
        document.body.innerHTML += `<p>${inputStr} není DIC. Je kratší než 11 znaků</p>`
        return false
    }
    //Tím naše funkce končí. Všimněte si, že takto používáme vzor časný návrat.
    //Dále ve funkci zkontrolujte, jestli je vstupní řetězce 
    //delší než 12 znaků. 
    //V takovém případě opět vraťte false.
    if(inputStr.isLength>12) {
        document.body.innerHTML += `<p>${inputStr} není DIC. Je delší než 12 znaků</p>`
        return false
    }
    
    //Dále si ve funkce do proměnné prefix uložte první dva znaky vstupního řetězce.
    let prefix = inputStr.substring(0, 2)
    //Pomocí podmínky zkontrolujte, že proměnná 
    //prefix ne obsahuje přesně znaky CZ. 
    //Pokud je to pravda, ihned vraťte false.
    if(prefix!="CZ") {
        document.body.innerHTML += `<p>${inputStr} není DIC. prefix ${prefix} neobsahuje přesně znaky CZ</p>`
        return false
    }
    
    // Do promměné digits si uložte část vstupního řetězce od třetího znaku dále.
    let digits = inputStr.substring(2, inputStr.isLength)
    // Použijte metodu validator.isInt, která umí zkontrolovat, zda řetězec obsahuje pouze číslice. 
    //Pokud metoda vrátí false, ihned také vraťte false.
    if(validator.isInt(digits)==false) {
        document.body.innerHTML += `<p>${inputStr} není DIC. ${digits} není číslo</p>`
        return false
    }
    // Pokud funkce dospěla až do tohoto bodu, vstup prošel všemi testy. Můžeme vrátit true.
    // Vyzoušejte svoji funkci na různých vstupech a ověřte, že funguje. Nezapomeňte ověřit platná i neplatná DIČ.
    document.body.innerHTML += `<p>${inputStr} is DIC</p>`
}


// Příklady platných DIČ:
// CZ123456789
isDIC("CZ123456789")
// CZ1234567890
isDIC("CZ1234567890")
// Příklady neplatných DIČ:
// 123
isDIC("123")
// ABC
isDIC("ABC")
// 1234567890
isDIC("1234567890")
// 001234567890
isDIC("001234567890")
// 1234567890CZ
isDIC("1234567890CZ")
// CZ12345678901
isDIC("CZ12345678901")
// CZ12345678
isDIC("CZ12345678")
// CZA12345678
isDIC("CZA12345678")
