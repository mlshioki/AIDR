import * as rs from 'readline-sync';

let num1 = 0;
let num2 = 0;

do{
    num1 = rs.question('Digite um número: ');
    num2 = rs.question('Digite outro número: ');
}while(isNaN(num1) || isNaN(num2));

console.log(`Soma dos números: ${num1+num2}`);