import * as rs from 'readline-sync';

//while
let num = 3;

while (num <= 10){
    num++;
    console.log(num);
}

//do while
let nome: string;

do{
    nome = rs.question('Digite seu nome');
}while(nome === '');

//for
let repeticao = Number(rs.question('2 elevado a: '));
let result = 1;

for(let i=1; i < repeticao; i++){
    result = result * 2;
}

console.log(`Resultado: ${result}`);