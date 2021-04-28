
// GenBuzz
let myNumber = 80;

if (isNaN(parseFloat(myNumber))) {
    console.log('This is not a number');
}
else if (myNumber % 3 === 0) {
    console.log('Gen');
}
else if (myNumber % 5 === 0) {
    console.log('Buzz');
}
else if (myNumber % 15 === 0) {
    console.log('GenBuzz');
}
else {
    console.log(myNumber);
}

// E-Commerce Item List
let storeItem = 'hats';

switch(storeItem) {
    case 'shoes':
        console.log('Shoes are $50');
        break;
    case 'jeans':
        console.log('Jeans are $25');
        break;
    case 'hats':
        console.log('Hats are $12');
        break;
    case 'socks':
        console.log('Socks are $2');
        break;
    default:
        console.log('Invalid Item');
        break;
}


// ramdom integer between 50 and 100
let max = 100;
let min = 50;
console.log(Math.floor(min + Math.random() * (max - min))) ;