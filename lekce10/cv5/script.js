const title="Lekce10-cv1 "
document.body.innerHTML += `<h1>${title}</h1>`
const htmlTitle = document.querySelector("title")
htmlTitle.textContent = title

//code 
console.log('Funguju!')

const nezaplaceneObjednavky = [
	{
		id: 159753246,
		polozky: [
			{ nazev: 'knihy', mnozstvi: 5, cena: 200 },
			{ nazev: 'pero', mnozstvi: 1, cena: 50 },
			{ nazev: 'sešity', mnozstvi: 3, cena: 100 },
		],
		datum: '2023-04-07',
		uzivatel: {
			jmeno: 'Tomáš',
			email: 'tomas@volny.cz',
		},
	},
	{
		id: 456123789,
		polozky: [
			{ nazev: 'notebook', mnozstvi: 1, cena: 12000 },
			{ nazev: 'myš', mnozstvi: 1, cena: 400 },
			{ nazev: 'klávesnice', mnozstvi: 1, cena: 800 },
			{ nazev: 'sluchátka', mnozstvi: 1, cena: 1500 },
		],
		datum: '2023-04-08',
		uzivatel: {
			jmeno: 'Markéta',
			email: 'marketa@seznam.cz',
		},
	},
	{
		id: 987654321,
		polozky: [
			{ nazev: 'plavky', mnozstvi: 1, cena: 400 },
			{ nazev: 'papuče', mnozstvi: 1, cena: 100 },
			{ nazev: 'ručník', mnozstvi: 2, cena: 150 },
		],
		datum: '2023-04-09',
		uzivatel: {
			jmeno: 'Johanka',
			email: 'johanka@gmail.com',
		},
	},
	{
		id: 123456789,
		polozky: [
			{ nazev: 'tričko', mnozstvi: 2, cena: 250 },
			{ nazev: 'džíny', mnozstvi: 1, cena: 600 },
			{ nazev: 'boty', mnozstvi: 1, cena: 800 },
			{ nazev: 'pásek', mnozstvi: 1, cena: 100 },
		],
		datum: '2023-04-10',
		uzivatel: {
			jmeno: 'Jane',
			email: 'jane@outlook.com',
		},
	},
	{
		id: 852963741,
		polozky: [
			{ nazev: 'míč', mnozstvi: 1, cena: 300 },
			{ nazev: 'brankářské rukavice', mnozstvi: 1, cena: 800 },
			{ nazev: 'tréninkové dresy', mnozstvi: 10, cena: 500 },
			{ nazev: 'plíškový medvídek', mnozstvi: 1, cena: 150 },
		],
		datum: '2023-04-04',
		uzivatel: {
			jmeno: 'Ruda',
			email: 'ruda@email.cz',
		},
	},
	{
		id: 753951824,
		polozky: [
			{ nazev: 'matrace', mnozstvi: 1, cena: 5000 },
			{ nazev: 'polštář', mnozstvi: 2, cena: 300 },
			{ nazev: 'povlečení', mnozstvi: 1, cena: 800 },
		],
		datum: '2023-04-06',
		uzivatel: {
			jmeno: 'Novákovi',
			email: 'novakovi@seznam.cz',
		},
	},
]

const processEmails = (emails) => {
	document.querySelector('#emaily').textContent = emails.join(', ')
}

const processIdentifiers = (identifiers) => {
	document.querySelector('#identifikatory').textContent = identifiers.join(', ')
}

// Tyto dva řádky uprav podle zadání
const identifikatory = nezaplaceneObjednavky.map(objednavka => objednavka.id); 
const emaily = nezaplaceneObjednavky.map(objednavka => `${objednavka.uzivatel.jmeno} <${objednavka.uzivatel.email}>`);

processIdentifiers(identifikatory)
processEmails(emaily)
