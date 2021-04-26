import * as rs from 'readline-sync';

const idade = Number(rs.question('Quantos anos você tem?'));

if(idade >= 18){
    console.log('Você é maior de idade');
}else{
    console.log('Você é menor de idade');
}

//---------------------------------------------

const dia = Number(rs.question('Digite um número de 0 a 6: '));

switch(dia){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda-feira');
        break;
    case 2:
        console.log('Terça-feira');
        break;  
    case 3:
        console.log('Quarta-feira');
        break; 
    case 4:
        console.log('Quinta-feira');
        break;    
    case 5:
        console.log('Sexta-feira');
        break;     
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('Dia inválido');
}