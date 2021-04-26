import * as rs from 'readline-sync'

//Declarar variáveis
const message: string = 'Olá, mundo';
let numero: number;
const flag: boolean = true;
let anything: any;

numero = 5; 

//Imprimir na tela
console.log(message); //alert

//Entrada de dados
const nome: string = rs.question('Nome: ');

console.log('Olá, ' + nome);
//Template de string ou interpolação
console.log(`Olá, ${nome}`);