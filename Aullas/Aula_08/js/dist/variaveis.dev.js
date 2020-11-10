"use strict";

/*
Luiz Otavio Miranda tem 30 ano, pesa 84 kg tem 1.8 e seu IMC é de 29.92
Luiz Otavio nasceu em 1998. 
*/
var nome = 'Allyson';
var sobrenome = 'Oliveira';
var idade = '22';
var peso = '73';
var alturaEmM = '1.80'; // IMC

var indiceMassaCorporal; // peso / (altura * altura)

indiceMassaCorporal = peso / (alturaEmM * alturaEmM); // Idade

var anoNascimento;
anoNascimento = 2020 - idade; // Template String

console.log('\n'); // Espaço

console.log("".concat(nome, " ").concat(sobrenome, " tem, ").concat(idade, " anos, pesa ").concat(peso, " kg tem ").concat(alturaEmM, " e seu IMC \xE9 de ").concat(indiceMassaCorporal, " ")); //Forma correta

console.log(nome, sobrenome, 'nasceu em ', anoNascimento); // Forma antiga