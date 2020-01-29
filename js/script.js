// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
  'nome': 'Davide',
  'cognome': 'Lugli',
  'eta': '22',
}

for (var key in studente) {
  console.log(studente[key]);
}
console.log('fine punto 1');
console.log('inizio punto 2');
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var studenti = [{
    'nome': 'Giacomo',
    'cognome': 'Rossi',
    'eta': '21'
  },
  {
    'nome': 'John',
    'cognome': 'Cena',
    'eta': '40'
  },
  {
    'nome': 'Sam',
    'cognome': 'Rockwell',
    'eta': '34'
  },
  {
    'nome': 'Rick',
    'cognome': 'Sanchez',
    'eta': '27'
  },
]

for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i]);
  var singoloStudente = studenti[i];
  console.log('Nome studente:' + singoloStudente.nome + ' ' + 'Cognome studente:' + ' ' + singoloStudente.cognome);
}
console.log('fine punto 2');
console.log('inizio punto 3');
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuovoStudente = {
  'nome': '',
  'cognome': '',
  'eta': '',
};
var nome = prompt('Benvenuto studente! Inserisci il tuo nome!');
console.log(nome);
var cognome = prompt('Inserisci il tuo cognome!');
console.log(cognome);
var eta = parseInt(prompt('Ed infine la tua età'));
console.log(eta);
nuovoStudente.nome = nome;
nuovoStudente.cognome = cognome;
nuovoStudente.eta = eta;
console.log(nuovoStudente);
studenti.push(nuovoStudente);
console.log(studenti);


// for (var k = 0; k < studenti.length; k++) {
//   var singoloStudente = studenti[k];
//
//   for (var chiave in singoloStudente) {
//   singoloStudente.chiave = prompt('inserisci la tua eta');
//   }
// }
