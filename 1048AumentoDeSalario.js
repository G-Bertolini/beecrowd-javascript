var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');


let salario = parseFloat(lines.shift());
let novoSalario = 0;
let reajuste = 0;

if(salario <= 400.00){
  reajuste = (0.15 * salario)
  novoSalario = salario + reajuste;
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
  console.log(`Em percentual: 15 %`);
}
else if(salario > 400.01 && salario <= 800.00){
  reajuste = (0.12 * salario)
  novoSalario = salario + reajuste;
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
  console.log(`Em percentual: 12 %`);
}
else if(salario >= 800.01 && salario <= 1200.00){
  reajuste = (0.10 * salario)
  novoSalario = salario + reajuste;
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
  console.log(`Em percentual: 10 %`);
}
else if(salario >= 1200.01 && salario <= 2000.00){
  reajuste = (0.07 * salario)
  novoSalario = salario + reajuste;
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
  console.log(`Em percentual: 7 %`);
}
else if(salario > 2000.00){
  reajuste = (0.04 * salario)
  novoSalario = salario + reajuste;
  console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
  console.log(`Em percentual: 4 %`);
}
