import * as rs from 'readline-sync';

//código para problemas com acentuação = chcp 65001

const num1 = Number(rs.question('Qual o primeiro número? '));
const num2 = Number(rs.question('Qual o segundo número? '));
const operacao= rs.question('Qual a operação desejada? (+, -, * ou /) ');

switch(operacao){
    case '+':
        console.log('O resultado é: ' + (num1 + num2));
        break;
    case '-':
        console.log('O resultado é: ' + (num1 - num2));
        break;
    case '*':
        console.log('O resultado é: ' + (num1 * num2));
        break;
    case '/':
        console.log('O resultado é: ' + (num1 / num2));
        break;
    default:
        console.log('Operação inválida');
}
