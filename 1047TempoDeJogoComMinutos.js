var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (lines) => lines.split(" ").map(a => Number(a));
let [horaInicio, minutoInicio, horaFim, minutoFim] = pegarValores(lines.shift());


let minutes = 0;
let hours = 0;

if (
  horaInicio == horaFim &&
  minutoInicio == minutoFim &&
  horaInicio == minutoFim
) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
  if (horaInicio > horaFim) {
    hours = 24 - horaInicio + horaFim;
  } else if (horaInicio < horaFim) {
    hours = 24 - (24 - horaFim + horaInicio);
  }
  if (minutoInicio > minutoFim) {
    minutes = 60 + minutoFim - minutoInicio;
    if (horaInicio == horaFim) {
      hours = 24 + hours - 1;
    } else {
      hours = hours - 1;
    }
  } else {
    minutes = minutoFim - minutoInicio;
  }
  console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`);
}


