const name = 'Freddy';
typeof name === 'string';

if (!('serviceworker' in navigator)) {
  // you have an old browser :-(
}

const greeting = 'hello';

console.log(`${greeting} world!`);

[(1,2,3)].forEach((x) => console.log(x));