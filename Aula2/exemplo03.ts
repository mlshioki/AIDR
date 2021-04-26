import * as rs from 'readline-sync';

const num = Number(rs.question('Digite um número: '));
let resposta = positivoOuNegativo(num);
console.log(`O número é ${resposta}`);


function positivoOuNegativo(numero: number): string{
    let resp = '';
    if(numero>0){
        resp = 'positivo';
    } else if(numero < 0){
        resp = 'negativo';
    } else{
        resp = 'zero';
    }

    return resp;
}