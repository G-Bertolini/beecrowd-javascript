var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (lines) => lines.split(" ").map(a => Number(a));
let [N1, N2, N3] = pegarValores(lines.shift());

if((N1-N3) < N2 && N2 < (N1 + N3)){
  let soma = N1 + N2 + N3;
  console.log('Perimetro = ' + soma.toFixed(1));
}
else{
  let perimetro = (N1 + N2) * N3/2;
  console.log('Area = ' + perimetro.toFixed(1));

}