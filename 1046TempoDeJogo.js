var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (lines) => lines.split(" ").map(a => Number(a));
let [horaInicio, horaFim] = pegarValores(lines.shift());
let totalHoras = 0;
if(horaInicio < horaFim){
  totalHoras = horaFim - horaInicio;
  console.log(`O JOGO DUROU ${totalHoras} HORA(S)`);
}
else if(horaInicio > horaFim){
  totalHoras = 24 - (horaInicio - horaFim);
  console.log(`O JOGO DUROU ${totalHoras} HORA(S)`);
}
else if(horaInicio === horaFim){
  totalHoras = 24;
  console.log(`O JOGO DUROU ${totalHoras} HORA(S)`)
}

