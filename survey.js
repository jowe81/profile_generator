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

let answers = [];
let questionsAnswered = 0;

const checkIfDone = () => questionsAnswered >= questions.length;

const generateOutput = () => {
  const output = answers[0] + " loves listening to "
    + answers[2] + " while " + answers[1] + ", devours "
    + answers[4] + " for " + answers[3] + ", prefers "
    + answers[5] + " over every other sport, and is amazing at "
    + answers[6] + ".";
  console.log(output);
  rl.close();
};

const askQuestion = (questionNo) => {
  rl.question(questions[questionNo] + " ", answer => {
    answers.push(answer);
    checkIfDone(++questionsAnswered) ? generateOutput() : askQuestion(questionNo + 1);
  });
};

askQuestion(0);

