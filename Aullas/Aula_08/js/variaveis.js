/*
Luiz Otavio Miranda tem 30 ano, pesa 84 kg tem 1.8 e seu IMC é de 29.92
Luiz Otavio nasceu em 1998. 
*/

const nome = 'Allyson';
const sobrenome = 'Oliveira';
const idade = '22';
const peso = '73';
const alturaEmM = '1.80';

// IMC
let indiceMassaCorporal; // peso / (altura * altura)

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

// Idade
let anoNascimento;

anoNascimento = 2020 - idade;

// Template String



console.log('\n'); // Espaço
console.log(`${nome} ${sobrenome} tem, ${idade} anos, pesa ${peso} kg tem ${alturaEmM} e seu IMC é de ${indiceMassaCorporal} `); //Forma correta
console.log(nome, sobrenome, 'nasceu em ', anoNascimento); // Forma antiga