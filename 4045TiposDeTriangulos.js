var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (lines) => lines.split(" ").map(a => Number(a));
let vetor = [];
 vetor = pegarValores(lines.shift());

const array = vetor.sort( (a,b) => b - a);
const [A, B, C] = array;

if(A >= B + C){
  console.log('NAO FORMA TRIANGULO');
}
else if(Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2)){
  console.log('TRIANGULO RETANGULO');
}
else if(Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)){
  console.log('TRIANGULO OBTUSANGULO');
  if(A === B && B === C){
    console.log('TRIANGULO EQUILATERO');
  }
  else if((A === B || A === C )|| (B === A || B === C) || (C === A|| C === B) ){
    console.log('TRIANGULO ISOSCELES');
  }
}
else if(Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2)){
  console.log('TRIANGULO ACUTANGULO');
  if(A === B && B === C){
    console.log('TRIANGULO EQUILATERO');
  }
  else if((A === B || A === C )|| (B === A || B === C) || (C === A|| C === B) ){
    console.log('TRIANGULO ISOSCELES');
  }
}
