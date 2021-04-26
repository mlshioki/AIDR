import * as rs from 'readline-sync'

//Forçar a entrada a ser number e não string
const num1 = Number(rs.question('Primeiro número: '));
const num2 = Number(rs.question('Segundo número: '));
const num3 = Number(rs.question('Terceiro número: '));

const produto = num1*num2*num3;

console.log(`Produto: ${produto}`);