const readline = require('readline')

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === "c") {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
  if (key.name === "b") {
    process.stdout.write('\x07');
  }
  if (str === "1" || str === "2" || str === "3" || str === "4" || str === "5" || str === "6" || str === "7" || str === "8" || str === "9") {
    console.log(`setting timer for ${str} seconds...`);
    setTimeout(() => {process.stdout.write('\x07')}, str * 1000);
  }
  else {
    console.log("I don't know what to do with that letter!");
  }
})
console.log("Press any key...")