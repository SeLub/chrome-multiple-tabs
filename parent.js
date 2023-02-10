const cp = require('child_process');
const urlBank = require('./urlBnak.js')

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand * 1000);
}

let instance = [];
let interval  = randomInteger(7, 12);
urlBank.forEach((url, index) => {
  instance[index] = cp.fork(`${__dirname}/sub.js`);
  instance[index].on('message', (message) => {
  console.log(`PARENT ${index} got message:`, message);
  interval = interval + randomInteger(2, 5);
  setTimeout(() => instance[index].send(url), interval);
  });

})
