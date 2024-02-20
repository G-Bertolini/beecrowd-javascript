var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (lines) => lines.split(" ").map(a => Number(a));
let [N1, N2] = pegarValores(lines.shift());

if(N1 > N2 ){
  if(N1 % N2 === 0){
    console.log('Sao Multiplos');
  }
  else{
    console.log('Nao sao Multiplos');
  }
}
else if(N2 > N1){
    if(N2 % N1 === 0){
      console.log('Sao Multiplos');
    }
    else{
      console.log('Nao sao Multiplos');
    }
}
