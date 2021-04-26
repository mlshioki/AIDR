import * as rs from 'readline-sync';

let numeros: number[] = new Array();
let num: number;

do{
    num = Number(rs.question('Digite um número: '));
    numeros.push(num);
}while(num > 0);

for(let numero of numeros){
    if(numero % 2 == 0){
        console.log(`${numero}; `);
    }
}