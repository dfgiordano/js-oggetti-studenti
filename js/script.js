/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. */
var studente = {
    nome : "federico",
    cognome : "giordano",
    eta : 30
};

console.log(studente);

/*  Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto. */
for (var key in studente) {
    console.log(studente[key]);
}
/* Creare un array di oggetti di studenti. */
var studentiClasse34 = [
    {
        nome : "andrea",
        cognome : "rossi",
        eta : 50
    },
    {
        nome : "paolo",
        cognome : "blu",
        eta : 35
    },
    {
        nome : "manuel", 
        cognome : "verde",
        eta : 31
    },
    {
        nome : "luca",
        cognome : "giallo",
        eta : 40
    }
];
console.log(studentiClasse34);
/*  Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome. */
for (i = 0; i < studentiClasse34.length; i++) {
    var studente = studentiClasse34[i];
    console.log(studente.nome, studente.cognome);
    /* esempio dello stesso esercizio con ciclo for in, invece del ciclo for
    for (var key in studente) {
        console.log(studente[key]);
    }
    */
}

/*  Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età. */

var nome = prompt("Inserisci il nome del nuovo studente");
var cognome = prompt("Inserisci il cognome del nuovo studente");
var eta = parseInt(prompt("Inserisci l'età del nuovo studente"));
var newObject = {};
newObject.nome = nome;
newObject.cognome = cognome;
newObject.eta = eta;

studentiClasse34.push(newObject);

console.log(studentiClasse34);


