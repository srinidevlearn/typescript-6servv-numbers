// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Numbers</h1>`;

let num1 = 1;
// num1 = 'sa'; // throws error at editor due to implicit type assignment

let num2: number = 1;
num2 = 3;
console.log(num2);
