var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (lines) => lines.split(" ").map(a => Number(a));
let [salario] = pegarValores(lines.shift());
let diferencaSalario = 0;
let resultado = 0;
if(salario <= 2000.00){
  console.log('Isento');
}
else if(salario >= 2000.01 && salario <= 3000.00){
  diferencaSalario = salario - 2000.00;
  resultado = diferencaSalario * 0.08;
  console.log(`R$ ${resultado.toFixed(2)}`);
}
else if(salario >= 3000.01 && salario <= 4500.00){
  diferencaSalario = (salario - 3000.00) * 0.18;
  resultado = diferencaSalario + (1000.00 * 0.08)
  console.log(`R$ ${resultado.toFixed(2)}`);
}
else if(salario > 4500.00){
  diferencaSalario = (salario - 4500) * 0.28;
  resultado = diferencaSalario + (1500.00 * 0.18) + (1000.00 * 0.08);
  console.log(`R$ ${resultado.toFixed(2)}`);

}