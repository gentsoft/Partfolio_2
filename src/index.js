import App from './App.js';
import instructions from './instructions.js';

let root = document.querySelector('#root');

root.innerHTML = `${App()}`;

setTimeout(() => {
  instructions();
}, 1000);