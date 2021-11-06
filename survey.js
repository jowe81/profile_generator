const readline = require('readline');

const { stdin: input, stdout:output } = require('process');

const rl = readline.createInterface({ input, output});

const questions = [
  "What's your name or nickname?",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

rl.question("What's your name or nickname? ", answer => {
  console.log(answer);
  rl.close();
});