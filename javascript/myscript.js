/**
 * 
 *  Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
 *  Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
 *  Creare un array di oggetti di studenti.
 *  Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
 *  Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
 * 
 */

const studentOne = { //Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
    name : 'Davide',
    surname : 'Zattra',
    age : 27
}

for(let properties in studentOne){ // Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

    console.log(studentOne[properties])

}

const studentsList = { //Creare un array di oggetti di studenti.

    student : [
        {
            name : 'Davide',
            surname : 'Zattra',
            age : 27
        },

        {
            name : 'Eugenio',
            surname : 'Tacconi',
            age : 75
        },

        {
            name : 'Mario',
            surname : 'Rossi',
            age: 25
        }
    ]
}

for (let i in studentsList.student) { //Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

    console.log(studentsList.student[i].name)
    console.log(studentsList.student[i].surname)

}
