const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let allAnswers = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  allAnswers.name = answer;

    rl.question("What's an activity you like doing? ", (answer) => {
      allAnswers.activity = answer;

      rl.question("What do you listen to while doing that? ", (answer) => {
        allAnswers.activityMusic = answer;

        rl.question("Which meal is your favourite? (eg: dinner, brunch, etc...)", (answer) => {
          allAnswers.meal = answer;

          rl.question("What's your favourite thing to eat for that meal?", (answer) => {
            allAnswers.food = answer;

            rl.question("Which sport is your absolute favourite?", (answer) => {
              allAnswers.sports = answer;

              rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
                allAnswers.superpower = answer;

                console.log(`Your name is ${allAnswers.name}. your favourite activity is ${allAnswers.activity} and you listen to ${allAnswers.activityMusic}. Your favourite meal time is ${allAnswers.meal} and you like to eat ${allAnswers.food}. Your favourite sport is ${allAnswers.sports}, and your superpower is ${allAnswers.superpower}.`);

                rl.close();
              });
            });
          });
        });
      });
    });
});
