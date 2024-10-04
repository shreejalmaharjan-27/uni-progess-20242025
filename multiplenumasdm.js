// this is a program to take two or more inputs from the user and display the sum, multiplication, division and subtraction.
const inputs = [];

console.log("Enter number, press 'q' to quit and stop entering numbers");
while (true) {
    const input = prompt('Enter a number: ');
    if (input === 'q') {
        break;
    }

    inputs.push(parseInt(input));
}

let sum = 0;
let product = 1;
let division = 1;
let subtraction = 0;

for (let i = 0; i < inputs.length; i++) {
    sum += inputs[i];
    product *= inputs[i];
    division /= inputs[i];
    subtraction -= inputs[i];
}

console.log('The sum of the numbers is: ' + sum);
console.log('The product of the numbers is: ' + product);
console.log('The division of the numbers is: ' + division);
console.log('The subtraction of the numbers is: ' + subtraction);