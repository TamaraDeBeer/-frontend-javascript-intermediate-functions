
function rollDie() {
    // return Math.ceil(Math.random() * 6);
    // return Math.floor((Math.random() * 6)) + 1;
}

const die = rollDie();
console.log(die);


function rollDie2(sides = 6) {
    return Math.floor((Math.random() * sides)) + 1;
}

const die2 = rollDie2(24);
console.log(die2);

function rollHand() {
    const die3 = rollDie2();
    const die4 = rollDie2();
    const die5 = rollDie2();
    return [die3, die4, die5];
}

const hand = rollHand();
console.log(hand);


function rollHand2(amountOfDice) {
    let total = 0;
    for (let i = 0; i < amountOfDice; i++) {
        const die6 = rollDie2();
        console.log(`Roll ${ i+1 }: ${ die6 }`);
        total += die6;
    }
    return total;
}

const hand2 = rollHand2(3);
console.log(hand2);