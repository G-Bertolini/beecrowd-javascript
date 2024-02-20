var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (lines) => lines.split(" ").map(a => Number(a));
let arrayOriginal = [];

arrayOriginal = pegarValores(lines.shift());

let arrayOrdenado = [...arrayOriginal];


function immprimeArraySort(array){
  array.sort((a, b) => a - b);
  for(i = 0 ; i < arrayOrdenado.length; i++){
    console.log(arrayOrdenado[i])
  }
}

function imprimeArrayNormal(array){
  for(novoArray of array){
    console.log(novoArray);
  }
}

immprimeArraySort(arrayOrdenado);
console.log('')
imprimeArrayNormal(arrayOriginal);