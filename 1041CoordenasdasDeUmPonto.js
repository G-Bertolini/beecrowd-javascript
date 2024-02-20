var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (lines) => lines.split(" ").map(a => Number(a));

let [N1, N2] = pegarValores(lines.shift());

if(N1 > 0 && N2 > 0){
  console.log('Q1');
}
else if(N1 < 0 && N2 < 0){
  console.log('Q3');
}
else if(N1 < 0 && N2 > 0){
  console.log('Q2');
}
else if(N1 > 0 && N2 < 0){
  console.log('Q4');
}
else if(N1 === 0 && N2 === 0){
  console.log('Origem');
}
else if(N1){
  console.log('Eixo X');
}
else if(N2){
  console.log('Eixo Y');
}
else{
  console.log('erro');
}