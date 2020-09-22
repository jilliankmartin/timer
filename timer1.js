
let userInput = process.argv.splice(2).sort((a, b) => a - b).filter(x => x >= 0);
for (let i = 0; i < userInput.length; i++) {
  setTimeout(() => {process.stdout.write('\x07')}, userInput[i] * 1000);
};