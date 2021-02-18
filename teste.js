const person = {
    name: 'Danilo',
    age: 22,
    penis: 'gramde'
}

console.log(`O ${person.name} tem ${person.age} anos e um pinto bem ${person.penis}!!!` )

////////////////////////////////////////////////////////////////////////////

var weight ;

let student = {
    name: 'Danilo',
    age: 22,
    stars: 4.94,
    isSubscribed: true
};

let students = [student]

console.log(students[0])

let pedro = {
    name: 'lucas',
    age: 14,
    weight: 44.5,
    isSubscribed: true
}

students = [student, pedro]

console.log(students[1])

///////////////////////////////////////////

function createPhrases() {
    console.log('pega aqui'),
    console.log('no meu'),
    console.log('pauzao torto')
}

createPhrases()

const nelson = function(number1, number2){
    total = number1 + number2
    return total
};

let numbernove = 9
let numberquinze = 15

console.log(`o numero 1 eh ${numbernove}`)
console.log(`o numero 2 eh ${numberquinze}`)
console.log(`a soma eh ${nelson(18, 2)}`)

console.log(typeof total)

////////////////////////////////

function sayMyName (name) {
    console.log('antes da callback')

    name()

    console.log('depois da callback');
};

sayMyName (
    () => {
        console.log('estou em uma callback')
    });
///////////////////////////////

function Person (penis, macaco) {
    this.name = penis
    this.age = macaco
};

const meusdado = new Person ("Danilo", 22)

function phrase () {
    console.log(`Meu nome eh ${meusdado.name} e tenho ${meusdado.age} anos`)
}

phrase()

console.log(typeof this)


// outro exemplo (mais semanticamente correto neam)


function Animal (species, race, name) {
    this.espécie = species
    this.raça = race
    this.nome = name
}

const Dog = new Animal ('Cachorro', 'Schnauzer', 'Dexter')
const Cat = new Animal ('Gato', 'Persa', 'Felix')

console.log(Cat)

//////////////////

let number = 543.66523245
let johnsons = "vai se fode"
number += 2

console.log(number.toFixed(2).replace(".", ","))
console.log(johnsons.includes("fode"))

let johnsonsArray = johnsons.split(" ")
console.log(johnsonsArray.join("_"))
console.log(Array.from(johnsons)) //transformando todos os caracteres em elementos do array

///////////////////////

console.log(2>1 ? "podecre" : "nadave")

let stars = 5.02

if (stars>= 0 && stars<4.9) {
    console.log("motorista merda")
} else if (stars>=4.9 && stars<4.97) {
    console.log("motorista bom")
} else if (stars>=4.97 && stars<=5) {
    console.log("motorista zika da balada")
} else {
    console.log("nota invalida")
}

////////////////////////

function calculator (number1, operator, number2) {
    let result = undefined

    switch (operator){
        case '+': result = number1 + number2
        break;
        case '-': result = number1 - number2
        break;
        case '*': result = number1 * number2
        break;
        case '/': result = number1 / number2
        break;
        default: console.log("nao implementado")        
    }

    return result
}

console.log(calculator(5, "*", 2))

//////////////////////////////

function sayMyName (name = '') {
    if (name === '') {
        throw 'tem q ter nome carai'
    }

    console.log(name)
}

try {
    sayMyName()
}
catch (e) {
    console.log(e)
}

console.log('dps da cena toda')

/////////////////////////////////////

var numbers = [1, 5, 12, 15, 534, 21, 55, 21, 57, 87, 43];

function turnToPar () {
        for(let item of numbers) {
            if (item % 2 == 1){
                console.log(++item)
            }
            else {
                console.log(item)
            };
        }
};

turnToPar()
//////////////////////////////////

function conversion (note) {
    if (note < 60 && note >= 0) {
        console.log("F")
    } else if (note >= 60 && note < 70) {
        console.log("D")
    } else if (note >= 70 && note < 80) {
        console.log("C")
    } else if (note >= 80 && note < 90) {
        console.log("B")
    } else if (note >= 90 && note <= 100) {
        console.log("A")
    } else {
        console.log("Nota Invalida")
    }
}

conversion ("44")
///////////////////////////////

let wallet = {
    totalIn: [1500, 600, 400],
    totalOut: [100, 26, 3.90, 250, 650, 250]
}

function sum (walletItem) {
    let total = 0

    for (let value of walletItem){
        total += value
    }
    return total
}

function calculation ({totalIn, totalOut}) {
    const incomes = sum(totalIn)
    const expenses = sum(totalOut)

    return console.log(incomes-expenses)
}

calculation(wallet)