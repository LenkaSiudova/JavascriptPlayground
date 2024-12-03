const title="Lekce10-cv2 Práce s indexy"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
//Napište funkci first, která jako svůj parametr přijme pole a vrátí první prvek tohoto pole. 
//Pokud pole bude prázdné, funkce vrátí undefined. Funkci otestujte s několika různými poli. Například:

function first(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}

console.log(first([3, 2, 1])); // ⟶ 3
console.log(first([])); // ⟶ undefined

//Napište funkci last, která jako svůj parametr přijme pole a vrátí poslední prvek tohoto pole. Pokud pole bude prázdné, funkce vrátí undefined. Funkci otestujte s několika různými poli. Například:

function last(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

console.log(last([3, 2, 1])); // ⟶ 1
console.log(last([])); // ⟶ undefined


//Napište funkci middle, která jako svůj parametr přijme pole a vrátí prvek uprostřed tohoto pole. 
//Pokud pole bude prázdné, funkce vrátí undefined. 
//Pokud pole bude obsahovat sudý počet prvků, vrátí funkce prvek vlevo od středu. 
//Funkci otestujte s několika různými poli. Například:

function middle(arr) {
    if (arr.length === 0) return undefined;
    const middleIndex = Math.floor((arr.length - 1) / 2);
    return arr[middleIndex];
}

console.log(middle([0, 1, 55, 11, 3, 2, 1])); // ⟶ 2
console.log(middle([3, 2, 1, 0])); // ⟶ 2
console.log(middle([])); // ⟶ undefined

//Napište funkci middleMean, která jako svůj parametr přijme pole a vrátí prvek uprostřed tohoto pole. 
//Pokud pole bude prázdné, funkce vrátí undefined. 
//Pokud pole bude obsahovat sudý počet prvků, vrátí funkce průměr dvou prvků uprostřed. 
//Funkci otestujte s několika různými poli. Například:

function middleMean(arr) {
    if (arr.length === 0) return undefined;
    const middleIndex = Math.floor((arr.length - 1) / 2);
    if (arr.length % 2 === 0) { //pokud Délka pole `arr` je sudé číslo.
        return (arr[middleIndex] + arr[middleIndex + 1]) / 2;
    } else {
        return arr[middleIndex];
    }
}

console.log(middleMean([3, 2, 1])); // ⟶ 2
console.log(middleMean([3, 2, 1, 0])); // ⟶ 1.5
console.log(middleMean([])); // ⟶ undefined

//Napište funkci insert, která jako první parametr přijme pole a jako druhý parametr nějakou hodnotu. 
//Funkce zkontroluje, zda pole již obsahuje tuto hodnotu. Pokud ano, vrátí false. Pokud ne, vloží hodnotu na konec pole a vrátí true. Funkci otestujte s několika různými poli. Například:

function insert(arr, value) {
    if (arr.includes(value)) {
        return false;
    } else {
        arr.push(value);
        return true;
    }
}

console.log(insert([3, 2, 1], 4)); // ⟶ true
console.log(insert([3, 2, 1], 3)); // ⟶ false
