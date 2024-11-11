const title="Ukol2 Catering"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title
// Úkol 02


// Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to:
// Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.
// Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.
// Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

// Napište pro každou z těcho společností funkci s jedním parametrem, 
//který udává, pro kolik lidí se catering objednává. 
function JustFood(customers){
    const ourName = "Just Food"
    let ourPrice = 100
    
    const calculation = customers*ourPrice
    return `${customers} lidí za ${calculation} Kč`
}
function YourMama(customers){
    const ourName = "Your Mama"
    let ourPrice = 10
    const calculation = customers*ourPrice
    return `${customers} lidí za ${calculation} Kč`
}
function FlavorHaven(customers){
    const ourName = "Flavor Haven"
    let ourPrice = 3000
    const calculation = customers*ourPrice
    return `${customers} lidí za ${calculation} Kč`
}

//Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. 
//Například
// Catering od Flavour Haven pro 100 lidí za 300000 Kč
// Vyzkoušjte si vaše funkce v konzoli. 
console.log(JustFood(10))
console.log(YourMama(20))
console.log(FlavorHaven(30))

// Poté napište funkci createEvent, 
// která představuje vytvoření nějaké události s cateringem. 
// Funkce na vstupu obdrží:
// název události, 
// počet lidí a funkci, pomocí které se má provést catering. 
// Funkce createEvent pak vrátí zprávu ve smyslu
// Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč

function JustFood2(customers){
    const ourName = "Just Food"
    let ourPrice = 100
    
    const calculation = customers*ourPrice
    return `s cateringem od ${ourName} pro ${customers} lidí za ${calculation} Kč`
}
function YourMama2(customers){
    const ourName = "Your Mama"
    let ourPrice = 10
    const calculation = customers*ourPrice
    return `s cateringem od ${ourName} pro ${customers} lidí za ${calculation} Kč`
}
function FlavorHaven2(customers){
    const ourName = "Flavor Haven"
    let ourPrice = 3000
    const calculation = customers*ourPrice
    return `s cateringem od ${ourName} pro ${customers} lidí za ${calculation} Kč`
}
function createEvent(eventName, customers, cattering) {
    return `Událost ${eventName} ${cattering(customers)}`
}
console.log(createEvent("Korunovace", 2000, JustFood2))
console.log(createEvent("Kolaudace", 10, YourMama2))
console.log(createEvent("Defenestrace", 150, FlavorHaven2))

document.body.innerHTML += `<h3>${createEvent("Inaugurace prezidenta", 100, FlavorHaven2)}</h3>`
document.body.innerHTML += `<p>Ostatní výsledky jsou v konzoli.</p>`