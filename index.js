function mooncakeSays(message) {
  let mooncake = '(O.o)';
 console.log("Welcome to Programiz!");
console.log("Welcome to Programiz!");
  console.log("Hello!");

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}!`;
}

module.exports.mooncakeSays = mooncakeSays;
