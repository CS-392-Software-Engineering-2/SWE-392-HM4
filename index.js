function mooncakeSays(message) {
  let mooncake = '(o.o)';
 console.log("Welcome to Programiz!");
console.log("Welcome to Programiz!");
  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
