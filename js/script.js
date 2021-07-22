import Countdown from './countdown.js';

const data = document.getElementById('data');

const tempoParaONatal = new Countdown('16 December 2021 23:59:59 GMT-0300');


setInterval(() => {
  const TempoParaONatalvalue = Object.values(tempoParaONatal.total).toString().replace(/[,]/g, ' ');

data.innerText = TempoParaONatalvalue;
}, 50);
