const title="Lekce8-cv1 Hesla"
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
const weakPassword = (len) => {
    let result = '';
    for (let i = 0; i < len; i++) {
      result += String(i % 10);
    }
  
    return result;
  };
  
  const mediumPassword = (len) => {
    let result = '';
    for (let i = 0; i < len; i++) {
      const digit = Math.floor(Math.random() * 10);
      result += String(digit);
    }
  
    return result;
  };
  
  const strongPassword = (len) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_-/?';
    let result = '';
    for (let i = 0; i < len; i++) {
      const charIndex = Math.floor(Math.random() * chars.length);
      result += chars[charIndex];
    }
  
    return result;
  };

  document.body.innerHTML += `<p>${weakPassword(5)}</p>`   // → '01234'
  document.body.innerHTML += `<p>${mediumPassword(8)}</p>` // → '48140525'
  document.body.innerHTML += `<p>${strongPassword(6)}</p>` // → 'azc7mw'

// Napište funkci createAccount, která se bude tvářit, že zakládá nový uživatelský účet. 
// Funkce bude mít dva parametry user a generatePassword. 
//První bude uživatelské jméno a 
//druhý bude funkce, pomocí které se má vygenerovat heslo pro tento účet. 
//Funkce createAccount vrátí řetězec, který bude obsahovat 
//jméno uživatele a heslo vygenerované voláním funkce generatePassword. 


function createAccount(user, generatePassword) {
    let text = `Uživatel ${user} s heslem ${generatePassword}`
    return text
}

//Funkci generatePassword při volání předejte číslo 9 jako délku hesla.  
function generatePassword() {return strongPassword(9)}

// Na konci javascriptového kódu vyzkoušejte založit více různých účtů s různými typy hesel. 
document.body.innerHTML += `
    <p>${createAccount('Míša', weakPassword(5))}</p>
    <p>${createAccount('Řízek', mediumPassword(8))}</p>
    <p>${createAccount('Mápodčepicí', strongPassword(6))}</p>
    <p>${createAccount('Kdokoli', generatePassword())}</p>
`;

